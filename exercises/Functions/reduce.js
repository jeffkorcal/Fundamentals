function reduce (collection,cb,acc) {
  let init = false;
  if (acc === undefined) init = true;

  collection.forEach(item => {

    if(init){
      acc = item;
      init = false;
    } else {
      acc = cb(acc,item);
    }

  });

  return acc;
}

console.log( [1,2,3].reduce( function(sum, next){return sum+next}, 0) );
// => 6

console.log( ['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {}) );
// => {'a':2, 'b':1}
