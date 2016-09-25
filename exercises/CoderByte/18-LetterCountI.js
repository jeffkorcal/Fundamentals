//Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

function LetterCountI(str) { 

  var words = str.split(" ");
  var table = {};

  for(var i = 0; i < words.length; i++){
    var thisWord = words[i];
    table[thisWord] = {};

    table[thisWord].highest = 0;

    for(var j = 0; j < thisWord.length; j++){

      var thisChar = thisWord[j];
      table[thisWord][thisChar] === undefined ? table[thisWord][thisChar] = 1 : table[thisWord][thisChar] += 1;
    
      if (table[thisWord][thisChar] > table[thisWord].highest) {
        table[thisWord].highest = table[thisWord][thisChar];
      }
    }
  }

  var result = {word:null,count:1};

  for (var word in table){

    if (table[word].highest > result.count) {
      result.count = table[word].highest;
      result.word = word;
    }
  }

  return result.count === 1 ? -1 : result.word;
}
console.log(LetterCountI("hello this is a sentence"));



function LetterCountI(str) { 

  // array of words
  var words = str.split(" ");
  
  // the table that will contain each word with a key and value pair
  // being the characters and the number of times they appeared
  // e.g. {hello: {h: 1, e: 1, l: 2, o: 1}}
  var table = {};
  i
  // loop through each word
  for (var i = 0; i < words.length; i++) {
    
    // create new entry in table with the key 
    // being this word
    var thisWord = words[i];
    table[thisWord] = {};
    
    // create a key/value pair that will store
    // the highest letter count for each word
    table[thisWord]["highest"] = 0;
    
    // loop through each character in word and
    // store number of times each letter appears
    for (var c = 0; c < words[i].length; c++) {
     
      // see if this character already exists in table for
      // this word: if so add 1 to the count, if not set count = 1
      var thisChar = thisWord[c];
      table[thisWord][thisChar] === undefined ?
        table[thisWord][thisChar] = 1 :
        table[thisWord][thisChar] += 1;
      
      // update the highest letter count for each 
      // new letter in the iteration
      if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
        table[thisWord]["highest"] = table[thisWord][thisChar];
      }
      
    }
    
  }

  // setup a new object that will store the word
  // with the highest number of repeating characters
  var answer = {word: null, count: 1};
  
  // now determine what word has the highest number 
  // of repeating letters by accessing the "highest"
  // property of each word in the table
  for (var w in table) {
    if (table[w]["highest"] > answer["count"]) {
      answer["count"] = table[w]["highest"];
      answer["word"] = w;
    }
  }
  
  return (answer["count"] === 1) ? -1 : answer["word"];
       
}
