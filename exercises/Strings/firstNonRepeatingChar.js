// How could you find the first non repeating char in a string?

const firstNonRepeatChar = (str) => {
  let len = str.length,
      char, 
      charCount = {};

  for(let i = 0; i < len; i++){
    char = str[i];
    charCount[char] ? charCount[char]++ : charCount[char] = 1;
  }

  for (let j in charCount){
    if (charCount[j] === 1) { return j; }
  }
} 

console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));