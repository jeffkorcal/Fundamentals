# UNIX Basics
```
Command + Option + Argument
```

## FILES AND DIRECTORIES
| CMD   | DESCRIPTION                                                |
|-      |-                                                           |
| pwd   | present working directory                                  |
| ls    | list what's in directory                                   |
| cd    | change directory                                           |
| mkdir | make directory                                             |
| open  | open file or directory in GUI                              |
| cp    | copy file or directory (ex. -av, -R)                       |
| mv    | move and or rename a file or directory                     |
| rm    | remove a file or directory (ex.                            |
| rmdir | remove a directory                                         |
| find  | finds file or folder (ex. find ~/Desktop -name "example*”) |

## TEXT EDITING
| CMD   | DESCRIPTION                                                |
|-      |-                                                           |
| cat   | concatenate and prints files all at once                   |
| less  | page through a file                                        |
| nano  | text editor                                                |

## HELP
| CMD     | DESCRIPTION                                              |
|-        |-                                                         |
| wheris  | locate programs                                          |
| whatis  | provides a brief description of a command                |
| man     | view manual page                                         |

## OWNERSHIP AND PERMISSIONS
| CMD     | DESCRIPTION                                                                                                                                    |
|-        |-                                                                                                                                               |
| su      | switch user                                                                                                                                    |
| sudo    | substitute users do (sudo -s)                                                                                                                  |
| id      | displays the user and group names and numeric IDs                                                                                              |
| chown   | change the ownership/group of a file or directory (ex. chown user:staff file.name)                                                             |
| chmod   | change the permissions of a file or directory (ex. chmod 764 file.name) *Read=4, Write=2, Execute=1, No Permissions=0 (ex. 777, 764, 755, 700) |
| chflags | change the flag of a file or directory (ex. hidden or not hidden)                                                                              |

## LINKS
| CMD   | DESCRIPTION                                                |
|-      |-                                                           |
| alias | Allow to shortcut commands (ex. alias ll=‘ls -la’)         |
| ln    | Hard links (ex. ln file/to/link hardlink)                  |
| ln -s | Symbolic links (ex. file/to/link symlink)                  |

### Difference between Alias, Hard Link, Symbolic Link 
- Alias: Saves path and keeps tracks of the files location - breaks when original file is deleted but not when it is moved 
- Hard links: Creates another file pointing to the actual location on storage - does not break when original file 
- Symbolic links: Saves only path to file - breaks when original file is deleted or moved

## UTILITIES
| CMD        | DESCRIPTION                                                                                                                                |
|-           |-                                                                                                                                           |
| df         | show free disk space                                                                                                                       |
| du         | show disk usage of allocated space (-sh, -dh)                                                                                              |
| ps         | view process status (ex. ps aux)                                                                                                           |
| top        | view process (ex. top -n 10 -o cpu -s 3 -U username)                                                                                       |
| kill       | quits a process by process ID (-9 force kills)                                                                                             |
| killall    | quits all processes by name (ex. killall -KILL)                                                                                            |
| halt       | shutdown (needs to be sudo)                                                                                                                |
| reboot     | restart (needs to be sudo)                                                                                                                 |
| passwd     | change password (sudo will not ask for old password)                                                                                       |
| zip        | archives and compresses a file or directory (-e for encryption) *zip folder with encryption: $ zip -er archiveName.zip /path/to/directory/ |
| unzip      | unzip a file or directory                                                                                                                  |
| tar        | archives a file or directory with ownership and permissions                                                                                |
| gzip       | compresses a file                                                                                                                          |
| curl       | transfer data from server and/or internet                                                                                                  |
| uptime     | show how long system has been running                                                                                                      |
| users      | list current users                                                                                                                         |
| who        | display who is logged in                                                                                                                   |
| uname      | prints operating system name                                                                                                               |
| hostname   | set or print name of current host system                                                                                                   |
| domainname | set or print name of current YP/NIS domain                                                                                                 |
| wc         | word count                                                                                                                                 |
| sort       | sort lines (-f treat upper/lowercase together, -r reverse, -u unique)                                                                      |
| uniq       | filter in/out repeated lines (-d returns lines repeated, -u unduplicated)                                                                  |
| date       | display or set date and time                                                                                                               |
| cal        | calendar                                                                                                                                   |
| bc         | calculator                                                                                                                                 |
| expr       | expression evaluator                                                                                                                       |
| units      | unit conversion                                                                                                                            |
| history    | show history                                                                                                                               |

### History
- !# references history command with a number in #
- !! references previous command
- !$ references previous command's arguments

## REDIRECTION
| CMD  | DESCRIPTION                                                                             |
|-     |-                                                                                        |
| ;    | add another command on the same line                                                    |
| <    | redirect input from a file into a command                                               |
| \>   | redirect output from a command to a file(ex. redirect to a file rather then the screen) |
| \>\> | append to a file                                                                        |
| \|   | pipe or takes the result of a command to another command                                |

## SHORTCUTS
| CMD                      | DESCRIPTION                                           |
|-                         |-                                                      |
| clear                    | clears screen (same as cmd + k)                       |
| up and down arrows       | Review previous commands                              |
| control + a              | Move cursor to start of line                          |
| control + e              | Move cursor to end of line                            |
| tab                      | Try to complete the cmd or filename                   |
| q or x, ctrl q or x, esc | Exit                                                  |
| ctrl + c                 | Force quits or cancels operation                      |
| ctrl + d                 | Logs out of the current session≈                      |
| ctrl + z                 | Cancels current operation, moves it to the background |

## UNIX FILE SYSTEM ORGANZIATION
| CMD   | DESCRIPTION                                                                    |
|-      |-                                                                               |
| /     | Root                                                                           |
| /bin  | Binaires, programs                                                             |
| /sbin | System binaires, programs                                                      |
| /dev  | Devices (hard drives, keyboard, mouse, etc.)                                   |
| /home | User home directories                                                          |
| /lib  | Libraries of code                                                              |
| /tmp  | Temporary files                                                                |
| /var  | Various, mostly files the system uses                                          |
| /usr  | User programs, tools and libraries which are not files (ex./usr/bin, /usr/etc) |

## INPUT AND OUTPUT
| CMD         | DESCRIPTION             |
|-            |-                        |
| /dev/stdin  | standard input          |
| /dev/stdout | standard output         |
| /dev/null   | used to suppress output |

## LOAD ORDER FOR BASH
| CMD             | DESCRIPTION                                                                    |
|-                |-                                                                               |
| /etc/profile    | Reads this profile first upon logging into a bash shell                        |
| ~/.bash_profile | Reads commands that are in this file upon logging into main bash shell         |
| ~/.bashrc       | Reads commands that are in this file upon opening a subshell                   |
| ~.bash_logout   | Reads commands that are in this file upon logging out                          |

### Add following to .bash_profile to make sure commands are always read from .bashrc
```
source allows .bashrc file to be executed so you don't have to open another window
if [ -f ~/.bashrc ]; then
  source ~/.bashrc
fi
```