/* 
Boggle
Given an NxN grid of characters and a dictionary, find all words which can be made from the characters in grid and present in the given dictionary. A word can start and end at any character in the grid. Next character must be adjacent to previous character in any of the directions i.e. up, down, left, right and diagonal. Character at each position in grid can be used only once while making a word.

Description
Suppose we have a 3x3 grid and a dictionary as input. Six words can be made from the grid which are present in the dictionary. Green highlighted characters indicate that they form the word 'eat' in grid which is also present in the dictionary. In grid we start at character 'E', then move to upper diagonal for 'A' and then right to 'T' to make 'EAT'.
*/

const board = [
  ['c', 'a', 't'],
  ['r', 'r', 'e'],
  ['t', 'o', 'n'],
];

const dictionary = ['cat', 'cater', 'art', 'toon', 'moon', 'not', 'eat', 'ton'];

const inBounds = (coordinates, colLength, rowLength) => {
  let col = coordinates[0];
  let row = coordinates[1];

  if (col < 0 || col > colLength) {
    return false;
  }

  if (row < 0 || row > rowLength) {
    return false;
  }

  return true;
}

const boogleEachWord = (matrix, word, col = 0, row = 0) => {

  let colLength = matrix.length -1;
  let rowLength = matrix[0].length - 1;
  let letter = matrix[col][row];
  let left = [col, row - 1];
  let right = [col, row + 1];
  let up = [col - 1, row];
  let down = [col + 1, row];
  let upperLeft  = [col - 1, row - 1];
  let upperRight = [col - 1, row + 1];
  let lowerLeft = [col + 1, row - 1];
  let lowerRight = [col + 1, row + 1];
  let result = false;

  if (word[0] === letter) {
    word = word.slice(1);
  }
  
  if (word.length === 0) {
    return true;
  }

  // if (inBounds(left, colLength, rowLength)) {
  //   return boogleEachWord(matrix, word, left[0], left[1]);
  // }
  if (inBounds(right, colLength, rowLength)) {
    console.log('word', word);
    console.log('col', right[0]);
    console.log('row', right[1]);
    result = result || boogleEachWord(matrix, word, right[0], right[1]);
  }
  // if (inBounds(up, colLength, rowLength)) {
  //   return boogleEachWord(matrix, word, up[0], up[1]);
  // }
  if (inBounds(down, colLength, rowLength)) {
    result = result || boogleEachWord(matrix, word, down[0], down[1]);
  }
  // if (inBounds(upperLeft, colLength, rowLength)) {
  //   return boogleEachWord(matrix, word, upperLeft[0], upperLeft[1]);
  // }
  // if (inBounds(upperRight, colLength, rowLength)) {
  //   return boogleEachWord(matrix, word, upperRight[0], upperRight[1]);
  // }
  // if (inBounds(lowerLeft, colLength, rowLength)) {
  //   return boogleEachWord(matrix, word, lowerLeft[0], lowerLeft[1]);
  // }
  // if (inBounds(lowerRight, colLength, rowLength)) {
  //   return boogleEachWord(matrix, word, lowerRight[0], lowerRight[1]);
  // }

  console.log(result);
  return result;
}

const boggle = (matrix, dict) => {
  
  const results = [];
  
  dict.forEach(word => {
    if (boogleEachWord(matrix, word)) {
      results.push(word)
    }
  })

  return results;
};

console.log(boggle(board, ['cat', 'crt'])); // ['not', 'cat', 'art', 'cater', 'ton', 'eat']









const board = [
  ['c', 'a', 't'],
  ['r', 'r', 'e'],
  ['t', 'o', 'n'],
];

const dictionary = ['cat', 'cater', 'art', 'toon', 'moon', 'not', 'eat', 'ton'];

const getWords = (matrix, dict, row = 0, col = 0, visited = new Set(), str = '', result = []) => {
  str += matrix[row][col];
  dict = new Set(dict);
  
  if (dict.includes(str) && !result.includes(str)) {
    result.push(str);
  }
  visited.add(`${row} ${col}`);
  
  // console.log(str, visited);
  
  // Up
  if (matrix[row - 1] && !visited.has(`${row - 1} ${col}`)) {
    getWords(matrix, dict, row - 1, col, visited, str, result);
  }
      
  // Up right
  if (matrix[row - 1] && matrix[row - 1][col + 1] && !visited.has(`${row - 1} ${col + 1}`)) {
    getWords(matrix, dict, row - 1, col + 1, visited, str, result);
  }
          
  // Right
  if (matrix[row][col + 1] && !visited.has(`${row} ${col + 1}`)) {
    getWords(matrix, dict, row, col + 1, visited, str, result);
  }
        
  // Down right
  if (matrix[row + 1] && matrix[row + 1][col + 1] && !visited.has(`${row + 1} ${col + 1}`)) {
    getWords(matrix, dict, row + 1, col + 1, visited, str, result);
  }
        
  // Down
  if (matrix[row + 1] && matrix[row + 1][col] && !visited.has(`${row + 1} ${col}`)) {
    getWords(matrix, dict, row + 1, col, visited, str, result);
  }
        
  // Down left
  if (matrix[row + 1] && matrix[row + 1][col - 1] && !visited.has(`${row + 1} ${col - 1}`)) {
    getWords(matrix, dict, row + 1, col - 1, visited, str, result);
  }
        
  // Left
  if (matrix[row][col - 1] && !visited.has(`${row} ${col - 1}`)) {
    getWords(matrix, dict, row, col - 1, visited, str, result);
  }
        
  // Up left
  if (matrix[row - 1] && matrix[row - 1][col - 1] && !visited.has(`${row - 1} ${col - 1}`)) {
    getWords(matrix, dict, row - 1, col - 1, visited, str, result);
  }
  
  visited.delete(`${row} ${col}`);
  return result;
};

// getWords(board, dictionary, 1, 2);

const boggle = (matrix, dict) => {
  let result = [];
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      result = result.concat(getWords(matrix, dict, r, c));
    }
  }
  
  return result;
};

boggle(board, dictionary); // ['not', 'cat', 'art', 'cater', 'ton', 'eat']
