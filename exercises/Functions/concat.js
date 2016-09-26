const concat = function() {

  const array = [];

  for (let i = 0; i < arguments.length; i++){
    
    if(Array.isArray(arguments[i])){

      // if it is an array go through the array and push the elements to the new array
      for (let j = 0; j < arguments[i].length; j++){
        array.push(arguments[i][j]);
      }

    } else {
      // if it is not an array just push the element to the new array
      array.push(arguments[i]);
    }
  }

  return array;
  
};