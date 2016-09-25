function find (str,arr) {
  return arr.indexOf(str) !== -1 ? true : false;
}



console.log(find("hello", ["bye bye","hello"])); // return true
console.log(find("anything", ["bye bye","hello"])); // return false