// Class
class Dog {
  constructor(){
    this.sound = 'woof'
  }
  talk(){
    console.log(this.sound);
  }
}
let sniffles = new Dog();
sniffles.talk();

function print(cb){
  cb();
};

// print(sniffles.talk); When you pass in sniffles the this in the talk function is going to be bound to the global object therefore this will not work i.e. when using classes you have to be careful on how to use this.
print(sniffles.talk.bind(sniffles));
print( _ => sniffles.talk());


// Factory
const dog2 = () => {
  const sound = 'woof2';
  return { talk: () => console.log(sound) }
}
const sniffles2 = dog2();

// Factory's uses closure so it does not use the this key word so there is no problem just passing it in 
print(sniffles2.talk);

// This Binding
//Arrow functions bind the scope of the this keyword to the lexcial scope.
//so if you call a function within a method or a prototype of a particular class the this will bind properly
//however, if you use an instance of the class inside of a function outside the scope of the class it will break.