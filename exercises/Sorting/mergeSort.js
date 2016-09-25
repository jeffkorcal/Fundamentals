// Implement Merge Sort
// BigO: n(log(n))
// Stable Sort: if you have equivalent elements, it will keep their original order in the array

const mergeSort = (arr) => {

  //base case
  if (arr.length < 2) { return arr };

  let results = [];
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  //stitching 
  while (left.length && right.length) {
    left[0] <= right[0] ? results.push(left.shift()) : results.push(right.shift());
  }
  return results.concat(left, right);
}

module.exports = mergeSort;

//console.log(mergeSort([75,27,7,3,5,88,4,3]));