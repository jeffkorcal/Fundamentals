/* 
Remove duplicate characters from a string. 
For example, if the input string is "abbabcddbabcdeedebc", after removing duplicates it should become "abcde".
*/

const removeDuplicates = (str) => {
  const map = {};
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!map[letter]) {
      map[letter] = true;
      result = result + letter;
    }
  }
  return result;
}

console.log(removeDuplicates("abbabcddbabcdeedebc"));