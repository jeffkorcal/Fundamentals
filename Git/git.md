## Initialize
- `git config` - is where you can configure your username, email, ssh, editor, alias, etc.
- `git init` - initialized empty repository

## Clone
- `git clone [github/url]` - clone remote repo to local and adds the origin remote
- `git clone [github/url] changeName` - if you add a name at the end, it will change the local folder name

## Local Branching
- `git checkout -b [nameOfBranch]` - shortcut for creating and checking out a branch
- `git branch -d [nameOfBranch]` - delete local branch but checks to see if commits were made
- `git branch -D [nameOfBranch]` - delete local branch not caring if commits were made

## Check
- `git status` - what files have changed since the last commit
- `git diff` - show unstaged differences since the last commit
- `git diff` --staged - view staged differences since the last commit
- `git log` - logs all prior commits

## Stage & Commit
- `git add [paths/to/filename(s)]` - stage file(s)
- `git add .` - stages every change in repo
- `git commit` - commit the change
- `git commit -m "commit message"` - shorthand for including a commit message
- `git commit --amend` - add change to your last commit. if nothing is stage you can edit previous commit message.
- `git commit --amend --no-edit` - add changes to your last commit without changing commit message.

## Undo Changes
### Unstaged
- `git checkout -- [filename]` - discard changes on a specific file since the last commit
- `git checkout -- .` - discard all changes since the last commit
### Staged
- `git reset HEAD [filename]` - unstage file(s)
### Committed
- `git reset --soft HEAD^` - undo last commit, put changes into staging
- `git reset --hard HEAD^` - undo last commit and all changes
- `git reset --hard HEAD^^` - undo last two commits and all changes

## Merge to and from Remote Repo
- `git push [remote/repo]` - to push merged local repo to remote repo
- `git pull [remote/repo]` - merges remote repo to your local repo
- `git fetch [remote/repo]` - check if there are any changes to the remote repo
> Note: git pull does the same thing as git fetch then git merge origin/master

## Rebase
- `git pull --rebase [remote/repo]` - rebase adds your commits on top of the original branch without a merge commit
### Always Rebase on Pull
- `git config --global pull.rebase true`
### Merge Conflicts
1. resolve conflicts
2. git add
3. git rebase --continue
### Interactive Rebasing
`git rebase -i HEAD~4`
- p, pick = use commit
- r, reword = use commit, but edit the commit message
- e, edit = use commit, but stop for amending
- s, squash = use commit, but meld into previous commit
- f, fixup = like "squash", but discard this commit's log message
- x, exec = run command (the rest of the line) using shell