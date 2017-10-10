// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

function permutations(string) {
  var result = [];

  (function recurse(combo, visited) {
    if (combo.length === string.length) {
      result.push(combo);
      return;
    }

    for (var i = 0; i < string.length; i++) {
      if (!visited.includes(i)) {
        recurse(combo.concat(string[i]), visited.concat(i));
      }
    }
  })('', []);

  return result;
}

// console.log(permutations('a')); // ['a']
//console.log(permutations('ab')); // ['ab', 'ba']
//console.log(permutations('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']