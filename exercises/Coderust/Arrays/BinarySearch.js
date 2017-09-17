/* 
Given a sorted array of integers, return the index of the given key. Return -1 if not found.

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
