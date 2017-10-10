# ES2015

## Features included
- let,const
- String Templates
- Default Parameters
- Named Parameters
- Rest Parameters
- Spread Operator
- Arrow Functions
- Adding a function to an object without the function keyword
- Object Initializer Shorthand
- Object Deconstructing 
- Object.assign()
- Array Initializer Shorthand
- Array Deconstructing 
- Array.find()
- Class (constructor)
- SubClass (extend, super)
- Modules
- Promises 
- for…of Loop
- Generators

## Let
- Variables declared with let are scoped to the nearest block. (A block is any code section within curly braces, like if, else, for, while, etc.).
- Variables declared with let can be reassigned, but cannot be redeclared within the same scope. 
```
let example = 1;
```

## Const
- The const keyword creates read-only name constants.
- Once assigned, constants CANNOT be assigned a new value.
- Variables declared with const must be assigned an initial value.
- Variables declared with const are scoped to the nearest block.
```
const EXAMPLE = 1;
```

## Template Strings
- Template strings are string literals allowing embedded expressions. This allows for a much better way to do string interpolation. You can use back-ticks, NOT single-quotes and the code is wrapped inside dollar sign and curly braces.
```
const fullName = first + ' ' + last;
const fullName = `${first} ${last}`;
```

## Arrow Functions for Anonymous Functions
- Anonymous functions passed as callbacks to other functions create their own scope.
- Arrow functions have a lexical binding or bind to the scope of where they are defined, not where they are used. 
```
function TagComponent(target, urlPath){
  this.targetElement = target;
  this.urlPath = urlPath;
}
TagComponent.prototype.render = function( ){
  getRequest(this.urlPath, function( data ) {
    
    // with the function keyword this.targetElement will return undefined
    displayTags(this.targetElement, data.tags);

  });
}
TagComponent.prototype.render = function( ){
  getRequest(this.urlPath, (data) => {

    // with the arrow function this.targetElement will return the correct target
    displayTags(this.targetElement, data.tags);

  });
}

const tagComponent = new TagComponent(targetDiv, “/topics/17/tags”);
tagComponent.render(); 
```

## Adding a function to an object without the function keyword
- In previous versions of JavaScript, adding a function to an object required specifying the property name and then the full function definition (including the function keyword).
- A new shorthand notation is available for adding a method to an object where the keyword function is no longer necessary. 
```
function buildUser(first, last, postCount){
  let fullName = first + “ “ + last;
  const ACTIVE_POST_COUNT = 10;

  return {
    first,
    last,
    fullname,
        //instead of isActive: function ( ) {...}
    isActive( ){ return postCount >= ACTIVE_POST_COUNT; }
  }
}
```

## Default Parameters
- Default parameter values help move default values from the function body to the function signature.
```
//Uses empty array as default value when no argument is passed 
function loadProfile(usernames = []) {...}
```

## Named Parameters in the place of an Option Object 
- The option object is a widely used pattern that allows user-defined settings to be passed to a function in the form of properties on an object. 
- Using named parameters for optional settings makes it easier to understand how a function should be invoked. In addition, the order doesn't matter.
```
function setPageThread(name, {popular, expires, activeClass}) {

  const nameElement = buildNameElement(name);
  const settings = parseSettings(popular, expires, activeClass);
}

setPageThread(“New Version Out Soon!” , { expires: 10000, activeClass: “is-page-thread”, popular: true }); 
```

## Rest Parameters for Function Definition
- The arguments object is a built-in, Array-like object that corresponds to the arguments of a function. Relying on this object to read arguments is not ideal because it is hard to tell which parameters a function expects.
- The new rest parameter syntax allows us to represent an indefinite number of arguments as a true Array. This way, changes to function signature are less likely to break code.
- Rest parameters must always be the last parameter in a function.
```
function displayTags(targetElement, …tags){
  tags.forEach(tag => addToTopic(targetElement, tag);
}
```

## Spread Operator for Function Invocation and Concatenation
- The spread operator allows us to split an Array argument into individual elements.
- Rest parameter and the spread operator look the same, but the former is used in function definitions and the later in the function invocation. 
- In addition, the spread operator is great for concatenating arrays.
```
//Example 1
getRequest(url, data => displayTags(targetElement, …data.tags));

//Example 2: Easier way to concat
const defaultColors = ['red', 'green'];
const optionalColors = ['blue', 'pink'];
const finalColors = ['yellow', ...defaultColors, ...optionalColors];
```

## Object Initializer Shorthand (right side of assignment)
- We can remove duplicate variable names from object properties when those properties have the same name as the variables being assigned to them.
- The object initializer shorthand works anywhere a new object is returned, not just from functions.
```
const name = “Sam”;
const friends = [“Brook”, “Tyler”];

const user = { name, friends }; 
Object Destructuring (left side of assignment)
```
- We can use shorthand to assign properties from objects to local variables with the same name.
- Not all properties have to be restructured all the time. We can explicitly select the ones we want.
```
const { name, friends } = user;
```

## Object.assign for merging optional and default parameters
- The Object.assign method copies properties from one or more source objects to a target object specified as the very first argument. In case of duplicate properties on source objects, the value from the last object on the chain always prevails. Preserving the original default values gives us the ability to compare them with the options passed and act accordingly when necessary.
```
function countdownTimer(taget, timeLeft, options = {}){

  const defaults = {
    container: ‘.timer-display’;
    timeUnit: ‘seconds’;
    cloneDataAtrtribute: ‘cloned’;
    timeoutSoonTime: 10
  }

  const settings = Object.assign( {}, defaults, options ); //defaults and options are not mutated
  const settings = {...defaults, ...options}; //with ES7 you can use the spread operator with objects
}
```

## Array Destructuring
- We typically access array elements by their index, but doing so for more than just a couple of elements can quickly turn into a repetitive task. We can use destructing to assign multiple values from an array to local variables. We can combine destructuring with rest parameters to group values into other arrays.
```
//Example 1
const users = [“Sam”, “Tyler”, “Brook”];
const [a, b, c] = users;
const [a, ...rest] = users; //rest = ["Tyler", "Brook"] 
const [a,  , c] = users; // Values can be discarded


//Example 2
let a = 4;
let b = 8;
[a, b] = [b, a] //you can swap values around as well


//Example 3
const points = [ [4,5], [8,9] ];
points.map(([x, y]) => {x, y}); // [{x: 4, y: 5}, {x: 8, y: 9}]
```

## Array.find
- Array.find returns the first element in the array that satisfies a provided testing function. 
```
const users = [
  {login: "Sam", admin:false},
  {login: "Brook", admin:true},
  {login: "Tyler", admin:true},
];

const admin = users.find( users => user.admin );
console.log(admin); //{"login":"Brook","admin":true} 
```

## Classes
- A common approach to encapsulation in JavaScript is using a constructor function. To define a class, we use the class keyword followed by the name of the class. The body of a class is the part between curly braces. The constructor method is a special method for creating and initializing an object. Instance variables set on the constructor method can be accessed from all other instance methods in the class.
- The class syntax is not introducing a new object model to JavaScript. It’s just syntactical sugar over the existing prototype-based inheritance. We can use class inheritance to reduce code repetition. Child classes inherit and specialize behavior defined in parent classes.
- The extends keyword is used to create a class that inherits methods and properties form another class. The super methods runs the constructor function from the parent class. Child classes can invoke methods from their parent classes via the super object.
```
// Class Syntax
class Widget {
  // Runs everytime a new instance is created with the new operator
  constructor(title){
        // Assigning to instance variables makes them accessible by other instance methods
    this.title = title;
    this.baseCSS = 'site-widget';
  }
  // Instance method definitions in classes look just like the method initializer shorthand in objects
  parse(value){...}

}

// Subclassing
class SponsorWidget extends Widget {

  constructor(title, name, description,url){
        //super is need to run as the first line to invoke the parent classes constructor
    super(title); 
    //...
  }

  parse(){
    // you can use super to invoke the parent version of the parse() method
    let parsedName = super.parse(this.name);
    return `Sponsor: ${parsedName}`;
  }

  render(){
    let parsedName = this.parse(this.name);
    //...
  }

}
```

## Modules
- The common solution for modularizing code relies on using global variables. This increases the chances of unexpected side effects and potential naming conflicts.
- To import modules we use the import keyword, specify a new local variable to hold its content, and use the from keyword to tell the JavaScript engine where the module can be found. The default type export limits the number of functions we can export from a module. In order to export multiple functions from a single module, we can use the named export. Functions from named exports must be assigned to variables with the same name enclosed in curly braces.
```
//flash-message.js
function alertMessage(message){
  alert(message);
}

function logMessage(message){
  console.log(message);
}

export { alertMessage, logMessage };


//app.js
import { alertMessage, logMessage } from './flash-message';
import * as flash from './flash-message';
```

## Promises
- It’s very important to understand how to work with JavaScript’s single-thread model. Otherwise, we might accidentally freeze the entire app, to the detriment of user experience. Once the browser blocks executing a script, it stops running the scripts, rendering elements, and responding to user events like keyboard and mouse interactions. In order to avoid blocking the main thread of execution, we write non-blocking code or an asynchronous style functions and pass callbacks. In continuation-passing style (CPS) async programming, we tell a function how to continue execution by passing callbacks. It can grow to complicated nested code.
- A promise is a new abstraction that allows us to write async code in an easier way. The Promise constructor function takes an anonymous function with 2 callback arguments known as handlers. Creating a new Promise automatically sets it to the pending state. Then, it can do 1 of 2 things: become fulfilled or rejected.
- A promise represents a future value, such as the eventual result of an asynchronous operation. We can use the then() method to read results from the Promise once it’s resolved. This method takes a function that will only be invoked once the Promise is resolved. We’ll call the reject() handler for unsuccessful status codes and also when the on error event is triggered on our request object. Both move the Promise to a rejected state. Once an error occurs, execution moves immediately to the catch() function. None of the remaining then() functions are invoked. We can make our code more succinct by passing functions arguments to then, instead of using anonymous functions.
```
const request = new Promise(function(resolve, reject) {

   // Do an async task async task and then...
   if(/* good condition */) {
      resolve('Success!');     
   }
   else {
      reject('Failure!');
   }
});

request
  .then(function() {
     /* do something with the result */
  }).catch(function() {
     /* error :( */
  });
```

## for…of to Loop Over Arrays
- The for…of statement iterates over property value, and it’s a better way to loop over arrays and other iterable objects. Like a forEach where you can access just the item. This is useful to iterate over dom nodes.
```
for(let name of names) {
  console.log( name );
}
```

## Generators
- A generator is a function that can be entered and exited multiple times.
- for...of loop is used to iterate over a generator. You can use the symbol.iterator to teach a for...of loop how to iterate over any data structure.
- *Computed property names allows you to put an expression in brackets [], that will be computed as the property name (This is how symbol.iterator is used)
```
//asterisk after the function creates a generator
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}


const gen = colors();
gen.next(); //{"value":"red", "done": false}
gen.next(); //{"value":"blue", "done": false}
gen.next(); //{"value":"green", "done": false}
gen.next(); //{"done": true}


const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
console.log(myColors) //["red","blue","green"];
//Object Iteration
const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
  }
};


const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names); //['Jill', 'Alex', 'Dave'];

//Tree Iteration
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}


const children = [
  new Comment('First child comment', []),
  new Comment('Second child comment', [])
];
const comment = new Comment('Root comment', children);


const comments = [];
for (let content of comment) {
  comments.push(content);
}
console.log(comments) // ['Root Comment', 'First child comment', 'Second child comment']
```