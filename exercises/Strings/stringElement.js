/*
Having a partial periodic table create brackets around the word that includes the specific characters.
 */

const elements = {
  H: '[H]',
  O: '[O]',
  BR: '[Br]',
  AG: '[Ag]'
}

const stringElement = (word, elements) => {

  for (let i = 0; i < word.length - 1; i++) {
    let chars = (word[i] + word[i + 1]).toUpperCase();

    if (elements[chars]) {
      let left = word.slice(0, i);
      let right = word.slice(i+2);
      return left + elements[chars] + right;
    } 
  }

  for (let i = 0; i < word.length; i++) { 
    let char = (word[i]).toUpperCase();

    if (elements[char]) {
      let left = word.slice(0, i);
      let right = word.slice(i+1);
      return left + elements[char] + right;
    }
  }

  return null;

};

module.exports = stringElement; 