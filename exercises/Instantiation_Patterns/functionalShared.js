// Functional-shared instantiation is similar to functional instantiation, but the methods are an extension of the function instead. Like before, we create an empty object inside our function and return that object. Before we return it though, we extend it with some function methods. For that, we'll need an extender function.

// Pros: In this instantiation pattern, the object methods are referenced in memory, so object instances refer to those references when being called. This allows for great memory management.

// Cons: If we choose to edit some of the funcMethods at some point and then create a new object instance, the old and new instances will refer to different references of the method in memory. This can get confusing for some, but is a minor caveat once you're aware of it.

// Set up
const Func = function() {
  const obj = {};
  obj.a = 1;
  obj.b = 2;
  extend(obj, funcMethods); //From es6 you can use Object.assign()
  return obj;
}

const extend = function(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
}

const funcMethods = {};

funcMethods.method1 = function() {
  return this.a + this.b;
}

funcMethods.method2 = function() {
  console.log(this.method1());
}

// Usage
const obj = Func();
obj.method2();