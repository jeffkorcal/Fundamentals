//arrow function are great at shortening the syntax

const dragonEvents = [
  { type:'attack', value: 12, target:'player-dorkman'},
  { type:'yawn', value: 40},
  { type:'eat', target:'horse'},
  { type:'attack', value: 23, target:'player-fluffykins'},
  { type:'attack', value: 12, target:'player-dorkman'},
];

const totalDamageOnDorkman = dragonEvents
  .filter(e => e.type === 'attack')
  .filter(e => e.target === 'player-dorkman')
  .map(e => e.value)
  .reduce((all,value) => (all || 0) + value)

//console.log('Total Damage on Dorkman:', totalDamageOnDorkman);



//Arrow Function & This being bound to the lexical scope


//'this' will not work in this case because an new scope is created with an anonymous function
var person = {
  first: 'Doug',
  action: ['bike', 'hike', 'ski', 'surf'],
  printActions: function (){
    this.action.forEach(function(action){
      var str = this.first + 'like to ' + action;  
      console.log(str);
     });
  }
}
//person.printActions();


//to prevent this you can create a variable with 'this' in the outer function and assign it
var person2 = {
  first: 'Doug',
  action: ['bike', 'hike', 'ski', 'surf'],
  printActions: function (){
    var _this = this;
    this.action.forEach(function(action){
      var str = _this.first + 'like to ' + action;  
      console.log(str);
     });
  }
}
//person2.printActions();


//the second way to prevent this is to use bind on the anonymous function
var person3 = {
  first: 'Doug',
  action: ['bike', 'hike', 'ski', 'surf'],
  printActions: function (){
    this.action.forEach(function(action){
      var str = this.first + 'like to ' + action;  
      console.log(str);
     }.bind(this));
  }
}
//person3.printActions();


//you can now use arrow function to adjust the 'this' boundaries to the lexical scope
let person4 = {
  first: 'Doug',
  action: ['bike', 'hike', 'ski', 'surf'],
  printActions() {
    this.action.forEach( action => {
      let str = `${this.first} like to ${action}`;  
      console.log(str);
     });
  }
}
//person4.printActions();


//however it will not work if you try to call it within another function because the 'this' keyword is going to be bound to the global object in this case
function call(cb){
  cb();
}
call(person4.printActions.bind(person4));


//rest parameters with the spread operator or call and apply will be used if argument are passed into the function