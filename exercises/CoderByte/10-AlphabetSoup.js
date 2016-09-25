// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) {
  var sortedStr = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()0-9\s]/g,"").toLowerCase();
  sortedStr = sortedStr.split("").sort().join("");
  console.log(sortedStr);
  return sortedStr;

}
AlphabetSoup("Hello World 00000 ");


function AlphabetSoup(str) { 

  // convert the string into an array of characters
  var chars = str.split("");

  // sort the array in alphabetical order
  var sorted = chars.sort();

  // return the newly sorted string
  return sorted.join("");
         
}

//Methods Used
// sort() - arr.sort([compareFunction]) - sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.