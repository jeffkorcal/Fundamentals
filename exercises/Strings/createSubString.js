/* Given a string “magazine” and a string “note”, return true if the note can be constructed with letters from the magazine. Otherwise return false.

magazine
| 

{
  n: 1
  o: 0
  t: 0
  e: 0
}

*/

function validateSubStrCreation (str, sub) {

  const subObj = {};

  // map all letters into an obj
  for (let i = 0; i < sub.length; i++) {
    const letter = sub[i];
    if (subObj[letter]) {
      subObj[letter] += 1;
    } else {
      subObj[letter] = 1;
    }
  }

  // for loop over str to check if
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (subObj[letter]) {
      subObj[letter] -= 1;
    }
  }

  for (key in subObj) {
    if (subObj[key] !== 0) {
      return false;
    }
  }

  return true;

}

console.log(validateSubStrCreation('magazine', 'note'));
console.log(validateSubStrCreation('magazine', 'gaze'));
