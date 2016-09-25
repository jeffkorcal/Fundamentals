//Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 


function AdditivePersistence(num, addPer) { 

  if (num < 10) { return 0 };
  
  addPer = addPer || 0;
  addPer++;
  var sum = 0;

  var addArr = num.toString().split("");

  for (var i = 0; i < addArr.length; i++){
    sum += parseInt(addArr[i]);
  }

  if (sum < 10){
    return addPer;
  }
  
  return AdditivePersistence(sum,addPer);

}
console.log(AdditivePersistence(212234));



function AdditivePersistence(num) { 

  var arr = num.toString().split('');
  
  // keep adding up the numbers in num
  // if there is more than 1 number
  while (arr.length > 1) {
    
    var added = 0;
    
    // add up the numbers up in num
    for (var i = 0; i < arr.length; i++) { 
      added += parseInt(arr[i]);  
    }
    
    // return 1 + the additive persistence of this new number
    return 1 + AdditivePersistence(added); 
    
  }
  
  // if there is only 1 number return 0
  return 0;
         
}
AdditivePersistence(2718); 



function AdditivePersistence(num) {

    var addPer = 0;

    function splitArray(intN) {
        intN = intN.toString().split("");
        var answerArr = [];
        for (var i = 0; i < intN.length; i++) {
            answerArr.push(parseInt(intN[i]));
        }
        return answerArr;
    }

    function add(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    while (num.toString().length > 1) {
        num = splitArray(num);
        num = add(num);
        addPer++;
    }

    return addPer;
}