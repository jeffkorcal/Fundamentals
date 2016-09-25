//Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

function Palindrome(str) { 

  str = str.replace(/[ ]/g, "")

  var revStr = str.split('').reverse().join('');
  return str === revStr;
         
}
console.log(Palindrome('never odd or even'));

function Palindrome(str) { 

  // first we'll get rid of spaces and make the characters 
  // all lowercase to make it easier to work with
  var str = str.split(" ").join("").toLowerCase();

  // we wrote this reverse code in a previous solution
  var rev = str.split('').reverse().join('');

  // now it's very easy to check if a string is a palindrome
  return str === rev;
         
}   
Palindrome("Never odd or even");                                                              

function Palindrome(str) {

    // First, we prep the string by using the .replace method to take out all spaces.
    // Note that [\s] will match all whitespace in the string.
    str = str.replace(/[\s]/g, "");

    // Next, we declare a new variable to hold the reversed string and use the .split, .reverse, and .join methods to modify it.
    // You should remember this section from the very first problem (check out my solution in this repository if you need a refresher).
    strRev = str.split("").reverse().join("");

    // Finally, we return the truth value of comparing the two strings.
    return str == strRev;
}

//recurive version
var palindrome = function(str) {
  str = str.replace(/[\s]/g, "").toLowerCase();

  if (str <= 1){
    return true;
  } 

  if (str.charAt(0) !== str.charAt(str.length -1)) {
    return false;
  }

  return palindrome(str.substr(1, str.length -2)); 

};
palindrome("Never odd or even");

// Best Practices
// Note that while this problem doesn't use any inputs with uppercase letters, you can add in .toLowerCase() to account for inputs that do.
function Palindrome(str) {

    return str.replace(/[\s]/g, "").toLowerCase() == str.replace(/[\s]/g, "").toLowerCase().split("").reverse().join("");
}
