// Given a 2D array (matrix) named M, print all items of M in a spiral order, clockwise.
// For example:

// M  =  1   2   3   4   5
//        6   7   8   9  10
//       11  12  13  14  15
//       16  17  18  19  20

// The clockwise spiral print is:  1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12

// Hints & Tips
// Most of the work on this question is manipulating the indices. Make sure that your peer is not using negative or out of bounds indices at any point.

// Make sure that all indices are printed and that no index is printed twice.

// If your peer is stuck, ask what patterns and directions repeat on the spiral printing. If that doesn't help, ask what shape does the spiral matrix have (rectangular) and how can you create it.

// Any solution that involves changing the matrix is definitely not advised. There is no need to do that. If you peer gets there, try to ask them why.

// If there is time left, ask your peer to modify the solution to rely only on 2 indices instead of 4. This can be achieved by counting the amount of printed rows and the amount of printed columns from each side. The counter will increment after each 2 rows (top & bottom) or 2 columns (right & left) are printed.


function spiralMatrixPrint (matrix) {
  var topRow = 0;
  var btmRow = matrix.length-1;
  var leftCol = 0;
  var rightCol = matrix[0].length-1;

  while (topRow <= btmRow && leftCol <= rightCol) {
    
    for (let i = leftCol; i <= rightCol; i++) {
      console.log(matrix[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= btmRow; i++) {
      console.log(matrix[i][rightCol]);
    }
    rightCol--;

  if (topRow <= btmRow) {
    for (let i = rightCol; i >= leftCol; i--) {
      console.log(matrix[btmRow][i]);
    }
    btmRow--;
  }

  if (leftCol <= rightCol) {
    for (let i = btmRow; i >= topRow; i--) {
      console.log(matrix[i][leftCol]);
    }
    leftCol++;
  } else if (topRow) {
      
    }

  }
}



var matrix = [[1,   2,   3,   4,   5],
               [6,   7,   8,   9,  10],
              [11,  12,  13,  14,  15],
              [16,  17,  18,  19,  20]]


spiralMatrixPrint(matrix);


// Runtime Complexity: iterating over n∙m cells and printing them takes O(n∙m).

// Space Complexity: using a constant number of indices (4), therefore: O(1).
