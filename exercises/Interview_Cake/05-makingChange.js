/*
Imagine you landed a new job as a cashier...
Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.

Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make amount of money with coins of the available denominations.

Example: for amount=4(4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 44¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

function Change() {
    this.memo = {};
}

Change.prototype.changePossibilitiesTopDown = function(amountLeft, denominations, currentIndex) {
    currentIndex = currentIndex || 0;

    // check our memo and short-circuit if we've already solved this one
    var memoKey = String([amountLeft, currentIndex]);
    if (this.memo.hasOwnProperty(memoKey)) {
        console.log('grabbing memo[' + memoKey + ']');
        return this.memo[memoKey];
    }

    // base cases:
    // we hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // we overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;

    // we're out of denominations
    if (currentIndex === denominations.length) return 0;

    console.log('checking ways to make ' + amountLeft + ' with ' + denominations.slice(currentIndex));

    // choose a current coin
    var currentCoin = denominations[currentIndex];

    // see how many possibilities we can get
    // for each number of times to use currentCoin
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        numPossibilities += this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
        amountLeft -= currentCoin;
    }

    // save the answer in our memo so we don't compute it again
    this.memo[memoKey] = numPossibilities;
    return numPossibilities;
};

var change = new Change();
// console.log(change.changePossibilitiesTopDown(4, [1,2,3]));



/*/////////////////////////////////////////////////////
  Optimized
/////////////////////////////////////////////////////*/
function changePossibilitiesBottomUp(amount, denominations) {

  // intialize an array of zeros with indices up to amount
  var waysOfDoingNcents = [];
  for (var i = 0; i <= amount; i++) {
    waysOfDoingNcents[i] = 0;
  }
  waysOfDoingNcents[0] = 1;

  for (var j = 0; j < denominations.length; j++) {
    var coin = denominations[j];
    for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
      
      var higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
      
    }
  }
  return waysOfDoingNcents[amount];
}

changePossibilitiesBottomUp(4, [1,2,3]);
