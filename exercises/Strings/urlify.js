// Write a method to replace all spaces in a string with '%20'. You many assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string. 

// I: string
// O: string with spaces as %20
// C: n/a
// E: n/a

const urlify = (str) => {
  const arr = str.trim().split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20';
    }
  }
  return arr.join('');
}

console.log(urlify('Mr John Smith'));
console.log(urlify(' Mr John Smith '));