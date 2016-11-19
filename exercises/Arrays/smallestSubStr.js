/*
Given an array with unique characters arr and a string str, find the smallest substring of str containing all characters of arr.

Example:
arr: [x,y,z], str: xyyzyzyx
result: zyx

Implement your solution and analyze the runtime complexity

smallestSS = 

letters = {
  x:
  y:
  z:
}

xyyzyzyx
|
|
*/


function findSmallestSubStr (arr, str) {

  var smallestSS = '';

  var letters = mapArrToObj(arr);
  var head = 0;
  var tail = 0;

  for (; head < str.length; head++) {

    var letter = str[head];
    if (letters[letter] || letters[letter] === 0) {
      letters[letter] = letters[letter] + 1;
    } 

    while (validateObjCount(letters)) {
      var subStr = str.slice(tail, head + 1);
      if (subStr.length < smallestSS.length || smallestSS.length === 0) {
        smallestSS = subStr;
      }
      letters[str[tail]] = letters[str[tail]] - 1; 
      tail++;
    }

  }
  return smallestSS;
}

function mapArrToObj (arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  return obj;
}

function validateObjCount (obj) {
  for(var key in obj) {
    if (obj[key] === 0) {
      return false;
    }
  }
  return true;
}

console.log(findSmallestSubStr(['x','y','z'], 'xyyzyzyx'));