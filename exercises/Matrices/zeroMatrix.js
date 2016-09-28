// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

const createMatrix = (m, n) => {
  const matrix = [];

  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      let num = Math.floor(Math.random()*10);
      matrix[i][j] = num;
    }
  }
  console.log(matrix);
  return matrix;
}

const zeroMatrix = (matrix) => {
  const rows = {};
  const cols = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
       rows[i] = i;
       cols[j] = j;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows[i] === 0 || cols[j] === 0 || rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;

}

console.log(zeroMatrix(createMatrix(4,5)));