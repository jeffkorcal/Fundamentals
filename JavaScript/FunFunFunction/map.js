let animals = [
  { name: 'Fluffykins', species: 'rabbit'},
  { name: 'Caro', species: 'dog'},
  { name: 'Hamilton', species: 'dog'},
  { name: 'Harold', species: 'fish'},
  { name: 'Ursula', species: 'cat'},
  { name: 'Jimmy', species: 'fish'},
];

let names = animals.map( animal => animal.name );
let namesAndSpecies = animals.map( animal => `${animal.name} is a ${animal.species}`);
console.log(names);
console.log(namesAndSpecies);