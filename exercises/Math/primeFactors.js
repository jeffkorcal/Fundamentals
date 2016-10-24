// How can you find all prime factors of a number?

const primeFactors = (n) => {
  const factors = [];
  let divisor = 2;

  while (n > 2) {
    if(n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

console.log(primeFactors(69));