// Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 step, or 3 steps at a time.  Implement a method to count how many possible ways the child can run up the stairs n number of times.

const tripleStep = (n) => {

  if(n === 0) { return 0; }

  const arr = [1,2,3];
  let count = 0;

  const step = (arr, n) => {
    if(n === 0) {
      count++;
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (n - arr[i] >= 0) {
        step(arr, n - arr[i]);
      }
    }
  }
  step(arr, n);

  return count;

}

// This solution is cleaner but only will work if there are steps
// const tripleStep = (n) => {

//   const arr = [1,2,3];
//   let count = 0;

//   if(n === 0) {
//     return 1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (n - arr[i] >= 0) {
//       count += tripleStep(n - arr[i]);
//     }
//   }

//   return count;

// }

module.exports = tripleStep;