// How will you remove duplicate characters from a sting?

const removeDupChar = (str) => {
  let len = str.length,
      char, 
      charCount = {},
      result = [];

  for(let i =0; i<len; i++){
    char = str[i];
    charCount[char] ? charCount[char]++ : charCount[char] = 1;
  }

  for (let j in charCount){
    if (charCount[j] === 1) { result.push(j); }
  }

  return result.join('');

};

console.log(removeDupChar('Learn more JavaScript'));