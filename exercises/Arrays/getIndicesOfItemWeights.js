/*
Merging 2 Packages

Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights. If such a pair doesn’t exist, return an empty array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [4, 6, 10, 15, 16],  lim = 21

output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals
*/

// If array is sorted: 
  // Add up value of the beginning and end index in array
  // If sum is greater than target subtract end index
  // If sum is less than target add beginning index
function getIndicesOfItemWeights(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length -1;

  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];

    if (sum === target) {
      return [leftIndex, rightIndex];
    } else if (sum < target) {
      leftIndex += 1;
    } else { // sum > target
      rightIndex -= 1;
    }
  }

  return [];
}

// If array is unsorted:
  // Subtract the target from the value
  // Store value as the key and the index as the value
  // If the difference of the target and the value equals a key return that index and current index
const getIndicesOfItemWeightsTwo = (nums, target) => {
  const diff = {};

  for (let i = 0; i < nums.length; i++) {
    let subtract = target - nums[i];

    if (diff[subtract]) { 
      return [diff[subtract].index, i];
    } else {
      diff[nums[i]] = { index: i };
    }
  }
  return [];

};

console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16], 21));
console.log(getIndicesOfItemWeightsTwo([4, 6, 10, 15, 16], 21));
