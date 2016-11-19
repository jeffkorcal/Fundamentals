/*
+===+===+===+===+===+===+===+===+===+
|   :   :   |   :   :   |   :   :   |
+---+---+---+---+---+---+---+---+---+
|   : 1 : 2 |   :   :   |   :   :   |
+---+---+---+---+---+---+---+---+---+
|   :   :   |   : 3 :   |   :   :   |
+===+===+===X===+===+===X===+===+===+
|   :   :   |   :   :   |   :   :   |
+---+---+---+---+---+---+---+---+---+
|   :   :   |   :   :   |   :   :   |
+---+---+---+---+---+---+---+---+---+
|   :   :   |   :   :   |   :   :   |
+===+===+===X===+===+===X===+===+===+
|   :   :   |   :   :   |   :   :   |
+---+---+---+---+---+---+---+---+---+
|   :   :   |   :   :   |   :   :   |
+---+---+---+---+---+---+---+---+---+
|   :   :   |   :   :   |   :   :   |
+===+===+===+===+===+===+===+===+===+
Use numbers 1-9
No columns have duplicates
No rows
No "cells"
*/

// Input: board
// Output: true or false
// horizontal, vertical, and within 3 x 3 false

let matrix = [ 
[0,0,0,0,0,0,0,0,0],
[0,1,2,0,0,0,0,0,0],
[0,0,0,0,3,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0] 
];

//matrix[0][0] - matrix[2][2]
//matrix[0][3] - matrix[2][6]
//matrix[0][6] - matrix[2][8]

//matrix[3][0] - matrix[5][2]
//matrix[3][3] - matrix[5][6]
//matrix[3][6] - matrix[5][8]

//matrix[6][0] - matrix[8][2]
//matrix[6][3] - matrix[8][6]
//matrix[6][6] - matrix[8][8]

const horizontalCheck = (matrix) => {
    
  for (let i = 0; i < matrix.length; i++) {
    let check = {};

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        check[matrix[i][j]] ? check[matrix[i][j]]++ : check[matrix[i][j]] = 1;
      }
    }
    for (let key in check) {
      if (check[key] > 1) {
        return false;
      }
    }
  }
  return true;

};

const verticalCheck = (matrix) => {
    
  for (let i = 0; i < matrix.length; i++) {
    let check = {};

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] > 0) {
        check[matrix[j][i]] ? check[matrix[j][i]]++ : check[matrix[j][i]] = 1;
      }
    }
    for (let key in check) {
      if (check[key] > 1) {
        return false;
      }
    }
  }
  return true;

};

const thirdCheck = (matrix) => {

  for (let i = 0; i < matrix.length; i+=3) {
    for (let j = 0; j < matrix[i].length; j+=3) {
      let check = {};

      for (let x = i; x < i + 3; x++) {
        for(let y = j; y < j + 3; y++) {
          if (matrix[x][y] > 0) {
            check[matrix[x][y]] ? check[matrix[x][y]]++ : check[matrix[x][y]] = 1;
          }
        }
      }

      for (let key in check) {
        if (check[key] > 1) {
          return false;
        }
      }
    }
  }
  return true;
}

const checkAll = (matrix) => {

  return horizontalCheck(matrix) && verticalCheck(matrix) && thirdCheck(matrix);

}
console.log(checkAll(matrix));



//Ryan Solution

function isSudokuValid(board) {
  return areColsValid(board) &&
         areRowsValid(board) &&
         areSquaresValid(board);
}

function areColsValid(board) {
  for (var col = 0; col < board.length; col++) {
    var set = new Set();
    
    for (var row = 0; row < board[0].length; row++) {
      set.insert(board[row][col]);
    }
    
    if (set.hasDuplicates()) {
      return false;
    }
  }
  
  return true;
}

function areRowsValid(board) {
  for (var row = 0; row < board.length; row++) {
    var set = new Set();
    
    for (var col = 0; col < board[0].length; col++) {
      set.insert(board[row][col]);
    }
    
    if (set.hasDuplicates()) {
      return false;
    }
  }
  
  return true;
}

function areSquaresValid(board) {
  var SQUARE_SIZE = 3;
  
  for (var row = 0; row < board.length; row += SQUARE_SIZE) {
    for (var col = 0; col < board[0].length; col += SQUARE_SIZE) {
      if (!isSquareWithCoordValid(board, row, col)) {
        return false;
      }
    }
  }
  
  return true;
}

function isSquareWithCoordValid(board, row, col) {
  var SQUARE_SIZE = 3;
  var set = new Set();
  
  for (var r = row; r < row + SQUARE_SIZE; r++) {
    for (var c = col; c < col + SQUARE_SIZE; c++) {
      set.insert(board[r][c]);
    }
  }
  
  return !set.hasDuplicates();
}


function Set() {
  this.members = {};
  this.hasDuplicates = false;
}

Set.prototype.insert = function(value) {
  if (value !== null) {
    if (this.members[value]) {
      this.hasDuplicates = true;
    }
    this.members[value] = true;
  }
};

Set.prototype.hasDuplicates = function(value) {
  return this.hasDuplicates;
};

    