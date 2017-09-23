/* 
Given a sorted array of integers, return the index of the given key. Return -1 if not found.

Binary search is used to find the index of an element in a sorted array. If the element doesn't exist, that can be determined efficiently as well. The algorithm divides the input array by half at every step. After every step, either we have found the index that we are looking for or half of the array can be discarded. Hence, solution can be calculated in O(logn) time.

Here's how algorithm works.

At every step, consider the array between low and high indices
Calculate the mid index.
If element at the mid index is the key, return mid.
If element at mid is greater than the key, then reduce the array size such that high becomes mid - 1. Index at low remains the same.
If element at mid is less than the key, then reduce the array size such that low becomes mid + 1. Index at high remains the same.
When low is greater than high, key doesn't exist. Return -1.

Time Complexity: O(logn)
*/

// Loop
function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let midVal = array[mid];

    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      max = mid - 1;
    } else if (midVal < target) {
      min = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));

// Recursion
let binary_search_rec = function(a, key, low, high) {
  if (low > high) {
    return -1;
  }

  let mid = low + Math.floor((high - low) / 2);
  if (a[mid] === key) {
    return mid;
  } else if (key < a[mid]) {
    return binary_search_rec(a, key, low, mid - 1);
  } else {
    return binary_search_rec(a, key, mid + 1, high);
  }
};

let binary_search = function(a, key) {
  return binary_search_rec(a, key, 0, a.length - 1);
};
