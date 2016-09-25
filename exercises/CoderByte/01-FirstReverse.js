// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.


//1.create empty string
//2.loop through given string starting from the end
//3.build reversed string

//loop version
function FirstReverse(str) {
  var revStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
      revStr += str.charAt(i);
  }
  return revStr;
}
console.log(FirstReverse("Coder Byte"));


//recursive version
var reverse = function(str,revStr,decrement) {
  revStr = revStr || '';
  decrement = decrement || str.length;

  revStr += str.charAt(decrement-1);

  if (decrement === 1){
    return revStr;
  }

  return reverse(str,revStr,decrement-1);
};
console.log(reverse("Coder Byte"));


//function version
function reverse(str) {
  return str.split('').reverse().join('');
    }
console.log(reverse("CoderByte"));

//Methods Used
//charAt() - str.charAt(index) - returns the character at the specific index of a string
//split() - str.split([separator[, limit]]) - Splits a string into an array at the argument given
//reverse() - arr.reverse() - Reverses the order of an array
//join() - str = arr.join([separator = ',']) - Joins an array into a string by the argument given