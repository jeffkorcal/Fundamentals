// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

//1.create new variable = 1
//2.loop from 1 to num
  //2.1 ex. num = 5 = 5! = 5 * 4 * 3 * 2 * 1
//3.store i into result

function FirstFactorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++){
    result *= i;
  }
  return result;
}
console.log(FirstFactorial(8));


// Recursive Version
var factorial = function(n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return null;
  } else {
    return n * factorial(n-1);
  }
}
console.log(factorial(8));
