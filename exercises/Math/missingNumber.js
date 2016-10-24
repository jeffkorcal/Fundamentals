// From a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

const missingNumber = (arr) => {
  let n = arr.length + 1, 
      sum = 0,
      expectedSum = (n*(n+1))/2;
  
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  
  return expectedSum - sum;
}

console.log(missingNumber([5, 2, 6, 1, 3]));