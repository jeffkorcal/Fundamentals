/*
With a 6x6 matrix create the game of connect 4.
 */

class connectFour {

  constructor() {
    this.board = [];
  }

  initBoard() {
    for (let row = 0; row < 6; row++) {
      this.board[row] = []; 
      for (let col = 0; col < 6; col++) {
        this.board[row][col] = 0;
      }
    }
  }

  play(col, piece) {

    for(let row = 0; row < this.board.length; row++) {

      if (this.board[row][col] !== 0) {
        return;
      } else if (row === 5 || this.board[row + 1][col] !== 0) {
        this.board[row][col] = piece;
        return;
      }
    }
  }

  checkVertical() {

    for (let col = 0; col < this.board.length; col++) {
      let checker = { piece: 0, count: 0 };

      for (let row = this.board.length - 1; row >= 0; row--) {

        if (this.board[row][col] !== 0) {
          if (checker.piece === this.board[row][col]) {
            checker.count++;
            if (checker.count === 4) {
              return checker.piece;
            }
          } else {
            checker.piece = this.board[row][col];
            checker.count = 1;
          }
        }
      }
    }
    return null;
  }

  checkHorizontal() {

    for (let row = this.board.length - 1; row >= 0; row--) {
      let checker = { piece: 0, count: 0 };

      for (let col = 0; col < this.board.length; col++) {  

        if (this.board[row][col] !== 0) {
          if (checker.piece === this.board[row][col]) {
            checker.count++;
            if (checker.count === 4) {
              return checker.piece;
            }
          } else {
            checker.piece = this.board[row][col];
            checker.count = 1;
          }
        }
      }
    }
    return null;
  }

  checkDiagonalFromLeft() {
    let mid = this.board.length / 2;
    let bottom = this.board.length - 1;

    for (let col = 0; col < mid; col++) {
      let checker = { piece: 0, count: 0 };
      for (let x = bottom, y = col; x >= 0 && y < this.board.length; x--, y++) {
        if (this.board[x][y] !== 0) {
          if (checker.piece === this.board[x][y]) {
            checker.count++;
            if (checker.count === 4) {
              return checker.piece;
            }
          } else {
            checker.piece = this.board[x][y];
            checker.count = 1;
          }
        }
      }
    }

    for (let row = bottom; row >= mid; row--) {
      let checker = { piece: 0, count: 0 };
      for (let x = row, y = 0; x >= 0 && y < this.board.length; x--, y++) {
        if (this.board[x][y] !== 0) {
          if (checker.piece === this.board[x][y]) {
            checker.count++;
            if (checker.count === 4) {
              return checker.piece;
            }
          } else {
            checker.piece = this.board[x][y];
            checker.count = 1;
          }
        }
      }
    }  
    return null;
  }

  checkDiagonalFromRight() {

    let mid = this.board.length / 2;
    let bottom = this.board.length - 1;

    for (let col = bottom; col >= mid; col--) {
      let checker = { piece: 0, count: 0 };
      for (let x = bottom, y = col; x >= 0 && y >= 0; x--, y--) {
        if (this.board[x][y] !== 0) {
          if (checker.piece === this.board[x][y]) {
            checker.count++;
            if (checker.count === 4) {
              return checker.piece;
            }
          } else {
            checker.piece = this.board[x][y];
            checker.count = 1;
          }
        }
      }
    }

    for (let row = bottom; row >= mid; row--) {
      let checker = { piece: 0, count: 0 };
      for (let x = row, y = bottom; x >= 0 && y >= 0; x--, y--) {
        console.log(x,y);
        if (this.board[x][y] !== 0) {
          if (checker.piece === this.board[x][y]) {
            checker.count++;
            if (checker.count === 4) {
              return checker.piece;
            }
          } else {
            checker.piece = this.board[x][y];
            checker.count = 1;
          }
        }
      }
    }  
    return null;
  }

  checkAll() {
    return this.checkHorizontal() || this.checkVertical() || this.checkDiagonalFromLeft() || this.checkDiagonalFromRight();
  }

}



let game = new connectFour();
game.initBoard();
game.play(1, 1);
game.play(2, 1);
game.play(3, 1);
game.play(0, 2);
game.play(1, 2);
game.play(2, 2);
game.play(2, 2);
game.play(3, 2);
game.play(3, 2);
game.play(3, 2);
console.log(game);
console.log(game.checkAll());