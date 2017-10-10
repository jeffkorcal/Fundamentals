## Grep
`-n` shows line number in file
`-A` After
`-B` Before
`-C` Context
`-E` if for extended
`-r` recursive
`-v` does not match or takes the inverse of the operation

## Regex
`.` any one character
`*` 0 or more occurences of the character before it
`?` 0 or 1 occurrence of the character before it
`+` 1 or more occurrence of the character before it
`|` or operator
`^` anchor character that only checks the beginning of a line
`$` anchor character that only checks the end of a line
`[]` matches any single character in brackets
`()` group queries

## Examples
grep --color "\(.*\)" readme.md > greps any thing within parenthesis in readme.md
grep --color -E "http?" readme.md > greps for htt or http in readme.md
grep --color -E "http+" readme.md > greps for http or httpp in readme.md
grep --color -rE "grey|gray" examples/ > greps for grey or gray in files in the examples folder
grep "^#" readme.md > greps for anything that starts with # in readme.md
grep "[ab]" readme.md > greps for either a and b in readme.md
grep "[a-z]" readme.md > greps for any character between a and z in readme.md
grep -rE "(grey|gray)(\'|\")" examples/ > greps for gray or grey with single or double quotes after it files in the examples folder
find example -name "*js" | grep -vE "spec" > find all js files in example that does not include spec