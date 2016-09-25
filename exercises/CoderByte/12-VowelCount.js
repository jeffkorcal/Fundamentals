// Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

function VowelCount(str) { 
  var count = 0;

    for(var i = 0; i < str.length; i++) {
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count++;
      }
    }

  return count;
}

function VowelCount(str) { 

  // convert the string to all lowercase characters
  var str = str.toLowerCase();

  // possible vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  // where we store our vowel count
  var count = 0;

  // loop through string checking each character
  for (var i = 0; i < str.length; i++) { 

    // if this character is found in vowels array
    // then the character is a vowel and we add 1 to count
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1
    }

  }

  // return the number of vowels found
  return count;
         
}


function VowelCount(str) { 
  return str.replace(/[^aeiou]/g, "").length; 
}
console.log(VowelCount("hello")); //2
console.log(VowelCount("coderbyte")); //3
