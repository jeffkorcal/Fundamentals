/*
Implement a document scanning engine that receives a text document doc and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in descending order.

Example:
for doc: "practice makes perfect. get perfect by practice. just practice!"
the engine returns the list: { practice: 3, perfect: 2,  makes: 1, get: 1, by: 1, just: 1 }.

The engine should ignore punctuation and white-spaces.
Find the minimal runtime complexity and analyze it.
*/

function wordCountEngine(str) {
  var arr = str.replace(/[\.,!#?]/g, "").toLowerCase().split(" ");
  var words = {};
  var sortArr = [];
  var sortedWords = {};

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (words[word]) {
      words[word] += 1;
    } else {
      words[word] = 1;
    }
  }

  for (var key in words) {
    sortArr.push([key, words[key]]);
  }

  sortArr.sort(function(a, b) {
    return b[1] - a[1]; 
  })

  for (var i = 0; i < sortArr.length; i++) {
    sortedWords[sortArr[i][0]] = sortArr[i][1];
  }

  return sortedWords;
   
}

var str = "practice makes perfect. get perfect by practice. just practice!";
console.log(wordCountEngine(str));