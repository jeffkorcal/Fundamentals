// Functional instantiation is at the root of object instantiation in JavaScript. We create a function, and inside it, we can create an empty object, some scoped variables, some instance variables, and some instance methods. At the end of it all, we can return that instance, so that every time the function is called, we have access to those methods.

// Pros: This pattern is the easiest to follow, as everything exists inside the function. It's instantly obvious that those methods and variables belong to that function.

// Cons: This pattern creates a new set of functions in memory for each instance of the function Func. If you're creating a big app, it's ultimately just not suitable in terms of memory.


const Func = function() {
  const obj = {};
  let a = 1;
  let b = 2;

  obj.method1 = function() {
    return a + b;
  }

  obj.method2 = function() {
    console.log(this.method1());
  }

  return obj;
}

const obj = Func();
obj.method2();