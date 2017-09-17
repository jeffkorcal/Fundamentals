/*
Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500;.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
*/

// Brute Force
// function getMaxProfit(stockPricesYesterday) {

//   var maxProfit = 0;

//   for (var earlierTime = 0; earlierTime < stockPricesYesterday.length; earlierTime++) {
//     var earlierPrice = stockPricesYesterday[earlierTime];

//     for (var laterTime = earlierTime + 1; laterTime < stockPricesYesterday.length; laterTime++) {
//       var laterPrice = stockPricesYesterday[laterTime];
//       var potentialProfit = laterPrice - earlierPrice;
//       maxProfit = Math.max(maxProfit, potentialProfit);
//       }
//   }

//   return maxProfit;
// }


/*/////////////////////////////////////////////////////
  Optimized O(n)
/////////////////////////////////////////////////////*/
function getMaxProfit(stockPricesYesterday) {

  if (stockPricesYesterday.length < 2) {
    throw new Error('Calculating profit requires at least 2 prices');
  }

  var minPrice = stockPricesYesterday[0];
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  for (var i = 1; i < stockPricesYesterday.length; i++) {
    var currentPrice = stockPricesYesterday[i];
    var potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPricesYesterday)); // returns 6 (buying for $5 and selling for $11)