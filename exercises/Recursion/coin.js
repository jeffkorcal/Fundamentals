/*
Given an infinite number of quarters (25 cents), dimes (10 cents), and nickles(5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents.
*/

const coins = (n) => {
  const denominations = [1, 5, 10, 25];
  let count = 0;

  (function recurse(i, total) {

    if (i === 0) {
      count++; 
      return;
    }

    while (total >= 0) {
      recurse(i - 1, total);
      total -= denominations[i];
    }

  })(denominations.length - 1, n);

  return count;
}

module.exports = coins;