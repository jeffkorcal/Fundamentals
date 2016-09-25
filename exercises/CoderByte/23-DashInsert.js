//Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

function DashInsert(str) { 

  numArr = str.split('');

  function isOdd(num) { return num % 2;};

  for (var i = 0; i < numArr.length; i++){
    if(isOdd(numArr[i]) && isOdd(numArr[i+1])){
      numArr.splice(i+1,0,'-');
    }
  }

  return numArr.join('');
         
}

console.log(DashInsert('134545679'));


function DashInsert(str) { 

  // convert the string into an array
  // with each element being a single number
  var arr = str.split('');
  
  // loop through the array of numbers and add a dash if 
  // the current number and the next number are odd
  // NOTE: to determine if a number is odd we  
  // divide by 2 and check if there is a remainder
  // e.g. 4 / 2 = 0 remainder
  // e.g. 5 / 2 = 1 remainder
  // e.g. 9 / 2 = 1 remainder
  for (var i = 0; i < str.length-1; i++) {
    if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
      arr[i] = arr[i] + '-';
    }
  }
  
  // join the numbers into a final string
  return arr.join('');
         
}


// Step By Step
function DashInsert(num) {

    // First, we convert the input number into a string 
    // This allows us to add the character to our answer rather than summing the two. 
    num = num.toString();
    // Next, we declare and initialize a variable to hold our answer string.
    var answer = "";

    // After that, we loop through each character in our input number...
    for (var i = 0; i < num.length; i++) {
        // ...and for every character after the first, we check if the current and previous character are odd.
        if ((i > 0) && (num[i] % 2 === 1) && (num[i - 1] % 2 === 1)) {
            // If both are, we add a dash to our answer.
            answer += "-";
        }
        // No matter whether or not we add a dash, we add the current number to our answer string.
        answer += num[i];
    }

    // Finally, we return our answer.
    return answer;
}