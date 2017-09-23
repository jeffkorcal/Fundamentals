## Overview
- Regular expressions are symbols representing a text pattern
- Regular expressions are eager to return a match 
- Regular expressions are greedy and tries to match the longest possible string before moving to the next expression

## Modes
  - `/re/` Standard - Earliest (leftmost) match is matched
  - `/re/g` Global - All matches are found throughout the text
  - `/re/i` Case-Insensitive - ignores case
  - `/re/m` Multiline -  ^ and $ match the beginning and end of each line

## Meta Characters `\ . * + - {} [] ^ $ | ? () : ! =`
- `.` Wildcard - matches any one character except `\n`
- `\` Escape - escapes the next metacharcter to mean a literal character

## Special Characters
- ` ` Space
- `\t` Tab
- `\n` Return


## Character Set
- `[]` Character set - any ONE of several characters
- `[0-9A-Za-z]` Character range - represent all charcters between `-`
- `[^]` Negative Character set - not ANY one of serveral characters

## Shorthand Character Sets
- `\d` `[0-9]` Digit
- `\w` `[a-zA-Z0-9_]` Word character (_ is but - is not a word character)
- `\s` `[ \t\r\n]` White space


## Repetition Expressions
- `*` Matches preceding item zero or more times
- `+` Matches preceding item one or more times
- `?` Matches preceding item zero or one time
- `{min,max}` Qunatified repetition
  - `{n}` Matches exactly n occurrences of the preceding expression
  - `{n,}` Matches at least n occurrences of the preceding expression
  - `{n,m}` Matches at least n and at most m occurrences of the preceding expression


## Greedy
- Greedy Strategy matches as much as possible before giving control to the next expression part
- Greed Strategy is default to regex using above repetition characters

## Lazy
- Lazy Strategy matches as little as possible before giving control to the next expression part
- `?` Make preceding quantifier lazy
  - `*?` | `+?` | `{min,max}?` | `??`

## Group Meta Characters
- `()` Group metacharacter apply repetition operations, make expressions easier to read, and capture groups for ues in matching and replacing

## Alternation Meta Characters
- `|` OR operator that matches previous or next expression

## Anchors
- Anchors are a reference to a position (zero-width), not an actual character
- `^` Start of string/line
- `$` End of string/line
- Line breaks will only be considered if you place the regex in multiline mode

## Word Boundaries
- `\b` Word boundary (start/end of word [A-Za-z0-9_])
- Reference a position (zero-width), not an actual character

## Back References
- Backreferences allow access to captured data between `()`
  - Can be used in the same expression as the group with `\1` through `\9`
  - Can be accessed after the match is complete (need a programming language to store in variable) with `$1` through `$9`
- Optional elements
  - Element is optional, group/capture is not optional
    - `/(A?)B/` matches 'B' and captures ''
  - Element is not optional, group/capture is optional
    - `/(A)?B/` matches 'B' and does not capture anything

## Non-capturing group expressions
- `/(?:regex)/` Specify a non-caturing group

## Positive Lookahead Assertions
- `/(?=regex)/` Assertion of what ought to be ahead
  - `x(?=y)` Matches 'x' only if 'x' is followed by 'y'
  - `/(?=seashore)sea/` matches 'sea' in 'seashore' but not 'seaside'
  - Same as `/sea(?=shore)/`

## Negative Lookahead Assertions
- `/(?!regex)/` Assertion of what not to be ahead
  - `x(?!y)` Matches 'x' only if 'x' is not followed by 'y'
  - `/(?!seashore)sea/` matches 'sea' in 'seaside' but not 'seashore'
  - Same as `/sea(?!shore)/`


## Regular Expressions with JavaScript
- Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the `exec` and `test` methods of `RegExp`, and with the `match`, `replace`, `search`, and `split` methods of String.
  - `exec` A RegExp method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
  - `test` A RegExp method that tests for a match in a string. It returns true or false.
  - `search` A String method that tests for a match in a string. It returns the index of the match, or -1 if the search fails.
  - `match` A String method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
  - `replace`	A String method that executes a search for a match in a string, and replaces the matched substring with a replacement substring.
  - `split` A String method that uses a regular expression or a fixed string to break a string into an array of substrings.


### Summary
- `/abc/` A sequence of characters
- `/[abc]/`	Any character from a set of characters
- `/[^abc]/`	Any character not in a set of characters
- `/[0-9]/`	Any character in a range of characters
- `/x+/`	One or more occurrences of the pattern x
- `/x+?/`	One or more occurrences, nongreedy
- `/x*/`	Zero or more occurrences
- `/x?/`	Zero or one occurrence
- `/x{2,4}/`	Between two and four occurrences
- `/(abc)/`	A group
- `/a|b|c/`	Any one of several patterns
- `/\d/`	Any digit character
- `/\w/`	An alphanumeric character (“word character”)
- `/\s/`	Any whitespace character
- `/./`	Any character except newlines
- `/\b/`	A word boundary
- `/^/`	Start of input
- `/$/`	End of input


### Tools
- https://www.regexpal.com/
- https://regexr.com/
- https://www.debuggex.com/