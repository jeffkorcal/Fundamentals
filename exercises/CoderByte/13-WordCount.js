// Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 

function WordCount(str) { 

  var arr = str.split(" ");

  return arr.length;
         
}

function WordCount(str) { 

  // we simply split the string into an array
  // with the separator being the spaces
  return str.split(" ").length;
        
}

console.log(WordCount("Hello World")); //2