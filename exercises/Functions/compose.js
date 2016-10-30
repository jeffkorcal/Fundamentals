// Implement a compose function
// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

'use strict';

function compose(...funcs) {
  return (arg) => {
    return funcs.reduceRight((prev, curr) => {
      return curr(prev);
    }, arg);
  }
}

const greet = (name) => 'Hi ' + name;
const upper = (text) => text.toUpperCase();
var welcome = compose(greet, upper);
console.log(welcome('phillip'));