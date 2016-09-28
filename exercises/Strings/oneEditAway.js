// There are three thpes of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given tow strings, write a function to check if they are one edit (or zero edits) away.

// I: two strings
// O: boolean
// C: n/a
// E: n/a

const oneEditAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) { return false; }

  const map = {};
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    map[str1[i]] ? map[str1[i]]++ : map[str1[i]] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    map[str2[i]] ? map[str2[i]]-- : map[str2[i]] = 1;
  }

  for (let key in map) {
    count += map[key];
  }

  if (str1.length === str2.length) {
    return count === 2;
  } else {
    return (count === 0 || count === 1);
  }

}

console.log(oneEditAway('pale', 'pales')); //insert: true
console.log(oneEditAway('pale', 'ple')); //remove: true
console.log(oneEditAway('pale', 'bale')); //replace: true
console.log(oneEditAway('pale', 'bakessss')); //false