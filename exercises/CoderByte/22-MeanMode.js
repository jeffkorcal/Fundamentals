//Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

function MeanMode(arr) { 
  var mean=0;
  var mode=0;

  //mean: average
  mean = arr.reduce(function(prevNum,currentNum){ return prevNum + currentNum }) / arr.length;  
  
  //mode: number that is repeated the most
  var searchMode = {};
  arr.forEach(function(item){
    searchMode[item] === undefined ? searchMode[item] = 1 : searchMode[item] += 1;
  });

  var highest = 0;
  for(var num in searchMode){
    if (searchMode[num] > highest){
      highest = searchMode[num];
      mode = parseInt(num);
    }  
  }

  //compare mean and mode
  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }
}
console.log(MeanMode([1,2,2,3]));


function MeanMode(arr) { 

  // we use the reduce function which will sum
  // up all the numbers in the array 
  var summed = arr.reduce(function(previousVal, currentVal, index, self) {
    return previousVal + currentVal;
  });
 
  // calculate the mean by dividing the sum by the
  // number of elements in arr
  var mean = summed / arr.length;

  // the table that will contain each number as the key
  // and the number of times it occurs as the value
  // e.g. {"5": 1, "3": 3, "1": 1}
  var table = {};

  // loop through each number in the array
  // see if this number already exists in table
  // if so add 1 to the count, if not set count = 1
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? table[number] = 1 : table[number] += 1;
  }

  // setup a new object that will store the number with the highest count
  var answer = {number: null, count: 0};
  
  // get the mode by determining what number appears most often in the table 
  for (var n in table) {
    if (table[n] > answer["count"]) {
      answer["count"] = table[n];
      answer["number"] = n;
    }
  }

  // return 1 or 0 if the mode equals the mean
  return (answer["number"] == mean) ? 1 : 0;
         
}


// Step By Step
function MeanMode(arr) {
    
    // First, we declare an empty array to hold the number of times each item in the input array occurs,
    var modeMap = [];
    // a variable to hold the actual mode,
    var mode = 0;
    // a variable to hold the number of times the mode occurs,
    var modeCount = 0;
    // and a variable to hold the sum of the items in the array (to calculate the mean),
    var sum = 0;
    
    // Next, we loop through each item in the input array and... 
    for (var i = 0; i < arr.length; i++) {
        
        // ...add each value to our sum variable
        sum += arr[i];
        
        // ...check if each value is present in our frequency count array
        if (modeMap[arr[i]]) {
            // If it is, we increase its value by 1.
            modeMap[arr[i]]++;
        } else {
            // If it isn't, we set its value to 1.
            modeMap[arr[i]] = 1;
        }
        
        // ...and check if the count for the item's position in our mode array is greater than our current mode's count.
        if (modeMap[arr[i]] > modeCount) {
            // If it is, we set the mode to the current item in our input array...
            mode = arr[i];
            // ...and set the number of times the mode has occured to the current item's value in our mode array.
            modeCount = modeMap[arr[i]];
        }
    }
    
    // Next, we calculate the mean by dividing the sum by the total number of items in the array.
    var mean = sum / arr.length;
    
    // If the mean and the mode are the same, we return 1, otherwise we return 0.
    if (mean === mode) {
        return 1;
    } else {
        return 0;
    }

}