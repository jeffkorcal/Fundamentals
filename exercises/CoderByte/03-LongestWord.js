// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.


function LongestWord(sen) { 

  // we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z0-9]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];
         
} LongestWord("the $$$longest# word is coderbyte"); 


function LongestWord(sen) {
  var bigWord = "";
  var words = sen.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");

  words.forEach(function(word){
    if (word.length > bigWord.length){
    bigWord = word;
    };
  });
  return bigWord;
}
console.log(LongestWord("Which word is the longest word!!#@ this############## sentence"));

//Methods Used
//Regular Expressions - var re = /ab+c/; var re = new RegExp("ab+c"); - Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions.

//match() - str.match(regexp) - retrieves the matches when matching a string against a regular expression

//sort() - arr.sort([compareFunction]) - sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points

//replace() - str.replace(regexp|substr, newSubStr|function[, flags]) - replaces the character given in the first parameter with what is given in the second parameter