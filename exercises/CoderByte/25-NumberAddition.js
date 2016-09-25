//Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 

function NumberAddition(str) { 

  // use the JavaScript match function which
  // tries to find all matching patterns in the string
  // and it returns an array of all matches found
  // e.g. "75Number9" returns [75, 9]
  var nums = str.match(/[0-9]+/gi); 
  
  // use the JavaScript reduce functions which calls a
  // function on each value in the array and returns
  // a final single value
  return nums.reduce(function(previousVal, currentVal) {
    return parseInt(previousVal) + parseInt(currentVal);
  });
         
}

function NumberAddition(str) {
    str = str.split(/[a-zA-Z]/);
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] != "") {
            sum += parseInt(str[i]);
        }
    }
    
    return sum;
}
console.log(NumberAddition("75Number9"));