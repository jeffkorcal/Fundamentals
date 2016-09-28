// Implement an algorithm to determine if a string has all unique characters. 

// I: string
// O: boolean
// C: no data structures
// E: n/a

const isUnique = (str) => {
  const map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      return false;
    } else {
      map[str[i]] = str[i];
    }
  }
  return true;
}

console.log(isUnique('abcde'));