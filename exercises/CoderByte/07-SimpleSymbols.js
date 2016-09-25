// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

function SimpleSymbols(str) { 

  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
  var str = '=' + str + '=';

  // loop through entire string
  for (var i = 0; i < str.length; i++) {
    
    // check to see if current character is an alphabetic character  
    // by using a simple case-insensitive regex pattern 
    if (str[i].match(/[a-z]/i) !== null) {

      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i-1] !== '+' || str[i+1] !== '+') { 
        return false;
      }
    }
  }
  return true;
}


function SimpleSymbols(str) {
  var letterTest = /[a-zA-Z]/;
  for (var i = 0; i < str.length; i++) {
      if (letterTest.test(str[i])) {
          if ((str[i + 1] !== "+") || (str[i - 1] !== "+")) {
              //each letter is not surronded by + signs
              return false;
          }
      }
  }
  //each letter surrounded by + signs
  return true;
}

console.log(SimpleSymbols("+e+====+W+"));

//Methods Used
// test() - regexObj.test(str) - searches for a match between a regular expression and a specified string. Returns true or false.