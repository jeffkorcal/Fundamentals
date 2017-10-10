/* 
Find Maximum in Sliding Window
Given a large array of integers and a window of size 'w', find the current maximum in the window as the window slides through the entire array.

Inputs: 
  Array: [-4, 2, -5, 3, 6]
  Window(string): 3

Output:
  Array: [2, 3, 6]

*/

const maxSlidingWindow = (nums, windowSize) => {
  const queue = [];
  const result = [];

  for (let index = 0; index < nums.length; index++) {
    // check if index is within window size
    if (queue.length > 0 && queue[0] < index - windowSize + 1) {
      queue.shift();
    }

    // add max
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[index]) {
      queue.pop();
    }

    queue.push(index);

    // will go in everytime after index reaches window size
    if (index >= windowSize - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([4, 10, 9, 3, 8], 3));
