//  How would you merge two sorted array?

const arrGenerator = (n, incrementBy) => {
  const arr = [];

  for (let i = 0; i < n; i = i + incrementBy) {
    arr.push(i);
  }

  return arr;
};

const mergeSortedArr = (arr1, arr2) => {
  const result = [];

  while(arr1.length && arr2.length) {
    arr1[0] <= arr2[0] ? result.push(arr1.shift()) : result.push(arr2.shift());
  }

  return arr1.length ? result.concat(arr1) : result.concat(arr2);

};

arr1 = arrGenerator(10,2);
arr2 = arrGenerator(15,3);
console.log(mergeSortedArr(arr1, arr2));
