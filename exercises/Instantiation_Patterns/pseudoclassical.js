// The last pattern is the pseudoclassical pattern, which takes a bit of the long-windedness out of the prototypal pattern. It does, as before, attach methods directly to the object's prototype. Another point of interest is the fact that the object's constructor is automatically included. This means that we can create new instances using the new keyword. The reason for this is that some behind the scenes work goes down in this pattern. Before and after all code in the object's body, this = Object.create(Object.prototype); and return this; get run in the background.

// Pros: Methods are attached directly to the prototype, instances are created with the new keyword, and the this keyword has a distinct scope. Rumour has it that it's the fastest instantiation pattern too, though that would be irrelevant unless you are creating upward of tens of thousands of objects at once.

// Cons: Newcomers to JavaScript might find this pattern a bit difficult to understand, especially if their grasp on the this keyword is not up to scratch. It also can pose some problems when the meaning of the this keyword changes, for example calling an object method from an event listener of some sort.

const Func = function() {
  this.a = 1;
  this.b = 2;
}

Func.prototype.method1 = function() {
  return this.a + this.b;
}

Func.prototype.method2 = function() {
  console.log(this.method1());
}

const obj = new Func();
obj.method2();



// Using ES6 Classes: This is just syntactic sugar on top of the pseudoclassical pattern

class Func2 {
  constructor(){
    this.a = 1;
    this.b = 2;
  }

  method1() {
    return this.a + this.b;
  }

  method2() {
    console.log(this.method1());
  }
}

const obj2 = new Func2();
obj2.method2();