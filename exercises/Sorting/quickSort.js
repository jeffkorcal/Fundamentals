// Implement Quick Sort
// BigO: n(log(n))
// Unstable Sort
// Quicksort should grab a pivot from the end and then separate the list (not including the pivot) into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers) list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

const quickSort = (arr) => {

  //base case
  if (arr.length < 2) { return arr; }

  let pivot = arr[arr.length - 1];
  let left = [], right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];

}

module.exports = quickSort;

//console.log(quickSort([75,27,7,3,5,88,4,3]));

// quickSort3 choose the first, middle, and the last index in an array and use the the middle number out of the three for the pivot