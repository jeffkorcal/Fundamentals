/**
 * You have a grid of every letter in the alphabet that looks like this:
 *    a,b,c,d,e
 *    f,g,h,i,j
 *    k,l,m,n,o
 *    p,q,r,s,t
 *    u,v,w,x,y
 *    z
 * 
 * Given a string of letters contained in the grid, write an algorithm that
 * contains the directions (up, down, left, right) you would have to move in the
 * the given letter grid to create the input string (starting from the top-left).
 * 
 * Input: String of letters contained in the grid.
 * 
 * Output: A string of directions with the following characters:
 *   'u' - move up one space in the grid
 *   'd' - move down one space in the grid
 *   'r' - move right one space in the grid
 *   'd' - move down one space in the grid
 *   '!' - select the current letter in the grid
 *
 * Constraints: None
 * 
 * Examples:
 *   letterGrid('up') // 'dddd!u!'
 *   letterGrid('bs') // 'r!rrddd!'
 *
 */


const letterGrid = (str) => {

    const grid = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const alphabet = {};
    let x = 0, y = 0;
    let start = 'a';
    let result = '';

    for (let i = 0; i < grid.length; i++) {
      if (i % 5 === 0) {
        x = 0;
        y++;
      } else { 
        x++; 
      }

      if (i === 0) { 
        x = 0;
        y = 0;
       }

      alphabet[grid[i]] = { x, y }
    }

    for (let i = 0; i < str.length; i++) {
      let upDown = alphabet[start].y - alphabet[str[i]].y;
      let leftRight = alphabet[start].x - alphabet[str[i]].x;

      if (upDown < 0) {
        // if difference in y is pos its d
        result += addLetters('d', upDown);
      } else if (upDown > 0) {
        // if difference in y is neg its u
        result += addLetters('u', upDown);
      }

      if (leftRight < 0) {
        // if difference in x is pos its r
        result += addLetters('r', leftRight);
      } else if (leftRight > 0) {
        // if difference in x is pos its r
        result += addLetters('l', leftRight);
      }

      result += '!';

      start = str[i];
    }

    return result;
};

const addLetters = (letter, length) => {
  let str = '';
  length = Math.abs(length);

  for (let i = 0; i < length; i++) {
    str += letter;
  }
  return str;

} 

console.log(letterGrid('up')); // 'dddd!u!'
console.log(letterGrid('bs')); // 'r!rrddd!'
