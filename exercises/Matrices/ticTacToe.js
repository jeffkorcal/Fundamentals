// Implement Tic Tac Toe

function TicTacToe () {

  const board = [];
  const playerOne = "O";
  const playerTwo = "X";
  let currentPlayer = null;

  const initBoard = () => {

    for (let i = 0; i < 3; i++) {
      board[i] = [];
      for(let j = 0; j < 3; j++) {
        board[i][j] = null;
      }
    }
    
    currentPlayer = playerOne;
  }

  const getBoard = () => {
    return board;
  }

  const play = (i, j) => {
    if (board[i][j] === null) {
      board[i][j] = currentPlayer;
      currentPlayer = (currentPlayer === playerOne) ? playerTwo : playerOne;
    }
 
    let result = checkAll();

    if (result === playerOne) {
      console.log('Player 1 Wins');
    } else if (result === playerTwo) {
      console.log('Player 2 Wins');
    } else if (result === "Draw") {
      console.log("Draw");
    }
  }

  const checkVertical = () => {
    for(let j = 0; j < 3; j++) {
      if (board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
        return board[0][j];
      }
    }
    return null;
  }

  const checkHorizontal = () => {
    for(let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return board[i][0];
      }
    }
    return null;
  }

  const checkDiagonalLeft = () => {
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0];
    }
    return null;
  }

  const checkDiagonalRight = () => {
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2];
    }
    return null;
  }

  const checkDraw = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
          return null;
        }
      }
    }
    return "Draw";
  }

  const checkAll = () => {
    return checkVertical() || checkHorizontal() || checkDiagonalLeft() || checkDiagonalRight() || checkDraw();
  }

  return { initBoard, play };
};

const game = TicTacToe();
game.initBoard();
game.play(0,2);
game.play(0,0);
game.play(0,1);
game.play(1,0);
game.play(1,2);
game.play(1,1);
game.play(2,0);
game.play(2,1);
game.play(2,2);