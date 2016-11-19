// Write a function that generates every sequence of throws a single player could throw over a three-round game of rock-paper-scissors 

 
function allPermutations (n) {
  const arr = ['rock', 'paper', 'scissors'];
  const result =[];

  (function play(n, combo) {
    
    if(n <= 0) {
      result.push(combo);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      play(n-1, combo.concat(arr[i]));
    }

  })(n,[]);

  return result;

}

console.log(allPermutations(3));