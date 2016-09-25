// Reducing Arrays

// Sometimes we need to perform an operation on more than one item in the array at the same time. For example, let's say we need to find the largest integer in an array. We can't use a filter() operation, because it only examines one item at a time. To find the largest integer we need to compare items in the array to each other.

// One approach could be to select an item in the array as the assumed largest number (perhaps the first item), and then compare that value to every other item in the array. Each time we come across a number that was larger than our assumed largest number, we'd replace it with the larger value, and continue the process until the entire array was traversed.

// If we replaced the specific size comparison with a closure, we could write a function that handled the array traversal process for us. At each step our function would apply the closure to the last value and the current value and use the result as the last value the next time. Finally we'd be left with only one value. This process is known as reducing because we reduce many values to a single value.



var boxarts = [
    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ];


// Exercise 15: Use forEach to find the largest box art
  var returnLargest = function (boxarts){
      var currentSize,
      maxSize = -1,
      largestBoxart;

    boxarts.forEach(function(boxart) {
      currentSize = boxart.width * boxart.height;
      if (currentSize > maxSize) {
        largestBoxart = boxart;
        maxSize = currentSize;
      }
    });

    return largestBoxart;
  };
  console.log(returnLargest(boxarts));


// Exercise 16: Implement reduce() that returns and array
  Array.prototype.reduce = function(combiner, initialValue) {
    var counter, accumulatedValue;

    // If the array is empty, do nothing
    if (this.length === 0) {
      return this;
    }
    else {
      // If the user didn't pass an initial value, use the first item.
      if (arguments.length === 1) {
        counter = 1;
        accumulatedValue = this[0];
      }
      else if (arguments.length >= 2) {
        counter = 0;
        accumulatedValue = initialValue;
      }
      else {
        throw "Invalid arguments.";
      }

      // Loop through the array, feeding the current value and the result of
      // the previous computation back into the combiner function until
      // we've exhausted the entire array and are left with only one value.
      while(counter < this.length) {
        accumulatedValue = combiner(accumulatedValue, this[counter])
        counter++;
      }

      return [accumulatedValue];
    }
  };


// Exercise 17: Retrieve the largest rating.
// You should return an array containing only the largest rating. Remember that reduce always
// returns an array with one item.
  var largestRating = function (ratings) {

    return ratings.reduce(function(acc, curr) {
      if(acc > curr) {
        return acc;
      }
      else {
        return curr;
      }
    });
  };
  console.log(largestRating([2,3,1,4,5]));


// Exercise 18: Retrieve url of the largest boxart
// You should return an array containing only the URL of the largest box art. Remember that reduce always
// returns an array with one item.
  var largestBoxart = boxarts.reduce(function(acc,curr) {    
    return (acc.width * acc.height > curr.width * curr.height) ? acc : curr;
  }).map(function(boxart) {
    return boxart.url;
  });
  console.log(largestBoxart);
