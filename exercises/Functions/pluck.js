function pluck (array,prop){
  return array.map(obj => obj[prop]);
}

console.log(pluck([{a:1}, {a:2}], 'a')); // -> [1,2]