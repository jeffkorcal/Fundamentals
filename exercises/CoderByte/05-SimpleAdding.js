// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
  if (num>1000){return null}
  var results = num;
  for (var i = num-1; i > 0; i--){
  results += i;
  }
  return results;
}
console.log(SimpleAdding(4));


function SimpleAdding(num) { 
  return (num*(num+1))/2;
}


// Recursive Version
function SimpleAdding(num, sum) {

  sum = sum | 0;

  if (num === 0) {
      return sum;
  }

  sum += num;
  num--;

  return SimpleAdding(num, sum);
}