//Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

function SwapCase(str) { 

  var arr = str.split("");
 
  for (var i = 0; i < arr.length; i++){
    arr[i] === arr[i].toUpperCase() ? arr[i] = arr[i].toLowerCase() : arr[i] = arr[i].toUpperCase();
  }

  return arr.join('');
         
}


function SwapCase(str) { 

  // turn the string into an array of characters
  var chars = str.split('');
  
  // loop through the array swapping letter cases
  // uppercase -> lowercase
  // lowercase -> uppercase
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toUpperCase()) { 
      chars[i] = chars[i].toLowerCase();
    }
    else if (chars[i] === chars[i].toLowerCase()) { 
      chars[i] = chars[i].toUpperCase();
    }
  }
  
  // return the modified array of characters joined as a string
  return chars.join('');
         
}
   
SwapCase("Hello World");  


function SwapCase(str) {

    var answer = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            answer += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            answer += str[i].toUpperCase();
        } else {
            answer += str[i];
        }
    }

    return answer;
}