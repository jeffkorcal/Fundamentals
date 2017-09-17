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


// Memoization
function Fibber() {
  this.memo = {};
}

Fibber.prototype.fib = function(n) {

  // edge case
  if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.');

  // base cases
  } else if (n === 0 || n === 1) {
      return n;
  }

  // see if we've already calculated this
  if (this.memo[n]) {
    console.log('grabbing memo[' + n + ']');
    return this.memo[n];
  }

  console.log('computing fib(' + n + ')');
  var result = this.fib(n-1) + this.fib(n-2);

  // memoize
  console.log(n);
  this.memo[n] = result;

  return result;
}

var test = new Fibber();
test.fib(6)