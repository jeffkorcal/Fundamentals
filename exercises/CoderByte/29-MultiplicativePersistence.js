//Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 

function MultiplicativePersistence(num, multiPer) { 

  if (num < 10) { return 0 };
  
  multiPer = multiPer || 0;
  multiPer++;
  var product = 1;

  var multiArr = num.toString().split("");

  for (var i = 0; i < multiArr.length; i++){
    product *= parseInt(multiArr[i]);
  }

  if (product < 10){
    return multiPer;
  }
  
  return MultiplicativePersistence(product,multiPer);

}
console.log(MultiplicativePersistence(39));
// console.log(MultiplicativePersistence(21));
// console.log(MultiplicativePersistence(2));


function MultiplicativePersistence(num) { 

  var arr = num.toString().split('');
  
  // keep multiplying the numbers in num
  // if there is more than 1 number
  while (arr.length > 1) {
    
    var mult = 1;
    
    // multiply the numbers in num
    for (var i = 0; i < arr.length; i++) { 
      mult *= parseInt(arr[i]);  
    }
    
    // return 1 + the multiplicative persistence of this new number
    return 1 + MultiplicativePersistence(mult); 
    
  }
  
  // if there is only 1 number return 0
  return 0;
         
}
    
MultiplicativePersistence(39);  


function MultiplicativePersistence(num) {
  
    var multiPer = 0;
  
    function splitArray(intN) {
        intN = intN.toString().split("");
        var answerArr = [];
        for (i = 0; i < intN.length; i++) {
            answerArr.push(parseInt(intN[i]));
        }
        return answerArr;
    }
    function mult(array) {
        var product = 1;
        for (i = 0; i < array.length; i++) {
            product *= array[i];
        }
        return product;
    }

    while (num.toString().length > 1) {
        num = splitArray(num);
        num = mult(num);
        multiPer++;
    }
  
    return multiPer;
}


