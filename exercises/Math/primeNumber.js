// How would you verify a prime number?

// I: Number
// O: Boolean
// C: n/a
// E: 1

// A number is a prime number when it is divisible on by itself and one

const prime = (num) => {
  const middle = Math.floor(num/2);

  for (i = 2; i <= middle; i++) {
    if (num%i === 0) {
      return false;
    }
  }

  return true;
};

// optimized
const isPrime = (n) => {
  var divisor = 3, 
      limit = Math.sqrt(n);
  
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit) {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}

console.log(prime(1));
console.log(prime(5));
console.log(prime(12));
console.log(prime(13));
console.log(prime(137));
console.log(prime(237));

