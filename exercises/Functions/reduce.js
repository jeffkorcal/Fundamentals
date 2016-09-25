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


function reduce (collection,cb,acc) {
  collection.forEach(item => {
    if(acc === undefined) acc = item;
    else acc = cb(acc,item);
  });
  return acc;
}


function reduce (collection, process, initial) {
  collection.forEach(function (x) {
    initial = typeof initial == 'undefined' ? x : process.call(this, initial, x);
  });
  return initial;
}


console.log( [1,2,3].reduce( function(sum, next){return sum+next}, 0) );
// => 6

console.log( ['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {}) );
// => {'a':2, 'b':1}