//Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". 

function DivisionStringified(num1,num2) { 

  var result = Math.round(num1/num2).toString(); 
  var resultArr = result.split('');

  if(resultArr.length > 3) {
    for(var i = resultArr.length - 3; i > 0; i -= 3){
      resultArr.splice(i,0,",");
    }
  }
  return resultArr.join("");

}
console.log(DivisionStringified(123213438932,2));

// Step By Step
function DivisionStringified(num1, num2) {

    // First, we use the Math.round method to calculate our product...
    // ...and then use the .toString method to convert the reusltant number into a string.
    var result = Math.round(num1 / num2).toString();

    // Next, we use the .split method to convert our result variable into an array so it can be further manipulated.
    // Note that we pass in an empty string ("") into the .split method to split the result variable at every character.
    var resultArr = result.split("");

    // Next, we check if our result is greater than 1000.
    if (result >= 1000) {

        // If it is, we loop through each item in our result array...
        // ...starting at the third character from the end (i = result.length - 3)...
        // ...moving back three charactres each time (i -= 3)...
        // ...and stopping when we get to the start of the string (i > 0)
        for (var i = result.length - 3; i > 0; i -= 3) {

            // At every third character we use the .splice method to insert a comma.
            // Note that the first arguement of the .splice is where the method inserts things into the array (i), 
            // ...the second controls how many array items are removed (0), 
            // ...and the third controls what is inserted (",").
            resultArr.splice(i, 0, ",");
        }
    }

    // Finally, we return our result array with the .join method to covert it into a string.
    return resultArr.join("");
}


function DivisionStringified(num1, num2) { 

  // first we divide and then round accordingly
  var div = Math.round(num1/num2);
  
  // convert answer to string and then
  // to an array separating each number
  div = div.toString().split('');
  
  // keep counter for inserting comma logic
  var insert = 0;
  
  // logic for inserting a comma every 3
  // elements in the array starting from the end
  // e.g. ['4', '5', '3', '2'] becomes ['4', ',5', '3', '2']
  // and then we would join all the numbers into a string
  if (div.length > 3) {
    for (var i = div.length-1; i >= 0; i--) {
      insert++;
      if (insert === 3) { 
        div[i] = ',' + div[i];
        insert = 0;
      }
    }
  }
  
  // return the elements joined into a proper string
  return div.join('');
         
}
