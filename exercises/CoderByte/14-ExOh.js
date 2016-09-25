//Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

function ExOh(str) { 

  // we split the string with the separator being
  // the x's and o's and compare them

  // this returns a string containing only o's
  var x = str.split("x").join("");

  // this returns a string containing only x's
  var o = str.split("o").join("");

  // see if their lengths are equal
  return x.length === o.length;
         
}
   
ExOh("xooox"); 


function ExOh(str) { 

  // split the string into an array
  var arr = str.split("");

  // create a new array of x's by using the filter function
  // which takes a test function with 3 parameters:
  // the element, its index, and the array it came from
  // and if the test passes it adds this element to the new array
  var x = arr.filter(function(elem, index, self) { 
    return elem === 'x';
  });

  // because we know the string can only contains x's and o's
  // we can subtract the length of our new array of x's from 
  // arr and that will leave us with the number of o's
  var o = arr.length - x.length;

  // see if their lengths are equal
  return x.length === o;
         
}
   
ExOh("xooox");


function ExOh(str) { 
  var xCount = str.replace(/[^x]/g, "").length;
  var oCount = str.replace(/[^o]/g, "").length;

  if (xCount === oCount) {
    return true;
  }

  return false;
}
console.log(ExOh("xooxxo"));


function ExOh(str) {

    return str.replace(/[^x]/g, "").length === str.replace(/[^o]/g, "").length;
}