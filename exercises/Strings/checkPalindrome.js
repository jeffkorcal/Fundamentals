// How will you verify a word as palindrome?

const checkPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}

console.log(checkPalindrome('test'));
console.log(checkPalindrome('madam'));