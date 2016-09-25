// Implement Insertion Sort
// BigO: n^2
// The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner loop goes over the sorted part of the list and inserts it into the correct position in the array.


const insertionSort = (arr) => {

  //outer loop that touches going through each element
  for (let i = 1; i < arr.length; i++) {

    //inner loop which is the sorted sub array
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const spliced = arr.splice(i, 1);
        arr.splice(j, 0, spliced[0]);
      }
    }
  }

  return arr;
}

// optimized
const insertionSort2 = function(array) {

  for (let i = 1; i < array.length; i++) {
    let val = array[i];
    let hole = i;

    while (hole > 0 && val < array[hole - 1]) {
      array[hole] = array[hole - 1];
      hole--;
    }

    array[hole] = val; 

  }

  return array;
}

module.exports = insertionSort;

//console.log(insertionSort([75,27,7,3,5,88,4,3]));