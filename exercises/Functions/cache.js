// Write a function that caches result of the same arguments to a function

const fnCache = (fn) => {
  cache = {};

  return (...args) => {
    if (cache[args]) {
      return cache[args];
    } else {
      cache[args] = fn(...args);
      return cache[args];
    }
  }
};

const add2 = fnCache(arr => arr.map(val => val+2));
console.log(add2([1,2,3]));
console.log(add2([4,5,6]));
console.log(add2([1,2,3]));

