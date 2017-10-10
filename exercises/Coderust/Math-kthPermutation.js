/* 
Given a set of n elements find their kth permutation. Consider the following set of elements: [1,2,3]

Permutations


123
132
213
231
312
321
*/

const getPermutations = (arr, current = [], indexesUsed = [], result = []) => {
  if (current.length === arr.length) {
    return result.push(current);
  }

  for (let i = 0; i < arr.length; i++) {
    if (!indexesUsed.includes(i)) {
      getPermutations(arr, current.concat(arr[i]), indexesUsed.concat(i), result);
    }
  }

  return result;
};





function permutations(arr) {
  var result = [];

  function recurse(combo, visited) {
    if (combo.length === arr.length) {
      result.push(combo);
      return;
    }

    for (var i = 0; i < arr.length; i++) {
      if (!visited.includes(i)) {
        recurse(combo.concat(arr[i]), visited.concat(i));
      }
    }
  }
  recurse([], []);

  return result;
}
console.log(permutations(['C', 'A', 'T']));






const findPermutations = array => {
  return permute(array, []);
};

const permute = (array, tmp) => {
  let result = [];

  if (array.length === 0) {
    result.push(tmp);
  }

  for (let i = 0; i < array.length; i++) {
    const copy = array.slice();
    const currentChar = copy.splice(i, 1);
    result = result.concat(permute(copy, tmp.concat(currentChar)));
  }

  return result;
};
