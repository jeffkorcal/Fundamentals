# Python

## Overview
- Python is an interpreted language
- Easy to read 
- Indentation matters


## Quick Start

### Variables
- Variables are declared without a var or let
- You can assign multiple variables on the same line separated by commas
```
a, b = 0, 1
```

### Conditionals
```
a, b = 0, 1

if a < b:
    print ('a is less than b')
else:
    print ('a is not less than b')

if a < b:
    print('a is less than b')
elif a > b:
    print('b is less than a')
else:
    print('a is equal to b')

# Simple conditionals can be written as a conditional expression on one line (this is the equivalent to a ternary operator in JS)
print ('a is less than b' if a < b else 'a is not less than b')  
```

### Loops
- Only two kind of loops while and for loops
- For loops is used to step through iterators
    - All container type are iterators
- Loops can use `continue`, `break`, and `else`
```
a, b = 0, 1

while a < b:
    print(a)
    a+=1
```
```
list = [1,2,3,4,5]

# this will print out each value in list
for value in list:
    print(value)

# enumerate() will allow you to have access to the index of the iterator object
for index, value in enumerate(list):
    print(index, list[index], value)

# `continue` allows you to continue the loop
# `break` allows you to break out of the loop
# both are usually used with conditionals
s = 'string'
for c in s:
    if c == 't': continue
    if c == 'g': break
    print(c) # srin

# `else` can be used after the loop condition fails
i = 0
s = 'string'
while i < len(s):
    print(s[i]) # string
    i+=1
else:
    print(' done') # string done
```

### Functions
- Functions are defined with the def keyword
- You can return more than one variable by separating them with a comma by creating a tuple
```
def isEven(n):
    return n, n % 2 == 0

for i in range(1,10):
    print(isEven(i))
```

### Generator Functions
- Generator functions creates an iterator object that is sutable to be used in a for loop
```
# This is a utility function
def isEven(n):
    return n % 2 == 0

# This is the generator function where if the number is even it will yield with n so it can be printed in the for loop below. If its odd the while loop will continue
def evens(n = 1):
    while(True):
        if isEven(n): yield n
        n += 1

for n in evens():
    if n > 10: break
    print(n)

```

### Simple OOP
- Class is the definition used to create an object
- This object is an instance of the class
```
class Fibonacci():
    # __init__ function is a constructor that only runs once when the instance is created
    # 'self' is a reference to the instantiated object so you can encapsulate variables within that object
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def series(self):
        while(True):  
            yield(self.b)
            self.a, self.b = self.b, self.a + self.b

f = Fibonacci(0, 1)
for r in f.series():
    if r > 100: break    
    print(r)
```

### Inheritance and Polymorphism
```
# -- VIEW --
class AnimalActions:
    def talk(self): return self._doAction('talk')
    def bark(self): return self._doAction('bark')
    def fur(self): return self._doAction('fur')

    def _doAction(self, action):
        if action in self.strings:
            return self.strings[action]
        else:
            return 'The {} has no {}'.format(self.animalName(), action)

    def animalName(self):
        return self.__class__.__name__.lower()

# -- MODEL --
# A class can inherit another class by defining it in the parameter
class Person(AnimalActions):
    strings = dict(
        talk = 'The person says woof!'
    )

class Dog(AnimalActions):
    strings = dict(
        bark = 'Arf!',
        fur = 'The dog has white fur with black spots.',
    )

# -- CONTROLLER -- 
def in_the_doghouse(animal):
    print('talk: ' + animal.talk())
    print('bark: ' + animal.bark())
    print('fur: ' + animal.fur())
 
def main():
    john = Person()
    fido = Dog()

    print('In the doghouse:')
    for a in ( john, fido ):
        in_the_doghouse(a)
 
if __name__ == '__main__': main()
```

### Error and Exception Handling
- In python if there is a error it will terminate the program
- You can wrap code that will can potentially have error in a try and expect to continue executing the code
```
try:
    fh = open('xlines.txt')
    for line in fh.readlines():
        print(line)
except IOError as e:
    print ('something bad happened ({})'.format(e))

print('the program will keep running even if an error occured')
```


## General Syntax and Convention

### Main
- the main function is like the entry function
- it allows you to call functions defined below it
- i.e. it allows you to hoist the functions calling main
```
def main():
    print("This is the main function")
    functionDefinedAfterMain()

def functionDefinedAfterMain():
    print('This is defined after main')

if __name__ == "__main__": main()
```

### White Space
- 4 spaces are traditional
- white spaces are not significant in one liners

### Comments
```
# single line comment
''' block comment ''' 
```

### Assigning values
- assignments in python are created by using the `=` sign
- everything in python is an object so the type of something will be a class
```
# type() allows you to see the type of the variable
num = 1
print(type(num), num) # (<class 'int'>, 1)

# You can swap variables easily
a, b = 0, 1
a, b = b, a
print(a, b) # (1, 0)

# Tuples
a = (1,2,3,4,5)
print(a) # (1,2,3,4,5)

# Lists
a = [1,2,3,4,5]
print(a)
```


## Variables, Objects, and Values

### Variables and Objects
- Everything in Python is an object
    - Variables, functions, even code
- Every object has an ID, Type and Value
    - ID uniquely identifies a particular instance of an object
        - Cannot change for the life of the object
    - Type identifies the class of an object
        - Cannot change for the life of the object
    - Value is the contents of the object
        - Mutable objects (lists, dictonaries, etc.) can change value, immutable objects (numbers, strings, tuples) cannot

### Numbers
- Int and Float types
- `//` will trim floating numbers to be integer
- `round([expression], [decimal point you want to round to])` will round the expression
- `%` will give you the remainder
- `int([floating point number])` will give you only the whole number
- `float([int number])` will give you the floating point representation of the int
- Both int() and float() are constructors

### Strings
- string are immutable objects that are created with either single quotes or double quotes
- `r'string'` will make the string raw so escape characters will not work
- `'string {}'.format(n)` format will replace the {} with the value of n
- `'''\ string '''` template literal to create block of strings
- `x[1]` you can access a character in a string by using its index
- `x[2:4]` you can slice a subset of characters using the `:`

### Tuples and Lists
- `(1,2,3)` tuples are immutable objects
- `[1,2,3]` lists are mutable objects
    - `append()`
    - `insert()`
- strings, tuples, and lists are all iterators
```
x = (1,2,3)
for i in x:
    print(i)
```

### Dictionaries (Associative Lists or Hash)
- `{'one': 1, 'two': 2}` a string key needs to be in quotes when using the object literal
- `dict(one: 1, two: 2)` you don't need to do that when using the dictionary constructor
- dictionaries are saved in no particular order and are mutable objects
```
d = {'one': 1, 'two': 2, 'three': 3}
# sorted will sort the dictionary keys in alphabetical order
for k in sorted(d.keys()):
    print((k, d[k]))

# get method will allow you select a value by specifying the key. it will return none by default but you can specify what you want to return if the key is not found.
print(d.get('one')) # returns 1
print(d.get('four')) # returns none
print(d.get('four', 'key does not exist')) # returns 'key does not exist'
```

### Type and Identity of a variable
- Again everything in python is an object
- and an object has an identity
- identity of an object is an unique id
- the ids of an immutable value like an integer is always going to be the same
```
# if the value is imutable both x and y have a reference to the same id of 1
x = 1
id(x) # 111
y = 1
id(y) # 111

# this test if the values are the same
x == y # true

# this test if they are the same object by checking if the ids are equal to each other
x is y # true

# dictionaries are mutable so their ids will differ even if the values are the same
x = dict( one: 1)
y = dict( one: 1)

x == y # true b/c values are the same
x is y # false b/c ids are different
```

### Logical Values with True and False
- `True` and `False` are class of boolean
- the are imutable objects
- the first letter does need to be capitalized

### None
- `None` is like null and you can test it with `if variable is None` by id


## Operators

### Simple Arithmetic
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `//` Floor Division ex. 5 // 3 would be 1
- `%` Modulo/Remainder
- `divmod()` return floor division and modulo as a tuple
    - ex. divmod(5, 3) would be (1, 2)

### Comparison Operators
- Comparing Values
    - `<` less than
    - `>` greater than
    - `<=` less than or equal to 
    - `>=` greater than or equal to
    - `==` equal to
        - NOTE: will do a deep equal on objects
    - `!=` not equal to
- Comparing Identity
    - `is` compares equality of ids
        - NOTE: this compares the reference. For immuntables is going to be the same as equally but for mutables (dictionaries, lists) it will be different. 
    - `is not` compares inequality of ids
- Boolean Operators
    - `and` 'and' operator is just 'and' spelled out
    - `or` 'or' operator is just 'or' spelled out
    
### Container with Slice Operator
- `list[0:5]` adding a colon and a number will slice or grab the list from index 0 to 4
    - NOTE: slice and range are none inclusive
    - NOTE: you can use assignment with slice which will mutate your list
- `list[4:24:4]` the third number in this case will grab every 4th number starting at 4 but not including 24
- `list[:] = range(100)` shorthand for a list of 0 to 99

### Operator precedence
- multiplication and division takes higher precedence over addition and substration
- You can use paranthesis to explicity state the order of operations

## Regular Expressions

### Searching
- You can use the re module to use regular expression
- `re.search([regular expression], [target])` search for regular expression
```
import re

# prints every line that has good in it
file = open('text.txt')
for line in file:
    if re.search('(good)', line):
        print(line, end='')

# prints all the matches of good
for line in file:
    match = re.search('good', line)
    if match:
        print(match.group())
```

### Replacing
- `re.sub([regex], [replacement pattern], [target])` searches and replaces
```
import re

# prints whole file with good replaced as ####
file = open('text.txt')
for line in file:
    print(re.sub('good', '####', line, end='')) 

# prints only the lines that matches and replaces good with ####
# this is searching first and then using the string replace method with the match to replace the text
for line in file:
    match = re.search('good', line)
    if match:
        print(line.replace(match.group(), '####'), end='')
```

### re.compile
- `re.compile` will allow you to pre-compile a pattern
- this is more efficient then compiling it everytime in a loop
```
import re

# prints only the lines that match the pattern
file = open('text.txt')
pattern = re.compile('good')
for line in file:
    if re.search(pattern, line):
        print(line, end='')

# prints only the lines that matches and replaces good with #### without using string replacement
for line in file:
    if re.search(pattern, line):
        print(pattern.sub('####', line), end='')
```


## Exceptions

### Using Exceptions
- Uncaught expections are the key method of handling errors in Python
- You can handle these exceptions by using try-except
```
# this will print out an unhandle exception with the string error before it
# execution will stop on the line with the error so you it wouldn't be a problem adding the line in the else in the try
try:
    file=open('file.txt')
except IOError as e:
    print('error:', e)
else:
    for line in file: print(line.strip())
```

### Raising Exceptions
- `raise` will allow you to throw you own expection
- most exceptions will be listed here http://docs.python.org/library/exceptions.html
```
def readFile(filename):
    if filename.endswith('.txt')
        file = open(filename)
        return file.readlines()
    else: raise ValueError('Filename must end with .txt')

try:
    for line in readFile('text.txt'): print(line.strip())
except IOError as e:
    print('cannot read file', e)
except ValueError as e:
    print('bad filename', e)
```


## Functions

### Defining Functions
- functions are primary unit of reusable code
- you will get an error if you keep the function body empty
- `pass` will allow you to get around keeping function empty
```
def test():
    pass
```
- Python will throw an error if all parameters are not included when invoking a function unless you set default parameters

### Using List of Arguments
- `def func(*args)` the asterisk will allow you to get an arbitrary number of arguments in a tuple
- this will iterate in order
```
def func(arg1, arg2, *args):
    print (arg1, arg2)
    for n in args: print(n, end= ' ')

# prints 1 2 3 4 5
func(1, 2, 3, 4, 5)
``` 

### Named Paramenters
- Python allows you name arguments when invoked
- regular arguments, arbitrary arguments, and name parameters can all be used together but it has to be in the above order
```
# convention to call kwargs (key word arguments)
# kwargs come in as a dictionary so when you printed the order may vary
def func(**kwargs):
    for k in kwargs: print(k, kwargs[k]) 

# prints two 2 one 1
func(one = 1, two = 2) 
```

### Return Statement
- `return` keyword will allow you to return a value from a function
- you can return an iterator object
```
def func():
    return 1

print(func()) # 1
```
```
def func():
    return range(4)

for n in func(): print(n, end=' ') # 0 1 2 3 4
```

### Generator Function
- a generator is a function that returns an iterator object
- `yield` is the keyword makes a function a generator
```
def inclusiveRange(*args):
    numargs = len(args)
    if numargs < 1: raise TypeError('requires at least one argument')
    elif numargs == 1:
        start = 0
        stop = args[0]
        step = 1
    elif numargs == 2:
        (start, stop) = args
        step = 1
    elif numargs == 3:
        (start, stop, step) = args
    else: raise TypeError('inclusiveRange expected at most 3 arguments, got {}'.format(numargs))

    i = start
    while i <= stop:
        yield i
        i += step

for i in inclusiveRange(5):
    print(i, end=' ') # 0 1 2 3 4 5
```


## Classes

### Class Object
- Classes are how you create your onw objects
- A class is the blueprint for an object
- An object is an instance of a class
- `self` is a reference to the instance and allows for encapsulation
```
# self is implicitly passed 
class Duck:
    def quack(self):
        print('Quaaack')

donald = Duck()
donald.quack() # 'Quaaack'
```

### Methods
- function under a class are called methods
- `__init__` is a constructor function that only gets called once when an object is instantiated
```
class Duck:
    def __init__(self, value):
        self._value = value

    def quack(self):
        print('Quaaack', self._value)

donald = Duck(47)
donald.quack() # 'Quaaack'
``` 

### Object Data
- always good to give your variables a default values unless they are absolutly required
```
# underscore before the variable name is a convention for stating that it is a local variable
class Duck:
    def __init__(self, **kwargs):
        self._color = kwargs.get('color', 'white')

    def getColor(self, color):
        return self._color

    def setColor(self, color):
        self._color = color

    def quack(self):
        print('Quaaack', self._value)

donald = Duck(color = 'blue')
daisy = Duck()

donald.getColor() # blue
daisy.getColor() # white
```
```
# For scaling
class Duck:
    def __init__(self, **kwargs):
        self.variables = kwargs

    def getVariable(self, key):
        return self.variables.get(key, None)

    def setVariable(self, key, value):
        self.variables[key] = value

    def quack(self):
        print('Quaaack', self._value)

donald = Duck(color = 'blue')
donald.getVariable('color') # blue
```

### Inheritance
- In OOP inheritance is when a class inherits the property of another class
- when inherting methods the subclass method will take precedence over the parent class
```
class Animal:
    def talk(): print('I have something to say')
    def walk(): print('I am walking')
    def eat(): print('nom nom nom')

class Duck(Animal):
    def walk(): print('walk like a duck')
    def eat():
        super().eat() # you can call the parents function method from the sub class

donald = Duck()
donald.talk() # I have something to say
donald.walk() # walk like a duck
```

### Polymorphism
- Polymorphism is the practice of using one object of one particular class as if it were another object of another class
- And Python is particularly good at this because the objects in Python don't actually care what the name of the class is because python is a loosely typed language.
- Any instance of any class that implements the interface that's expected by any function can be used by that function.
```
# This example shows that both instances of Duck and Dog can be used as an argument in walkingInThePark
class Duck:
    def walk(self): 
        print('Duck walking')

class Dog:
    def walk(self): 
        print('Dog walking')

def walkingInThePark(animal):
    animal.walk()

donald = Duck()
fido = Dog()
walkInThePark(donald) # Duck walking 
walkInThePark(fido) # Dog walking
```

### Generators Object
- A generator object is an object that can be used in the context of an iterable, like for instance in a for loop.
```
class inclusiveRange:
    # __init__ is a constructor
    def __init__(self, *args):
        numargs = len(args)
        if numargs < 1: raise TypeError('requires at least one argument')
        elif numargs == 1:
            self.start = 0
            self.stop = args[0]
            self.step = 1
        elif numargs == 2:
            (self.start, self.stop) = args
            step = 1
        elif numargs == 3:
            (self.start, self.stop, self.step) = args
            else: raise TypeError('expected at most 3 arguments, got {}'.format(numargs))

    # __iter__ makes the object and iterable
    def __iter__(self):
        i = self.start
        while i <= self.stop:
            yield i
            i += self.step

for i in inclusiveRange(5, 25, 5): print(i, end=' ') # 5 10 15 20 25
```

### Decorators
- Decorators are specials functions that return other functions and they are used to modify the way that a function works.
```
class Duck:
    def __init__(self, **kwargs):
        self.properties = kwargs

    def get_properties(self):
        return self.properties

    def get_property(self, key):
        return self.properties.get(key, None)

    @property
    def color(self):
        return self.properties.get('color', None)
    
    @color.setter
    def color(self, c):
        self.properties['color'] = c

    @color.deleter
    def color(self):
        del self.properties['color']

def main():
    donald = Duck()
    donald.color = 'blue'
    print(donald.color)

if __name__ == "__main__": main()
```


## String Methods

### String Objects & Methods
- In python strings are also objects
- Strings are immutable so when you call a method on a string it will return a new string object
```
s = 'This is a string'
s2 = '   This is a string\n'
s3 = '1234'
exampleUpper = s.upper() # 'THIS IS A STRING'
exampleLower = s.lower() # 'this is a string'
exampleSwap = s.swapcase() # 'tHIS IS A STRING'
exampleFind = s.find('is') # 2 - in 'this'
exampleReplace = s.replace('This', 'That') # 'That is a string'
exampleStrip = s2.strip() # 'This is a string'
exampleRstrip = s2.rstrip() # '   This is a string'
exampleAlphaNumeric = s.isalnum() # True
exampleAlpha = s.isalpha() # True
exampleDigit = s3.isdigit() # True
examplePrintable = s.isprintable() # True
```

### str.format
```
# 'this is 1, that is 2'
exampleFormat = 'this is {}, that is {}'.format(1,2)

# 'this is 2, that is 1, this again is 2'
exampleFormatTwo = 'this is {1}, that is {0}, this again is {1}'.format(1,2) 

# 'this is bob and that is fred'
c = dict( a = 'bob', b = 'fred')
exampleFormatThree = 'this is {a} and that is {b}'.format(**c)

```

### Spliting and Joining Strings
```
s = 'This is a string'
words = s.split() # ['This', 'is', 'a', 'string']
newS = words.join(', ') # 'This, is, a, string'
```


## Containers

### Tuples & Lists
- Tuple
    - the comma is what creates a tuple
    - tuples are immutable so cannot be changed
- List
    - the square brackets is what creates a list
    - lists are mutable so you can change them
```
t = (0, 1, 2, 3, 4)
t[1] # 1
t[-1] # 4 (-1 gets you the end of the tuple)
len(t) # 5
min(t) # 0
max(t) # 4
1 in t # True
9 in t # False
9 not in t # True
t.count(2) # 1 (returns how many 2's there are)
t.index(2) # 1 (returns the index of the first occurance of 2)

l = [0, 1, 2, 3, 4]
l[0] = 1 # [1, 1, 2, 3, 4]
l.append(5) # [1, 1, 2, 3, 4, 5]
l.extend(range(3)) # [1, 1, 2, 3, 4, 5, 0, 1, 2] (using an iterable you can append more than one value)
l.insert(1, 9) # [1, 9, 2, 3, 4, 5, 0, 1, 2] (insert can insert anywhere)
l.remove(9) # [1, 2, 3, 4, 5, 0, 1, 2] (removes the actual value you pass in)
del l[-1] # [1, 2, 3, 4, 5, 0, 1] (removes using the index)
l.pop() # return 1 leaving [1, 2, 3, 4, 5, 0]
l.pop(1) # return 1 leaving [1, 3, 4, 5, 0]
```

### Dictionaries
```
d = {'one': 1, 'two': 2, 'three': 3}
d2 = dict(four = 5, five = 5, six = 6)
d3 = dict(**d, **d2) # {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6}

for key in d: print(key) # one two three
for key, value in d.items(): print(key, value) # one 1 two 2 three 3

d['three'] # 3
d['four'] # will throw an expection so it is better to use the get method

d.get('three') # 3
d.get('four') # None
d.get('four', 'not found') # 'not found'

del d['three'] # will delete three from the dictionary
d.pop() # will return the value and delete it from the dictionary
```


## File I/O

### Opening Files
- `open([filepath], [mode])` allows you to open text files
    - [mode]: 'r' (read/default), 'w' (write), 'a' (append)
```
# read and write to text file
infile = open('infile.txt', 'r')
outfile = open('outfile.txt', 'w')
for line in infile.readlines():
    print(line, file = outfile, end='')
```

### Buffer (text files)
```
buffersize = 50000
infile = open('infile.txt', 'r')
outfile = open('outfile.txt', 'w')
buffer = infile.read(buffersize)

# buffers are not iterables so you need to use a while loop
while len(buffer):
    outfile.write(buffer)
    buffer = infile.read(buffersize)
```

### Reading Binary (jpeg, gif, etc.)
- `rb` and `wb` will allow read and write in binary for things other than text file
- of course you can us it for text files as well
```
buffersize = 50000
infile = open('infile.txt', 'rb')
outfile = open('outfile.txt', 'wb')
buffer = infile.read(buffersize)

# buffers are not iterables so you need to use a while loop
while len(buffer):
    outfile.write(buffer)
    buffer = infile.read(buffersize)
```


## Modules
- classes are exported but the main function is not


## Unit Tests
- use the unittest module to unit test your code


## Databases
```
import sqlite3

__version__ = '1.0.3'

class bwDB:
    def __init__(self, **kwargs):
        '''
            db = bwDB( [ table = ''] [, filename = ''] )
            constructor method
                table is for CRUD methods 
                filename is for connecting to the database file
        '''
        # see filename setter below
        self.filename = kwargs.get('filename')
        self.table = kwargs.get('table', '')

    def sql_do(self, sql, params = ()):
        '''
            db.sql_do( sql[, params] )
            method for non-select queries
                sql is string containing SQL
                params is list containing parameters
            returns nothing
        '''
        self._db.execute(sql, params)
        self._db.commit()

    def sql_query(self, sql, params = ()):
        '''
            db.sql_query( sql[, params] )
            generator method for queries
                sql is string containing SQL
                params is list containing parameters
            returns a generator with one row per iteration
            each row is a Row factory
        '''
        c = self._db.cursor()
        c.execute(sql, params)
        for r in c:
            yield r

    def sql_query_row(self, sql, params = ()):
        '''
            db.sql_query_row( sql[, params] )
            query for a single row
                sql is string containing SQL
                params is list containing parameters
            returns a single row as a Row factory
        '''
        c = self._db.cursor()
        c.execute(sql, params)
        return c.fetchone()

    def sql_query_value(self, sql, params = ()):
        '''
            db.sql_query_row( sql[, params] )
            query for a single value
                sql is string containing SQL
                params is list containing parameters
            returns a single value
        '''
        c = self._db.cursor()
        c.execute(sql, params)
        return c.fetchone()[0]

    def getrec(self, id):
        ''' 
            db.getrec(id)
            get a single row, by id
        '''
        query = 'SELECT * FROM {} WHERE id = ?'.format(self.table)
        c = self._db.execute(query, (id,))
        return c.fetchone()

    def getrecs(self):
        ''' 
            db.getrecs(id)
            get all rows, returns a generator of Row factories
        '''
        query = 'SELECT * FROM {}'.format(self.table)
        c = self._db.execute(query)
        for r in c:
            yield r

    def insert(self, rec):
        '''
            db.insert(rec)
            insert a single record into the table
                rec is a dict with key/value pairs corresponding to table schema
            omit id column to let SQLite generate it
        '''
        klist = sorted(rec.keys())
        values = [ rec[v] for v in klist ]  # a list of values ordered by key
        q = 'INSERT INTO {} ({}) VALUES ({})'.format(
            self.table,
            ', '.join(klist),
            ', '.join('?' for i in range(len(values)))
        )
        c = self._db.execute(q, values)
        self._db.commit()
        return c.lastrowid

    def update(self, id, rec):
        '''
            db.update(id, rec)
            update a row in the table
                id is the value of the id column for the row to be updated
                rec is a dict with key/value pairs corresponding to table schema
        '''
        klist = sorted(rec.keys())
        values = [ rec[v] for v in klist ]  # a list of values ordered by key

        for i, k in enumerate(klist):       # don't udpate id
            if k == 'id':
                del klist[i]
                del values[i]

        q = 'UPDATE {} SET {} WHERE id = ?'.format(
            self.table,
            ',  '.join(map(lambda str: '{} = ?'.format(str), klist))
        )
        self._db.execute(q, values + [ id ])
        self._db.commit()

    def delete(self, id):
        '''
            db.delete(id)
            delete a row from the table, by id
        '''
        query = 'DELETE FROM {} WHERE id = ?'.format(self.table)
        self._db.execute(query, [id])
        self._db.commit()

    def countrecs(self):
        '''
            db.countrecs()
            count the records in the table
            returns a single integer value
        '''
        query = 'SELECT COUNT(*) FROM {}'.format(self.table)
        c = self._db.cursor()
        c.execute(query)
        return c.fetchone()[0]

    ### filename property
    @property
    def filename(self):
        return self._dbFilename

    @filename.setter
    def filename(self, fn):
            self._dbFilename = fn
            self._db = sqlite3.connect(fn)
            self._db.row_factory = sqlite3.Row

    @filename.deleter
    def filename(self):
        self.close()

    def close(self):
            self._db.close()
            del self._dbFilename

def test():
    import os
    fn = ':memory:'     # in-memory database
    t = 'foo'

    recs = [
        dict( string = 'one' ),
        dict( string = 'two' ),
        dict( string = 'three' )
    ]

    ### for file-based database
    # try: os.stat(fn)
    # except: pass
    # else: 
    #     print('Delete', fn)
    #     os.unlink(fn)

    print('version', __version__)

    print('Create database file {} ...'.format(fn), end = '')
    db = bwDB( filename = fn, table = t )
    print('Done.')

    print('Create table ... ', end='')
    db.sql_do(' DROP TABLE IF EXISTS {} '.format(t))
    db.sql_do(' CREATE TABLE {} ( id INTEGER PRIMARY KEY, string TEXT ) '.format(t))
    print('Done.')

    print('Insert into table ... ', end = '')
    for r in recs: db.insert(r)
    print('Done.')

    print('Read from table')
    for r in db.getrecs(): print(dict(r))

    print('Update table')
    db.update(2, dict(string = 'TWO'))
    print( dict( db.getrec(2) ) )

    print('Insert an extra row ... ', end = '')
    newid = db.insert( dict( string = 'extra' ) )
    print('(id is {})'.format(newid))
    print( dict( db.getrec(newid) ) )
    print('Now delete it')    
    db.delete(newid)
    for r in db.getrecs(): print(dict(r))
    db.close()

if __name__ == "__main__": test()
```

