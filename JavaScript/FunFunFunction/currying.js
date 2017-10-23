//Curring
let dragon = 
  name =>
    size =>
      element =>
        `${name} is a ${size} dragon that breathes ${element}!`

console.log(dragon('fluffykins')('tiny')('lightning'));

let fluffykinsDragon = dragon('fluffykins');
console.log(fluffykinsDragon('tiny')('lightning'));


//Curring using lodash
// import _ from 'lodash';

// let dragon = (name, size, element) => `${name} is a ${size} dragon that breathes ${element}!`;

// dragon = _.curry(dragon);

// console.log(dragon('fluffykins')('tiny')('lightning'));


//More Examples
let dragons = [
  {name: 'fluffykins', element: 'lightning'},
  {name: 'noami', element: 'lightning'},
  {name: 'karo', element: 'fire'},
  {name: 'doomer', element: 'timewarp'}
];

let hasElement = (element,obj) => obj.element === element;

let lightningDragons = dragons.filter(obj => hasElement('lightning', obj));

console.log(lightningDragons);

//With Curring
// import _ from 'lodash';
// let dragons = [
//   {name: 'fluffykins', element: 'lightning'},
//   {name: 'noami', element: 'lightning'},
//   {name: 'karo', element: 'fire'},
//   {name: 'doomer', element: 'timewarp'}
// ];

// let hasElement = (element,obj) => _.curry(obj.element === element);

// let lightningDragons = dragons.filter(hasElement('lightning'));

// console.log(lightningDragons);

