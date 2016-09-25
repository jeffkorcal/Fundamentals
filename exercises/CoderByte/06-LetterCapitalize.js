// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

function LetterCapitalize(str) {

  var arr = str.split(" ");
  arr.forEach(function (element,index,array){
      arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
  });
  return arr.join(" ");
}
console.log(LetterCapitalize("hello world"));


function LetterCapitalize(str) { 
  
  // split the string into an array
  var words = str.split(" ");

  // we split the word into two parts and then combine the parts 
  // the first part is the first letter which we capitalize and the 
  // second part is the rest of the string
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }

  // return the array of words joined into a string
  return words.join(" ");
         
}
LetterCapitalize("hello world from coderbyte");  


function LetterCapitalize(str) { 
  
  // our regex [a-z] matches every alphabetic character in the string
  // but the \b before it specifies a word boundary, in other words, nothing can 
  // come before those letters therefore selecting every word in the string
  return str.replace(/\b[a-z]/gi, function(char) { 
    return char.toUpperCase();
  });
         
}
LetterCapitalize("hello world from coderbyte");  

//Methods Used
// charAt() - str.charAt(index) - Returns the specific character at the index you provide
// slice() - arr.slice([begin[, end]]) || str.slice(beginSlice[, endSlice]) - Returns a shallow copy starting at the begining index up to but not including the end index if provided
// toUpperCase() - str.toUpperCase() - Capitalizes the string given