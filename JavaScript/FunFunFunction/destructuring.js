let animal = {
  species: 'dog',
  weight: 23,
  sound: 'woof'
}

let { species, sound } = animal;

console.log(`The ${species} says ${sound}!`);


//ES5
function makeSound(options){
  options.species = options.species || 'animal';
  console.log('The ' + options.species +' says ' + options.sound +'!');  
}
makeSound({
  weight: 23,
  sound: 'woof'
});

//ES6
function makeSound({species ='animal', sound}){
  console.log(`The ${species} says ${sound}!`);  
}
makeSound({ weight: 23, sound: 'woof'});