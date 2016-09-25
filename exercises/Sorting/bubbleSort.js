// Implement Bubble Sort
// BigO: n^2
// Bubble sort works by comparing two adjacent numbers next to each other and then swapping their places if the smaller index's value is larger than the larger index's. Continue looping through until all values are in ascending order

const bubbleSort = (arr) => {
  let i = 0,
      temp = 0,
      length = arr.length,
      keepSorting = true;

  while (keepSorting) {
    keepSorting = false;

    for (i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        keepSorting = true;
      }
    }

    length--;
  }

  return arr;

}

module.exports = bubbleSort;

//console.log(bubbleSort([75,27,7,3,5,88,4,3]));

