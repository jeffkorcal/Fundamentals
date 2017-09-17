/*
Given an arrayOfInts, find the highestProduct you can get from three of the integers
The input arrayOfInts will always have at least three integers
*/

// Sort first 0(nlogn)
// function highestProduct(arrayOfInts) {
//   var sortedArr = arrayOfInts.sort(function(a,b){
//     return a - b;
//   });
//   var length = arrayOfInts.length;
//   var highest3 = arrayOfInts[length - 1] * arrayOfInts[length - 2] * arrayOfInts[length - 3];
//   var highest1Lowest2 = arrayOfInts[length - 1] * arrayOfInts[0] * arrayOfInts[1]
//   return Math.max(highest3, highest1Lowest2);
// }


/*/////////////////////////////////////////////////////
  Optimized 0(n)
/////////////////////////////////////////////////////*/
function highestProduct(arrayOfInts) {

  if (arrayOfInts.length < 3) {
    throw new Error('Less than 3 items!');
  }

  var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  var lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  var lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  for (var i = 2; i < arrayOfInts.length; i++) {
    var current = arrayOfInts[i];

    highestProductOf3 = Math.max(highestProductOf2 * current, lowestProductOf2 * current);
    highestProductOf2 = Math.max(highestProductOf2, highest * current);
    lowestProductOf2 = Math.min(lowestProductOf2, lowest * current);
    highest = Math.max(highest, current);
    lowest = Math.max(lowest, current);
  }

  return highestProductOf3;

}


var arrayOfInts = [1,3,5,7,5,7,4,7,8];
console.log(highestProduct(arrayOfInts));