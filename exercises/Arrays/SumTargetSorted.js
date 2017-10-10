// Give a sorted array find all combination of two number that add up to target
// Constraint: better than n^2

var arr = [1,2,3,4,5,6];

function sumTarget (arr, target) {
  let result=[];
  let start=0;
  let end=arr.length-1;

  while(start < end) {
    var sum = arr[start] + arr[end];

    if (sum === target) { 
      result.push([arr[start], arr[end]]);
      start++;
      end--;
    } else if (sum < target) {
      start++;
    } else if (sum > target) {
      end--;
    }

  }
  
  return result;
}
console.log(sumTarget(arr, 8));

// Give a sorted array find all combination of three number that add up to target