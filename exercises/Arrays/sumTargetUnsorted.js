/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// output: indexs

const sumTarget = (nums, target) => {

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
  return null;
};

// optimized
const sumTargetTwo = (nums, target) => {
  const diff = {};

  for (let i = 0; i < nums.length; i++) {
    let subtract = target - nums[i];

    if (diff[subtract]) { 
      return [diff[subtract].index, i];
    } else {
      diff[nums[i]] = { index: i };
    }
  }
  return null;

};


console.log(sumTarget([2, 7, 11, 15], 9));
console.log(sumTargetTwo([3, 2, 4], 6));