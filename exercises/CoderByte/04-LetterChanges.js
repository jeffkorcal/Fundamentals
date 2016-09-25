// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabetbet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {

  // we will replace every letter in the string with the letter following it
  // by first getting the charCode number of the letter, adding 1 to it, then
  // converting this new charCode number to a letter using the fromCharCode function
  // we also check to see if the character is z and if so we simply convert the z to an a
  var converted = str.replace(/[a-z]/gi, function(char) { 
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  // we have now successfully converted each letter to the letter following it
  // in the alphabet, and all we need to do now is capitalize the vowels
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });

  // return the final string
  return capitalized;

}

console.log(LetterChanges("")); //Input = "hello*3"Output = "Ifmmp*3" 

//Methods Used
//fromCharCode() - String.fromCharCode(num1[, ...[, numN]]) - returns a string created by using the specified sequence of Unicode values
//charCodeAt() - str.charCodeAt(index) - The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index