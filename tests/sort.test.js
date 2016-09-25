var bubbleSort = require('../exercises/Sorting/bubbleSort');
var insertionSort = require('../exercises/Sorting/insertionSort');
var mergeSort = require('../exercises/Sorting/mergeSort');
var quickSort = require('../exercises/Sorting/quickSort');
var expect = require('chai').expect;

describe('bubble sort', function() {
  it('should sort correctly', () => {
    var input = [10,5,3,8,2,6,4,7,9,1];
    bubbleSort(input);
    expect(input).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
});

describe('insertion sort', function() {
  it('should sort correctly', () => {
    var input = [10,5,3,8,2,6,4,7,9,1];
    insertionSort(input);
    expect(input).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
});

describe('merge sort', function() {
  it('should sort correctly', () => {
    var input = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(input);
    expect(ans).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
});

describe('quickSort', function() {
  it('quicksort an array', () => {
    const input = [10,5,3,8,2,6,4,7,9,1];
    const ans = quickSort(input);
    expect(ans).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
});