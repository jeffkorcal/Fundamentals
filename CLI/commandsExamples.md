# Terminal Command Examples

System Profiler: Get Mac Serial Number
system_profiler | grep "Serial Number (system)"

OS Version: Get Macs OS
sw_vers -productVersion

Disk Utility: Delete Logical Volume Group (Clear FileVault)
diskutil cs delete $(diskutil cs list | grep “Logical Volume Group” | awk ‘{print $5}’)

Disk Utility: Partition
diskutil partitionDisk disk2 1 GPT JHFS+ nameOfDisk R

Disk Utility: Erasing Volume
diskutil eraseDisk {filesystem} {Name to use} /dev/{disk identifier}
diskutil eraseVolume JHFS+ newVolume /Volumes/originalVolume

Disk Utility: Reformatting Volume (Erases but keeps name the same)
diskutil reformat /Volumes/originalVolume

Add character to the beginning of each line using sed (change the # sign)
$ sed -e 's/^/#/' file.txt

Change all characters to lowercase > Replace space between name with period > Delete period after name from previous cmd > Add @venablesbell.com to end
tr '[:upper:]' '[:lower:]' < input.txt > output1.txt
sed 's/ /./g' < output1.txt > output2.txt
sed 's/.$//' < output2.txt > output3.txt
sed 's/$/@venablesbell.com/' output3.txt > result.txt

Find: Find a folder or file from the current directory down
find . -iname *nameOfFolderOrFile*

Trash
$ sudo rm -rf ~/.Trash/*