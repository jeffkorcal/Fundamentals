// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
//e.g. 'waterbottle' is a rotation of 'erbottlewat'

const stringRotation = (s1, s2) => {
 if (s1.length !== s2.length || s1.length === 0) { return false; }

 let s2s2 = s2.concat(s2);

 return s2s2.includes(s1);

}

console.log(stringRotation('waterbottle', 'erbottlewat'));