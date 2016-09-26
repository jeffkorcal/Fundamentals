// Prototypal instantiation (which doesn't actually use the keyword prototype) is done by attaching methods directly to the object's prototype using the Object.create() method. It's fairly similar to the previous pattern, except this time, the returned object has prototypal methods that directly reference the funcMethods object. 

// Pros: This pattern attaches methods directly to the object's prototype, rather than as attachments to the returned objects like before.

// Cons: In my opinion, there is room for improvement on this pattern. Even though the pros are great, it's still a bit of a long-winded implementation.


const Func = function() {
  const obj = Object.create(funcMethods);
  obj.a = 1;
  obj.b = 2;
  return obj;
}

const funcMethods = {};

funcMethods.method1 = function() {
  return this.a + this.b;
}

funcMethods.method2 = function() {
  console.log(this.method1());
}

const obj = Func();
obj.method2();