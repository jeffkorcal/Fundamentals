// How would you reverse words in a sentence?

const reverseWords = (str) => {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('This is a pen'));