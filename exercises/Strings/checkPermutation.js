// Given two strings, write a method to decide if one is a permutation of the other.

// I: 2 strings
// O: boolean if one is a permutation of the other
// C: n/a
// E: n/a

// Cleaner
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) { 
    return false; 
  }

  return str1.split('').sort().join() === str2.split('').sort().join() ? true : false;
}

// More efficient
const checkPermutation2 = (str1, str2) => {
  if (str1.length !== str2.length) { return false; }

  const map = {};

  for (let i = 0; i < str1.length; i++) {
    map[str1[i]] ? map[str1[i]]++ : map[str1[i]] = 1;
  }

  for (let i= 0; i < str2.length; i++) {
    map[str2[i]]--;
    if (!map[str2[i]] || map[str2[i]] < 0) {
      return false;
    }
  }

  return true;

}

console.log(checkPermutation('abc', 'cba'));
console.log(checkPermutation('aabc', 'acba'));
console.log(checkPermutation('abc', 'def'));
console.log(checkPermutation('abc', 'cbad'));
