# Console Fundamentals

GETTING STARTED

Console
* Console: A text-based interface to your computer
* POSIX: Unix, GNU/Linux, Darwin, BSD, Solaris

Running Commands
* Commands
    * ls: lists the files and directories of a directory
        * -l: prints long form of file list
        * -a: show all files, including hidden files
    * clear: clear the screen
* $ means the end of your prompt and the beginning of your input

Moving Around the Filesystem
* Commands
    * cd: change directory
        * cd ~ or cd $HOME
        * cd /home/usr
        * cd .. back a directory
    * pwd: print working directory
* Unix
    * /home/usr

Reading Files
* Commands
    * less: view txt files
    * cat: concatenate files and print on the standard output
        * can take more than one argument

Editing Files
* nano editor
* emacs editor
* vim editor

Moving and Deleting Files
* Commands
    * mv: move or renames a file or directory (takes two arguments)
        * Rename
            * mv file.txt newfile.txt
        * Move
            * mv file.txt Documents/
        * Move & Rename
            * mv file.txt Documents/newfile.txt
    * cp: copies a file or directory (take two arguments)
        * Copy
            * cp file.txt copyfile.txt
            * cp -r source_directory new_directory
    * rm: removes a file or directory
        * Remove
            * rm file.txt
            * rm -r deleting_directory
    * mkdir: make directory or create a new directory
        * Make Directory
            * mkdir new_directory
            * mkdir -p directory/new_directory/new_nested_directory


USERS AND PERMISSIONS

Create User
* Commands
    * whoami: displays the user you are currently logged in as
    * adduser: interactive tool for creating users
    * su: switch user or allow you to login as a different user
    * sudo: perform a command as the super user
    * exit: allow you to exit out of a user

File Permission
* Permissions that can be set are Read, Write, Execute
* Permissions can be defined on User, Group, Other
* So each user, group, and other will have a read, write, execute permissions
* Commands
    * Chmod: change the permissions (mode) of a file or directory
* rwx notation
    * In ls -l, each file has a 10 character permission representation such as drwxrwxrwx. Each character represents a permission on the file. If the letter is replaced with a dash (-), it indicates the permission is not granted. For example -rwxr-xr-x.
    * The first character denotes if it is a dirctory. d means directory, -, means not a directory.
    * The next 9 characters can be grouped into triplets of rwx. The leftmost triplet is for the owner of the file, the middle is the group owner, and the right is permissions for others. rwx stand for the read, write, and execute permissions, respectively.
    * Example
        * chmod ug+r
* Octal notation
    * You may read or set permissions using a 3 digit octal number. The digits represent the owner, group, and other permissions, from left to right. Each digit may be 0 through 7 representing the different combinations of read, write, and execute.
    * To compute what each digit means, use this formula.
    * read/r = 4
    * write/w = 2
    * execute/x = 1
    * For each permission you want to grant, sum their corresponding values.
    * 8 Possible Combinations
        * 0 - - -
        * 1 - - x
        * 2 - w -
        * 3 - w x
        * 4 r - -
        * 5 r - x
        * 6 r w -
        * 7 r w x
    * Example
        * chmod 777 example_file.txt: all permission open
        * chmod 640 example_file.txt: user can read and write, group can read, other nothing

File Ownership
* chown: changes the owner of a file or directory
    * sudo chown user:group file_or_directory

Sudo
* Root can override every permission on computer
* Commands
    * Sudo: Run a command as the super user
    * !!: Represents the most recently run command
    * sudo !!: run the previous command as the super user


PROCESSES

Processes
* Process: Instance of a program
* Commands
    * top: a task manager that lest you view processes
        * h or ? for help to sort
    * ps: show process statuses
        * ps aux: view a full list of all processes
    * grep: search for a pattern
        * ps aux | grep “process trying to find"

Pausing and Resuming
* Key Sequences
    * ctrl + z Stop (pause) a process and puts it in the background
    * ctrl + c Terminate (exit) a process
* Commands
    * fg - Bring a job to the foreground
        * ex. fg 1
    * &: will immediately send a process in the background
        * ex. top &
    * jobs - shows a list of processes in your current session

Killing Processes
* Commands
    * kill - Send a signal to a process (does not necessarily quit everything)
* Signals: a message sent to a process by the operating system
    * KILL or 9 - Force a process to exit (force quits a process)
        * ex. kill -KILL
    * TERM (default) - Request a process terminate normally (like ctrl + c)
        * ex. kill -TERM
    * STOP - Stop or pause a process (like ctrl + z)
        * ex. kill -STOP


ENVIRONMENT AND REDIRECTION

Environment Variables
* Overview
    * Programs and commands can take arguments and options as the input that affects the behavior of the program. 
    * Environment variables are just like variables in any programming language in that they store a value associated with a name that can change how the system behaves.
        * For the console our environment variables will be written in all upper case and the values they should will be strings
        * Some environment variables include home, path, and PS1
            * $HOME is the path to your home directory
            * $PATH variable is a list of locations where programs are stored
                * /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
            * $PS1 variable defines the format of your command line prompt
* Commands
    * VARIABLE=value - set a local environment variable
        * When calling or expanding the environment variable you use the $ sign. ex. $PS1
        * If you are seeing the environment variable you don’t use the $ sign. ex. PS1=“\w >"
    * export VARIABLE=value - set an environment variable that will be visible to child processes
        * export PATH=/home/user/bin:PATH
    * env - view environment variables
    * bash - start a new session within your current session
    * echo - display the arguments sent to echo
    * which - prints the location of a program
    * .bashrc - file that bash reads every time it starts up

Find and Grep
* Commands
    * find . -name "search" - used to located a file by name, more specifically look for files with the name search starting from your current location
    * grep "pattern" file - used to search inside a file for a pattern, more specifically find any lines that contain the pattern in the given file
        * grep -n : print the line number in results
        * grep -i : perform a case insensitive search
        * grep -v : show lines without pattern
* Troubleshooting
    * If you have deleted your hello.txt and want it back, run the following command to restore it to your home directory.
        * curl -Lo ~/hello.txt http://trhou.se/console_hello

Pipes and Redirection
* Being able to manipulate the input and output of programs means you can construct some very useful commands by using the simple commands you know in new and interesting ways
* Standard Input for the command line is the keyboard; however, you can redirect a plain text file as an input as well
* Standard Out for the command line is the screen; however, you can redirect an out to a plain text file
* Piping takes the output of one command into another and so on
* Commands
    * Input: some command < inputfile : run somecommand with input from inputfile, instead of the keyboard
    * Output: some command > outputfile : run somecommand with output to outputfile instead of the terminal screen.
    * Append: some command >> outputfile : run somecommand with output appended to outputfile instead of overriding it.
    * Errors through stream: somecommand 2> errorlog.txt : run somecommand and redirects stream number 2 or the error to errorlog.txt
        * find / -name “sudoers” 2> errorlog.txt
    * /dev/null : somecommand 2> /dev/null : a special file that will delete anything written into it
        * find / -name “sudoers” 2> /dev/null
    * Pipe: command1 | command2 pipe the output of command1 to the input of command 2
    * Sort: Sorts the lines of standard input and sends it to standard output


INSTALLING SOFTWARE

Building Software From Source
* Commands
    * sudo apt-get update: Update your computer's catalog of available software
    * sudo apt-get install build-essential: Install the tools needed to build software from source code
    * curl -O URL: Download the file at the URL
    * tar -xvf FILENAME.tar.gz: Decompress the tar.gz file to the current directory
    * ./configure: Run the configure script that comes with the source code. This creates a Makefile
    * make: Run the build specified in the Makefile
    * sudo make install: Run the install script from the Makefile. This installs the program
* The typical order of operations for building and installing software from source: ./configure, make, sudo make install
* On Ubuntu Linux, build-essential should be installed in order to build programs from source

Introduction to Package Managers
* Commands
    * apt-get update: Update your package catalog on your computer
    * apt-cache search PATTERN: Search the available packages for a pattern
    * apt-get install PACKAGE: Install one or more packages
    * apt-get upgrade: Upgrade to the latest version of all the packages installed
    * apt-get remove PACKAGE: Remove or uninstall package from your computer