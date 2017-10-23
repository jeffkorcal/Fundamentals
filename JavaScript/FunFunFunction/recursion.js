//ES5

// var categories = [
//   { id: 'animals', parent: null },
//   { id: 'mammals', parent: 'animals' },
//   { id: 'cats', parent: 'mammals' },
//   { id: 'dogs', parent: 'mammals' },
//   { id: 'chihuahua', parent: 'dogs' },
//   { id: 'labrador', parent: 'dogs' },
//   { id: 'persian', parent: 'cats' },
//   { id: 'siamese', parent: 'cats' }
// ];

// var makeTree = function(categories, parent) {
//   var node = {};

//   categories
//     .filter(function(c){ return c.parent === parent })
//     .forEach(function(c) { node[c.id] = makeTree(categories, c.id) });
  
//   return node;
// };

// console.log(
//   JSON.stringify(
//     makeTree(categories, null), 
//     null,
//     2
//   )
// )



//ES6

let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' }
]

let makeTree = (categories, parent ) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
  return node
}

console.log(
  JSON.stringify(
    makeTree(categories, null), 
    null,
    2
  )
)
