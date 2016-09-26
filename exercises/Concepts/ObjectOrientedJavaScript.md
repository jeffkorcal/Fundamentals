# Object Oriented

### Object-Orienting
  - In JavaScript, every object is built by a constructor function. 
  - This does not mean classes are being instantiated. 
  - When an constructor function is called, a new object is created with a link to the object's prototype.

### Prototype
  - Prototype linkages allow delegation to other objects to hand method calls or property references. This allows additional objects to be created from a prototype with duplication of function code.
  - Prototypes in JavaScript can be linked and share a parent-child relationship similar to a subclass and superclass. This is beneficial when extending a prototype to add additional methods. However, there are issues with constructor references.
  - Object.create() - creates a brand new empty object and links any methods on prototype of the constructor
  - __proto__ (dunder-proto) - references the underlining prototype
  - getPrototypeOf - does the same thing as dunder-proto

### new keyword
  - Four things that occur when the new keyword is put in front of a function call
    - 1) Brand new empty object will be created
    - 2) Any methods on the prototype of that function will be linked
    - 3) The brand new object gets bound to the `this` keyword
    - 4) Implicitly return that brand new object 
    - __NOTE__: JavaScript does not have classes and the new keyword does not do any instantiation.

### Questions
  - What is a constructor?
    - A constructor is a function with the new keyword in front of it
  - What is a [[Prototype]] and where does it come from?
    - [[Prototype]] is a linkage from one object to another object
    - It comes from Object.create() or from using the new keyword
  - How does a [[Prototype]] affect an object?
    - Call a property or method on an object reference and if it can't handle property or method reference it delegates it reference to another object
  - How do we find out where an object's [[Prototype]] points to (3 ways)?
    - __proto__
    - getPrototypeOf
    - .constructor.prototype

### Inheritance
  - In classical inheritance, properties and methods of a class are copied to object instantiated of that class. Subclasses inherit the properties and methods of a parent class and copy them to their instantiated objects.
  - In JavaScript it make more sense to say  "behavior delegation" rather than "prototypal inheritance".

OLOO: Object Linked to Other Objects
  - Objects that just delegate to each other 
  ``` 
  var Foo = {
    init: function(who) {
      this.me = who;
    },
    identify: function() {
      return 'I am ' + this.me;
    }
  };

  var Bar = Object.create(Foo);
  Bar.speak = function() {
    alert('Hello, ' + this.identify());
  };

  var b1 = Object.create(Bar);
  b1.init('b1');
  b1.speak(); //alerts: 'Hello, I am b1'
  ```