/*
Given a string str and a positive integer k, return the longest substring of str that contains at most k unique characters.

str: bacbcaccbbaacbacaabbbbcaab
              ^
k: 2
=> ‘aabbbb’

longestSubStr = 'ccbb'
tempSubStr = 'ccbb'
tempSubStrMap = {
  c : 2
  b : 2
}
*/

function longestUniqueSubStr (str, k) {

  if (str.length < k) { 
    throw new Error('Number of characters needs to less than the length of the string')
  }

  let longestSubStr = '';
  let tempSubStr = '';
  let tempSubStrMap = {};

  for (let i = 0; i < str.length; i++) {

    const letter = str[i];
    tempSubStr += letter;

    if (tempSubStrMap[letter]) {
      tempSubStrMap[letter] += 1;
    } else {
      tempSubStrMap[letter] = 1;
    }

    const numOfChars = Object.keys(tempSubStrMap).length;

    if (numOfChars > k) {
      const tempSubArr = tempSubStr.split('');
      while (Object.keys(tempSubStrMap).length > k) {
        const char = tempSubArr.shift();
        tempSubStrMap[char] -= 1;
        if (tempSubStrMap[char] === 0) {
          delete tempSubStrMap[char];
        }
      }
      tempSubStr = tempSubArr.join('');

    } else if (numOfChars === k) {
      longestSubStr = tempSubStr.length > longestSubStr.length ? tempSubStr : longestSubStr;
    } 

  }

  return longestSubStr;
}

console.log(longestUniqueSubStr('bacbcaccbbaacbacaabbbbcaab', 2));