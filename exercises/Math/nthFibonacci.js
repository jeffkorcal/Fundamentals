// How to get the nthFibonacci number?

const nthFibonacci = (n) => {
   if ( n < 2 ) { 
    return 1; 
  } else {
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
  }
};

// const nFib = (n) =>  {
//   return n > 2 ? n : nFib(n-1) + nFib(n-2);
// };

const nFib = (n) => {
  let mem = [0,1];
  for(; n > 1; n--) {
    mem.push(mem.shift() + mem[0]);
  }
  return mem[n];
}

console.log(nFib(5));