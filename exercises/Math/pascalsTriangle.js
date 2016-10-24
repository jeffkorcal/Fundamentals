// pascal triangle

'use strict';

function createPascalTriangle (numRows) {
  let pascalTriangle = [];
  
  for (let i = 0; i < numRows; i++) { 
    pascalTriangle[i] = [i+1];
    
    for (let j = 0; j <= i; j++) {            
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
    }
  }
  
  return pascalTriangle;
}

function pascal (numRows) {
  let rows = [[1]];

  for (let i = 1; i < numRows; i++) {
    let values = [1];
    let prev = rows[i - 1];

    for (let j = 1; j < i; j++) {
      values.push(prev[j-1] + prev[j]);
    }

    values.push(1);
    rows.push(values);
  }
  return rows;
}

console.log(createPascalTriangle(6));
console.log(pascal(6));