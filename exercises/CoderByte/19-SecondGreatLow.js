//Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

function SecondGreatLow(arr) { 

  // first we create a unique array by using the filter function
  // we check to see if the index of the current element in the array 
  // is equal to the first index of the element, if so then add the
  // element to the new array
  var unique = arr.filter(function(elem, index, self) {
    // console.log(self.indexOf(elem)); //checks to see if an index with that particular element exists
    // console.log(index); // will return false i.e. filter out the duplicate when indexes don't match
    return self.indexOf(elem) === index;
  });

  // sort the unique array in ascending order
  var sorted = unique.sort(function(a, b) {
    return a - b;
  });

  // return the second smallest and largest elements
  // but also check to make sure there is more than 1
  // element in the array
  if (sorted.length < 2) { 
    return sorted[0] + " " + sorted[0]; 
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
         
}
console.log(SecondGreatLow([1,2,34,34,56,8,99]));


// Step By Step
function SecondGreatLow(arr) {

    // Use the sort function and pass in a callback to sort from smallest to largest
    // If you haven't encountered function expressions/callbacks before, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort gives a good explanation of how this method works.
    arr = arr.sort(function(a, b) {return a - b;});

    // Loop through each item in the array and check if the adjacent array item is the same.
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] == arr[i - 1]) {
            // If it is, we use the .splice method to remove it.
            arr.splice(i, 1);
        }
    }

    if (arr.length > 2) {
        // If our array is longer than two items, we return the 2nd and 2nd to last item in the array.
        return arr[1] + " " + arr[arr.length - 2];
    } else if (arr.length == 2) {
        // If our array is exactly two items long, we return the 2nd and the first item
        return arr[1] + " " + arr[0];
    } else {
        // If our array is only one item, we return the only element twice.
        return arr[0] + " " + arr[0];
    }

}


function SecondGreatLow(arr) { 

  arr = arr.sort(function(a, b) {return a - b;});

  for (var i = arr.length - 1; i > 0; i--) {
    if (arr[i] == arr[i - 1]) { arr.splice(i, 1); }
  }
   
  if (arr.length > 2) {
    return arr[1] + " " + arr[arr.length - 2];
  } else if (arr.length == 2) {
    return arr[1] + " " + arr[0];
  } else {
    return arr[0] + " " + arr[0];
  }       
}

console.log(SecondGreatLow([1,2,34,56,8,99]));

//Methods Used
//filter() - arr.filter(callback[, thisArg]) - creates a new array with all elements that pass the test implemented by the provided function
//splice() - array.splice(start, deleteCount[, item1[, item2[, ...]]]) - changes the content of an array by removing existing elements and/or adding new elements