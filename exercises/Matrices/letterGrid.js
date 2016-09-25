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


// alphabet array [a - z]

var letterGrid = function(str) {

    var grid = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var alphabet = {};
    var x = 0, y = 0;
    var start = 'a', next = '';

    for (var i = 0; i < grid.length; i++) {
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

    for (var i = 0; i < str.length; i++) {

      next = str[i];

      console.log(alphabet[start]);
      console.log(alphabet[next]);
    }

  // iterating over the string and compare values
    // if difference in x is pos its r
    // if difference in x is neg its l
    // if difference in y is pos its d
    // if difference in y is neg its u
    // include a ! 

};

letterGrid('up');
