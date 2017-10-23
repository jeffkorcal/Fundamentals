// Object.create creates a new object assigns food as a prototype


const food = {
  init: function (type) {
    this.type = type;
  },
  eat: function () {
    console.log('you ate the ' + this.type);
  }
}

const waffle = Object.create(food);
const carrot = Object.create(food);

food.eat = function() {
  console.log('YOU TOOOTALLY ATE THE ' + this.type.toUpperCase());
}

waffle.init('waffle');
waffle.eat();

carrot.init('carrot');
carrot.eat();

console.log(food.isPrototypeOf(waffle));
console.log(food.isPrototypeOf(1213231));
console.log(food.isPrototypeOf(carrot));