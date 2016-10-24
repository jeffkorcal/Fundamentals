// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.

const createMatrix = (n) => {
  const matrix = [];
  let num = 0;

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      num++;
      matrix[i][j] = num;
    }
  }
  return matrix;
}

const rotateMatrix = (matrix) => {
  const mx = [];
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    mx[i] = [];
    for (let j = 0; j < n; j++) {
      mx[i][j] = matrix[n - 1 - j][i];
    }
  }

  return mx;
}

console.log(rotateMatrix(createMatrix(4)));