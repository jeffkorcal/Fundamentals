/* 
Given a sentence, reverse the order of words.

*/

const reverseWord = str => {
  return str
    .split(' ')
    .reverse()
    .join(' ');
};
console.log(reverseWord('This is a short sentence'));
