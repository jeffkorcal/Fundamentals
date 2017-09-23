# Scope

### Lexical Scope
  - Lexical scope means "compile-time scope"
  - In JavaScript the complier pulls out all the declarations first
  - Execution of code begins after everything in the scope has been compiled

### Strict Mode
  - __Makes debugging easier.__ Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
  - __Prevents accidental globals.__ Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. 
  - __Eliminates `this` coercion.__ Without strict mode, a reference to a `this` value of null or undefined is automatically coerced to the global.
  - __Disallows duplicate property names or parameter values.__ Strict mode throws an error when it detects a duplicate named property in an object (e.g., `var object = {foo: "bar", foo: "baz"};`) or a duplicate named argument for a function (e.g., `function foo(val1, val2, val1){}`).
  - __Throws error on invalid usage of `delete`.__ The `delete` operator (used to remove properties from objects) cannot be used on non-configurable properties of the object.

### Undeclared vs Undefined
  - __Undeclared__: a variable that has not been declared (var, let, or const)
  - __Undefined__: a variable that has been decalared but is empty or uninitialized

### Function Declaration
  -A function declaration occurs when the function keyword is the first word of the statement.
  - `function foo() {}`

### Function Expression
  - Functions assigned to a variable become function expressions. 
  - anonymous function expression: `var foo = function() {}`
  - named function expression: `var foo = function bar() {}`
    - bar can be self-referenced inside function
    - debugging minified code will show named function
    - self-documents code

### IIFE
  - The Immediately Invoked Function Expressions (IIFE) Pattern is a technique used to hide scope. It involves wrapping code inside a function that is immediately called. This allows developers to create object in their own scope without polluting the outer scope.

### let keyword
  - The `let` keyword will implicitly create a block-level scope and add declarations to that scope rather than the enclosing function. The most common use-case for the let keyword is for loops.

### Hoisting
  - Hoisting is the moving of declarations to the top of the scope block during the compiling phase. Hoisting applies to both variable declarations and functions. Functions declarations are hoisted first then the variable declarations.
  - Therefore, function declarations can be access anywhere in the code, but function expressions can only be access after it has been given a value.

### this keyword
  - Every function, __while it's executing__, has a reference to its current execution context called `this`. This reference is JavaScript's version of dynamic scope.
  - Four Rules for how the this keyword gets bound (in order of presedence)
    - 1) __Constructor rule__: when the `new` keyword is used in front of a function call a brand new object will be created gets bound to `this`
    - 2) __Explicit binding rule__: you can use `call` or `apply` to manually set the `this` binding
    - 3) __Implicit binding rule (left of the dot)__: in a method invocation `this` will be bound to the object that is to the right of the method
    - 4) __Default rule__: in a free function invocation `this` will be bound to global object, unless it is in strict mode which then it is bound undefined
    - __NOTE__: this keyword get bound at the call site or when the function is being invoked

### new keyword
  - Four things that occur when the new keyword is put in front of a function call
    - 1) Brand new empty object will be created
    - 2) Any methods on the prototype of that function will be linked
    - 3) The brand new object gets bound to the `this` keyword
    - 4) Implicitly return that brand new object 
    - __NOTE__: JavaScript does not have classes and the new keyword does not do any instantiation.

### Closure
  - Closures are when a __function remembers__ its lexical scope even when the __function__ is executed outside that lexical scope.
  - This can be done because in JavaScript functions are first class functions which means it can be passed around as variables

### Module Patterns
  - Module pattern utilizes IIFE and closure to create private variables and function
  - In es6 this is file based and the keyword `import` and `export` is used