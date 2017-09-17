// How can you match substring of a sting?

const subStringFinder = (str, subStr) => {
  var count = 0,
      i = 0,
      j = 0,
      len = str.length,
      subLen = subStr.length;

   for(; i<len; i++){
   
      str[i] === subStr[j] ? j++ : j = 0;
      
      if(j === 0) {
        count = i;
      } else if (j === subLen) {
        return count;
      }
  }

  return -1;
}

console.log(subStringFinder('abbcdabbbbbck', 'ab'));
console.log(subStringFinder('abbcdabbbbbck', 'bck'));