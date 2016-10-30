// Implement a pipe function
// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

'use strict';

function pipe(...funcs) {
  return (arg) => {
    return funcs.reduce((prev, curr) => {
      return curr(prev);
    }, arg);
  }
}

const greet = (name) => 'Hi ' + name;
const upper = (text) => text.toUpperCase();
var welcome = pipe(upper, greet);
console.log(welcome('phillip'));