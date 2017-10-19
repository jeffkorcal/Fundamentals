# Regex

## What Are Regular Expressions?

### Regular Expression
- Symbols representing a text pattern

### Regurlar Exressions
- Formal language interpreted by a regular expression processor
- Used for matching, searching, and replacing text
- They are NOT a programming language (no variables and/or addition)

### Matches
- A regular expression matches text if it correctly describes the text


## Notation Conventions and Modes

### Conventions
- /abc/
  - As in: g/re/p (Global/Regular Expression/Print)
- "abc"
  - the file or text your are testing needs to be within quotes

### Modes
- Standard: `/re/`
  - Earliest (leftmost) match is always preferred
- Global: `/re/g`
  - All matches are found throughout the text
- Case-insensitive: `/re/i`
- Multiline: `/re/m`
- Dot-matches-all: `/re/s`
  - Takes the restriction off matching on a line return
  - Make the dot match all characters including line break characters 
  - Not supported in JS
  - `/ab\ndef/` matches 'ab\ndef'

### Default Mode
- Standard & Case Sensitive

### Rule of Thumb
- Write all of your expressions as case sensitive
- White space and returns matter
- Regex will back track back to the letter after the match start
- Regular expression engines are eager
- Regular expression engines are greedy
- The challenge of regular expression is both matching what you want and __only__ what you want (you don't want false positives)


## Characters

### Literal Charaters
- /car/ with only match 'car' and/or the 'car' part of 'carnival'

### Meta Charaters
- Meta characters are characters with special meaning
  - Like mathematical operators
  - Transform literal characters into powerful expressions
- Here are the characters: `\ . * + - {} [] ^ $ | ? () : ! =`
  - Can have more than one meaning
  - Depends on how it is used in context

#### The Wildcard Metacharacter
- `.` Matches any one charcter except newline
- `/h.t/` matches 'hat', 'hot', and 'hit', but not 'heat'
- Broadest match possible
- Most common metacharacter
- Most common mistake `/9.00/` matches '9.00', '9500', and '9-00'

#### Escaping Metacharacters
- `\` Escape the next character
- Allows use of metacharacters as literal characters
- `/9\.00/` matches '9.00' but not '9500'
- Only for metacharacters
- Literal characters should never be escaped, gives them meaning
- Quotations marks are not metacharacters, do not need to be escaped
- `/h.._export\.txt/` matches `his_export.txt` and `her_export.txt`

#### Other Special Characters
- Space
- Tab `\t`
- Line Returns `\r, \n, \r\n` - JS uses `\n`


### Character Set
- `[` Begin a character set
- `]` End a character set
- Any one of several characters
  - But only one character
  - Order of characters does not matter
- Examples
  - `/[aeiou]/` matches any one vowel
  - `/gr[ea]y/` matches 'grey' or 'gray'
  - `/gr[ea]t/` does not match 'great'

### Character Ranges
- `-` Range of characters
- Represents all characters between two characters
- Only a metacharacter inside a character set, a literal dash otherwise
- Example
  -`[0-9]` `[A-Za-z]` `[a-ek-ou-y]`
- Caution: numbers are interpreted as strings

### Negative Character Set
- `^` Negate a character set
- Not any one of serval characters
- Add ^ as the first character inside a character set
- Still represents one character
- Example
  - `/[^aeiou]/` matches any one consonant (non-vowel)
  - `/see[^mn]/` matches 'seek' and 'sees' but not 'seem' or 'seen'
- Caution
  - `/see[^mn]/` matches 'see ' but not 'see'

### Metacharacters inside character set
- Metacharacters inside character sets are already escaped
- Do not need to escape them again
- `/h[abc.xyz]t` matches 'hat' and 'h.t', but not 'hot'
- Exceptions: `] - ^ \`
- Example
  - `/var[[(][0-9][\])]` var(3) var[4]

### Shorthand Character sets
- `\d` `[0-9]` Digit 
- `\w` `[a-zA-Z0-9_]` Word character (_ is but - is not a word character)
- `\s` `[ \t\r\n]` White space
- `\D` `[^0-9]` Not digit
- `\W` `[^a-zA-Z0-9_]` Word character
- `\S` `[^ \t\r\n]` White space
- Example
  - `/d\d\d\d/` matches '1984' but not 'text'
  - `/\w\w\w/` mathces 'ABC', '123', and '1_A'
  - `/\w\s\w\w/` matches 'I am', but not 'Am I'
  - `/[\w\-]/` mathces a word character or hyphen (useful)
  - `[^\d]` is the same as /\D/
- Caution
  - `/^\d\s/` is not the same as `[\D\S]`
  - `/^\d\s/` NOT digit OR space character
  - `[\D\S]` EITHER NOT digit OR NOT space character
- Rule of Thumb
  - Try to use the lowercase onces because they are more intuitive

### POSIX Bracket Expressions
- `/[[:alpha:]]/` Alphabetic characters `/[A-Za-z]/`
- `/[[:digit:]]/` Numeric characters `/[0-9]/`
- `/[[:alnum:]]/` Alphanumeric characters `/[A-Za-z0-9]/`
- `/[[:lower:]]/` Lowercase alphabetic characters `/[a-z]/`
- `/[[:upper:]]/` Uppercase alphabetic characters `/[A-Z]/`
- `/[[:punct:]]/` Punctuation characters
- `/[[:space:]]/` Space characters `/[\s]/`
- `/[[:blank:]]/` Blank characters (space, tab)
- `/[[:print:]]/` Printable characters, space
- `/[[:graph:]]/` Printable characters, no spaces
- `/[[:cntrl:]]/` Control characters (non-printable)
- `/[[:xdigit:]]/` Hexadecimal characters `/[A-Fa-f0-9]/`
- Use inside a character class, not standlone
  - Correct: `/[[:alpha]]/` or `/[^[:alpha:]]/`
  - Incorrect: `/[:alpha:]/`
- Good idea not to mix POSIX sets and other shorthand sets
- Support
  - Yes: Perl, PHP, Ruby, Unix
  - No: Java, JavaScript, .NET, Python

## Repetition Expressions

### Repetition Metacharacters
- `*` Preceding item zero or more times
- `+` Preceding item one or more times
- `?` Preceding item zero or one time
- Examples
  - `/apples*/` matches 'apple', 'apples', and 'applessss'
  - `/apples+/` matches 'apples' and 'applessss', but not 'apple'
  - `/apples?/` matches 'apple', 'apples', but not 'applessss'
  - `/\d\d\d\d*/` matches numbers with three digits or more
  - `/\d\d\d+/` same as above, matches numbers with three digits or more
  - `/[a-z]+\d[a-z]*/` matches 'abc1abc', 'a1abc', and 'a1', but not '1abc'
- Support
  - `*` is supported in all regex engines
  - `+` and `?` are not supported in BREs (old UNIX programs)

### Quantified Repetition
- `{` Start quantified repetition of preceding item
- `}` End quantified repetition or preceding item
- `/{min,max}/`
  - min and max are positive numbers
  - min must always be included, can be zero
  - max is optional
- Three syntaxes
  - `/\d{4,8}/` matches numbers with four to eight digits
  - `/\d{4}/` matches numbers with exactly four digits (min is max)
  - `/\d{4,}/` matches numbers with four or more digits (max is infinite)
- Examples
  - `/\d{0,}/` is the same as `/\d*/`
  - `/\d{1,}/` is the same as `/\d+/`
  - `/\d{3}-\d{3}-\d{4}/` matches most U.S. phone numbers
  - `/A{1,2} bonds/` matches 'A Bonds' and 'AA bonds', not 'AAA bonds'

### Greedy 
- Standard repetition quantifiers are greedy
- Expression tries to match the longest possible string
- Defer to achieving overall match
  - `/.+\.jpg/` matches 'filename.jpg'
  - The + greedy, but 'gives back' the '.jpg' to make the match
  - Think of it as rewinding or backtracking
- Gives back as little as possible 
  - `/.*[0-9]+/` matches 'Page 266'
  - `/.*/` matches 'Page 26' while `/[0-9]+/` matches '6'
- Example
  - `/\d+\w+\d+/` matches `01_FY_07_report_99`
  - `/".+", ".+"/` matches "Milton", "Waddams", "Initech, Inc."

### Lazy Expressions
- Greedy Strategy matches as much as possible before giving control to the next expression part
- Lazy Strategy matches as little as possible before giving control to the next expression part
- Still defers to overall match
- Not necessarily faster or slower
- `?` Make preceding quantifier lazy
- Syntax
  - `*?`
  - `+?`
  - `{min,max}?`
  - `??`
- Support
  - Unix does not support it
- Examples
  - `/\w*?\d{3}/`
  - `/[A-Za-z-]+?\./`
  - `/.{4,8}?_.{4,8}/`
  - `/apples??/` 
    - default is greedy so it is going to want to match one time so 'apples'
    - when lazy it is going to want to match zero times so 'apple' i.e. in this case it is meaningless to do
  -   - `/\d+\w+\d+/` matches `01_FY_07`
  - `/".+", ".+"/` matches "Milton", "Waddams"

### Efficiency When Using Repetitions
- Efficient matching + less backtracking = speedy results
- Define the quantity of repeated expressions
  - `/.+/` is faster than `/.*/`
  - `/.{5}/` and `/.{3,7}/` are even faster
- Narrow the scope of the repeated expression
  - `/.+/` can become `/[A-Za-z]+/`
- Provide clearer starting and ending points
  - `/<.+>/` can become `/<[^>]+>/`
- Use anchors and word boundaries
- Example
  - `/\w*s/` would be improved by `/\w+s/`
  - `/\w+s/` would be improved by `/[A-Za-z]+/`
  - Perhaps as `/[a-z]+s/` or as `/[A-Z][a-z]+s/`
  - Search for whole words only
    - Space, anchors, or word boundaries

## Grouping and Alternation Expressions

### Group Metacharacters
- `(` Start grouped expression
- `)` End grouped expression
- Group portions of the expression to:
  - Apply repetition operators to a group
  - Make expressions easier to read
  - Captures group for use in matching and replacing
  - Cannot be used inside character set
- Example
  - `/(abc)+/` matches 'abc' and 'abcabcabc'
  - `/(in)?dependent/` matches 'independent' and 'dependent'
  - `/run(s)?` is the same as `/runs?/`

### Alternation Metacharacters
- `|` Match previous or next expression
- `|` is an OR operator
  - Either match expression on the left or match expression on the right
  - Short circuits: leftmost expression gets precedence or if left is true it doesn't even go to the right
  - Multiple choices can be daisy-chained
  - Group alternation expressions to keep them distinct
- Example
  - `/apple|orange/` matches 'apple' and 'orange'
  - `/abc|def|ghi/` matches 'abc', 'def', and 'ghi'
  - `/apple(juice|sauce)/` is not the same as `/applejuice|sauce/`
  - `/w(ei|ie)rd/` matches 'weird' and 'wierd'

### Writing Logical And Efficient Alternations
- Regular expression engines are eager and greedy
- `/(peanut|peanutbutter)/` will match the 'peanut' in 'peanutbutter' b/c it is eager
- `/peanut(butter)?/` on the other hand will match 'peanutbutter' instead b/c it is greedy
- `/(\w+|FY\d{4}_report\.xls/` with match '`FY2003_reports`.`xls`' because it matches it's eager it matches the first expression even though the second matches better
- With the expression `/(xyz|abc)/` running on the string 'abcxyz' the parser is going to choose '`abc`xyz' becuase it runs through each letter and checks on the expression
- Put simplest (most efficient) expression first
  - `/\w+_\d{2,4}|\d{4}_\d{2}_\w+|export\d{2,4}/`
  - `/export\d{2,4}|\d{4}_\d{2}_\w+|\w+_\d{2,4}/`
  - i.e. a more specific expression will be checked quicker so it will be better to line up the expression the second way than the first way

### Repeating and nesting alternations
- Repeating
  - First matched alternation does not effect the next matches
  - `/(AA|BB|CC){4}/` matches 'AABBCC'
- Nesting
  - Check nesting carefully
  - Trade-off between precision, readability, and efficiency

## Anchored Expressions

### Start And End Anchors
- `^` Start of string/line
- `$` End of string/line
- `\A` Start of string, never end of line
- `\Z` End of string, never end of line
- Anchors are a reference to a position, not an actual character
  - zero width
- Examples
  - `/^apple/` or `/\Aapple/` is asking to find 'apple' at the beginning of a string
  - `/apple$/` or `/apple\Z/` is asking to find 'apple' at the end of a string
- Support
  - `^` and `$` are support in all regex engines
  - `\A and \Z` are supported in Java, .Net, Perl, PHP, Python, Ruby but not JS

### Line Breaks and Multiline Mode
- Remember that linebreaks are characters `\n` and `\r`
- Depending on if you want to check each line separartly or as one string you can change mode between s and m mode
- Single-line Mode
  - `^` and `$` do not match at line breaks
  - `\A` and `\Z` do not match at line breaks
  - Many Unix tools support only single line
- Multiline Mode
  - `^` and `$` will match at the start and end of lines
  - `\A` and `\Z` do not match at line breaks
  - Most languages offer multiline option
  - Example
    - `/^[a-z ]+/` will match both milk and apple juice in m mode becuase they are at the beginning of a line
      - milk
      - apple juice

### Word Boundaries
- `\b` Word boundary (start/end of word)
- `\B` Not a word boundary
- Reference a position, not an actual character
- It is the point where it switches from a word character to a non word character
- Conditions for matching
  - Before the first word character in the string
  - After the last word character in the string
  - Between a word charcter and a non-word character
- Word characters: [A-Za-z0-9_]
- Support
  - Most regex engines, not in early Unix tools (BREs)
- Examples  
  - `/\b\w+\b/` finds four matches in 'This is a test.'
  - `/\b\w+\b` matches all of 'abc_123' but only part of 'top-notch'
  - `/\b[\w']+\b` will match words with ' as well like 'Tony's'
  - `/\b[\w']+?\b` will match '`Tony`'`s`' separately b/c lazy expression will make it greedy
  - Caution
    - A space is not a word boundary
    - Word boundaries reference a position
      - Not an actual character
      - Zero-length
    - Example
      - String: 'apples and oranges'
      - No match: `/apples\band\boranges/`
      - Match: `/apples\b \band\b \boranges/`

## Capturing Groups and Backreferences

### Backreferences
- Grouped expressions are captured
  - Stores the matched portion in parentheses
    - /a(p{2}l)e/ matches 'apple' and stores 'ppl'
    - Stores the data matched, not the expression
  - Happens automatically, by default
- Backreferences allow access to captured data
  - Refer to first backreference with \1
- `\1` through `\9` Backreference for postions 1 to 9
- Usage
  - Can be used in the same expression as the group
  - Can be accessed after the match is complete (need a programming language to store in variable)
  - Can not be used inside character classes
- Support
  - Most regex engines support \1 through \9
  - Some reges engines use $1 through $9 instead
- Example
  - `/(apples) to \1/` matches 'apples to apples'
  - `/<(i|em)>.+?</\1>/` matches '<i>Hello</i>' and '<em>Hello</em>'
    - Does not match '<i>Hello</em>' or '<i>Hello</em>'


### Backrefernces to optional expressions
- Optional elements
  - `/A?B/` matches 'AB' and 'B'
- Captures occur on zero-width matches
  - `/(A?)B/` matches 'AB' and captures 'A'
  - `/(A?)B/` matches 'B' and captures ''
- Backreferences become zero-width too
  - `/(A?)B\1/` matches 'ABA' and 'B'
  - `/(A?)B\1C/` matches 'ABAC' and 'BC'
- Captures do not always occur on optional groups
  - `/(A)?B/` matches 'AB' and captures 'A'
  - `/(A)?B/` matches 'B' and does not capture anything
- Backreferences is to a group that failed to match
  - `/(A)?B\1/` matches 'ABA' but not 'B'
  - Except JavaScript
- Review
  - Element is optional, group/capture is not optional
    - `/(A?)B/` matches 'B' and captures ''
  - Element is not optional, group/capture is optional
    - `/(A)?B/` matches 'B' and does not capture anything

### Finding and replacing using backreferences
- Create a regular expression that matches target data
- Test regular expression and revise a needed
  - Use anchors and  specificity to narrow scope
- Add capturing groups
  - Capture anything that varies row-to-row
- Write the replacement string
  - Use all captures
  - Add back anything not captured but still needed
  - May need to use $1 instead or \1

### Non-capturing group expressions
- `?:` Specify a non-caturing group
- Syntax
  - `/(\w+)/` becomes `(?:\w+)`
- Turns off capture and backreferences
  - Optimize for speed
  - Preserve space for more captures
- Support
  - Most regex engines except Unix tools
- `/(?:regex)/`
  - `?` = Give this group a different meaning
  - `:` = The meaning is non-capturing

## Lookaround Assertions

### Positive lookahead assertions
- `?=` Positive lookahead assertion
- Assertion of what ought to be ahead
  - If lookahead expression fails, the match fails
  - Any valid regular expression can be used
  - Zero-width, does not include group in the match
- Support
  - Most regex engines except Unix
- Syntax
  - `/(?=regex)/`
- Example
  - `/(?=seashore)sea/` matches 'sea' in 'seashore' but not 'seaside'
  - Same as `/sea(?=shore)/`
  - `\b[A-Za-z']+\b(?=,)` Look for words followed by commas but don't include it


### Double-Testing With Lookahead Assertions
- Match a pattern that also matches another pattern
- Look ahead asertions allow us to run two or more different regex test on the same string
  - `/\d{3}-\d{3}-\d{4}/` matches '555-302-4321' and '555-781-6978'
  - `/^[0-5\-]+$/` matches '555-302-4321' and '23140-5'
  - `/(?=^[0-5\-]+$)\d{3}-\d{3}-\d{4}/` matches '555-302-4321'
  - `/(?=^[0-5\-]+$)(?=.*4321)\d{3}-\d{3}-\d{4}/` matches '555-302-4321'
  - `/^(?=.*\d)(?=.*[A-Z]).{8,15}$/` Password with 8-15 character with a number and a captial character

### Negative Lookahead Assertions
- Syntax
  - `/(?!regex)/`
- Example
  - `/(?!seashore)sea/` matches 'sea' in 'seaside' but not 'seashore'
  - Same as `/sea(?!shore)/`
  - `\b[A-Za-z']+\b(?!,)` Look for words not followed by commas


### Lookbehind assertions
- `?<=` Positive lookbehind assertion
- `?<!` Negative lookbehind assertion
- Assertions of what ought to be behind
  - Similar to lookahead assertions
  - If lookbehind expression fails, the match fails
  - Any valid regular expression can be used
  - Zero-width, does not include group in the match
- Syntax
  - `/(?<=regex)/` `/(?<!regex)/`
- Example
  - `/(?<=base)ball/` matches the 'ball' in 'baseball' but not 'football'
- Support
  - Simple expressions in .NET, Java, Perl, PHP, Python, Ruby 1.9
  - Not supported in JavaScript, Ruby 1.8, Unix
  - Simple expressions means fixed length
    - literal text
    - character classes
    - No repetition or optional expressions
    - Alternation only with fixed-length items 

### The Power of Position
- Allows testing of a regular expression apart from matching
  - Peek forwards or backwards
    - `/sea(?=shore)/`
  - Match a string using multiple expressions
    - `/(?=^[0-5\-]+$)\d{3}-\d{3}-\d{4}/`
  - Define rejection expression
    - `/online(?! training)/`
  - Find last occurance
    - `/(item)(?!.*\1)/`
- Zero-width means zero position movement
  - `/(?=seashore)sea/` matches 'sea' in 'seashore'
  - `/(?<![$\d])\d+\./\d\d` matches '54.00' but not '$54.00'
  - `/(?<![$\d])(?=\d+\./\d\d)` Does not match anything an pointer will be at the 5
- Useful for inserting text (using find and replace)
  - 'This cost 53.00 or $54.00.' using find and replace `/(?<![$\d])(?=\d+\./\d\d)` it will bring the cursor right before the 5 so you can add a $
  - `/(?<=\d>)(?=(\d\d\d)+(?!\d))/` will allow you to add commas to big numbers

## Unicode and Multibyte Characters

### About Unicode
- Single byte
  - Uses one byte (eight bits) to represent a character
  - Allows for 256 characters
  - A-Z, a-z, 0-9, punctuation, common symbols
- Double byte
  - Uses two bytes (16 bits) to represent a character
  - Allows for 65,536 characters
- Unicode
  - Variable byte size
  - Maintains compatibility with one- and two-byte encoding
  - Allows for over one million characters
  - Mapping between a character and a number
  - `U+` followed by a four-digit hexadecimal number
  - You can combine unicode characters

### Unicode in Regular Expressions
- Complications for regular expressions
  - Words can be spelled multiple ways
    - 'cafe', 'cafe´`
  - Words can be encoded multipe ways
    - 'cafe´' can be encoded as four or five characters
  - Wildcard matching
  - Backtracking
  - Unicode is relatively new
- Unicode indicator: \u
  - `\u` followed by a four-digit hexadecimal number (0000-FFFF)
  - `/caf\u00E9/` matches 'cafe´' but not 'cafe'
- Support
  - Java, JavaScript, .NET, Python, Ruby
  - Perl and PHP use \x instead
  - Not supported in old Unix tools

### Unicode wildcards and properties
- Unicode wildcard: \X
  - Matches any single character
  - Always matches line breaks (like `/./s`)
  - `/caf\X/` matches 'cafe´` and 'cafe'
- Support
  - Only support by Perl and PHP
- Unicode property: `\p{property}`
  - Mathces characters that have a property
  - `\p{Mark}` or `\p{M}/` mathces any 'mark' accents
  - Letter L
  - Mark M
  - Separator Z
  - Symbol S
  - Number N
  - Puncutuation P
  - Other C
- Support
  - Java, .NET, Perl, PHP, Ruby
  - Not JavaScript, Python, and Unix tools

  ## Useful Regular Expressions

  ### Regular Expressions
  - Not one-size-fits-all
  - Any regular expression can be written broadly or narrowly
    - Broad: permissive
    - Narrow: restrictive, brittle
  - Never use someone else's regular expression without checking it carefully and fine-tuning it for your specific purpose.
  - How to write or customize a regular expression
    - Examine the data to be matched
    - Determine what aspects of data are important
    - Determine what level of precision is required
    - Make a list of 'edge cases' to test
      - Longest, shortest
      - Highest, lowest
      - Most unusual, most oddly-formatted
    - Use anchors, delimiters, or context
      - `/\w+/`matches '%^@X&*!'
      - `/^\w+$/`
      - `/\b\w+\b/`
      - `/ \w+ /`
      - `/,\w+,/`
    - Be mindful of greediness and laziness

### Matching Names
- `/^([A-Z][A-Za-z.'-]+) ([A-Z][A-Za-z.'-]+)$/m`
  - George Washington
- `/^([A-Z][A-Za-z.'-]+) (?:([A-Z][A-Za-z.'-]+) )?([A-Z][A-Za-z.'-]+)$/m`
  - John Quincy Adams

### Matching Postal Codes
- US postal code format
  - Five Digits
  - Five Digits, dash, four digits
  `/^\d{5}(-\d{4})?$/`

### Matching Email Addresses
- `/^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,6}$/` 'someone@somewhere.com' and 'someone@somewhere.co.jp'

### Matching URLs
- `/^((http|https):\/\/)([\w.\-]+)\.[A-Za-z]{2,6}$/`
- 'http://www.nowhere.com'
- 'http://nowhere.com'
- 'http://blog.nowhere.com'
- 'https://www.nowhere.com'