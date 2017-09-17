/*
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

Input: [1, 7, 3, 4]
Calc: [7*3*4, 1*3*4, 1*7*4, 1*7*3]
Output: [84, 12, 28, 21]
*/


// Brute Force O(n^2)
// function getProductsOfAllIntsExceptAtIndex(arr) {
//   var products = [];

//   for (var i = 0; i < arr.length; i++) {
//     var product = 1;
//     for (var j = 0; j < arr.length; j++) {
//       if (j !== i) {
//         product = product * arr[j];
//       }
//     }
//     products.push(product);
//   }
//   return products;

// }

// Intermediate Step: Take the products before and after the index and multiple each other 
// function getProductsOfAllIntsExceptAtIndex(intArr) {
//   var productsOfAllIntsBeforeIndex = [];
//   var productsOfAllIntsAfterIndex = [];
//   var productsOfAllIntsExceptAtIndex = [];

//   var productBefore = 1;
//   var productAfter = 1;

//   for (var i = 0; i < intArr.length; i++) {
//     productsOfAllIntsBeforeIndex.push(productBefore);
//     productBefore = productBefore * intArr[i];

//   }

//   for (var j = intArr.length - 1; j >= 0; j--) {
//     productsOfAllIntsAfterIndex.unshift(productAfter);
//     productAfter = productAfter * intArr[j];

//   }

//   for (var k = 0; k < intArr.length; k++) {
//     productsOfAllIntsExceptAtIndex.push(productsOfAllIntsBeforeIndex[k] * productsOfAllIntsAfterIndex[k])
//   }

//   return productsOfAllIntsExceptAtIndex;

// }


/*/////////////////////////////////////////////////////
  Optimized O(n)
/////////////////////////////////////////////////////*/
function getProductsOfAllIntsExceptAtIndex(intArr) {

  var productsOfAllIntsExceptAtIndex = [];
  var productBefore = 1;
  var productAfter = 1;

  for (var i = 0; i < intArr.length; i++) {
    productsOfAllIntsExceptAtIndex.push(productBefore);
    productBefore *= intArr[i];
  }

  for (var j = intArr.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productAfter;
    productAfter *= intArr[j]; 
  }

  return productsOfAllIntsExceptAtIndex;

}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
// console.log(getProductsOfAllIntsExceptAtIndex([3, 1, 2, 5, 6, 4]));