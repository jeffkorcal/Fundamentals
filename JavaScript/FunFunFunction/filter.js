let animals = [
  { name: 'Fluffykins', species: 'rabbit'},
  { name: 'Caro', species: 'dog'},
  { name: 'Hamilton', species: 'dog'},
  { name: 'Harold', species: 'fish'},
  { name: 'Ursula', species: 'cat'},
  { name: 'Jimmy', species: 'fish'},
];

//ES5
// let dogs = animals.filter(function(animal){return animal.species === 'dog';});


//ES6
let dogs = animals.filter(animal => animal.species === 'dog');
console.log(dogs);