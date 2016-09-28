// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearragement of letters. The palindrome does not need to be limited to just dictonary words.

// I: string
// O: boolean if it is a permutation of a palindrome
// C: n/a
// E: n/a

const palindromePermutation = (str) => {
  const map = {};
  let count = 0;
  str = str.replace(/\s/,'');

  for (let i = 0; i < str.length; i++) {
    map[str[i]] ? map[str[i]]++ : map[str[i]] = 1;
  }

  for (let key in map) {
    count += (map[key] % 2);
  }
  
  return count <= 1;
}

console.log(palindromePermutation('tact coa'));
console.log(palindromePermutation('race car'));