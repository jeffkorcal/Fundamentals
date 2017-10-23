// Stacks
//A stack is a list of elements that are accessible only from one end of the list, which is called the top.
//Stacks are efficient data structures because data can be added or removed only from the top of a stack, making these prcedures fast and easy to implement.
//The stack is known as a last-in, first-out (LIFO) data structure. Becauase of the last-in, first-out nature of the stack, any elmeent that is not currently at the top of the stack cannot be accessed. To get to an element at the bottom of the stack, you have to dispose of all the elements above it first.
//Example: Cafeteria Trays

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element; //The increment operator is after the call to this.top to insure that the current value of top is used to place the new element
}

function peek() {
  return this.dataStore[this.top-1];
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

let s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");

//test length
console.log("Length: " + s.length());

//test peek
console.log("Peek: " + s.peek());

//test pop
let popped = s.pop();
console.log("Popped: " + popped);
console.log("Peek: " + s.peek());

//test push
s.push("Cynthia");
console.log("Pushed: " + s.peek());

//test clear
s.clear()
console.log("Length: " + s.length());
console.log("Peek: " + s.peek());
s.push("Clayton");
console.log("Pushed: " + s.peek());


//Multiple Base Conversions
function mulBase(num,base) {
  let s = new Stack();
  
  do {
    s.push(num%base);
    num = Math.floor(num/=base);
  } while (num > 0);
  
  let converted = "";

  while(s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

let num1 = 32;
let base1 = 2;
let newNum1 = mulBase(num1,base1);
console.log(`${num1} converted to base ${base1} is ${newNum1}`);

let num2 = 125;
let base2 = 8;
let newNum2 = mulBase(num2,base2);
console.log(`${num2} converted to base ${base2} is ${newNum2}`);


//Palindromes
function isPalindrome(word) {
  let s = new Stack();
  for(let i = 0; i < word.length; ++i){
    s.push(word[i]);
  }

  let rword = "";

  while(s.length() > 0) {
    rword += s.pop();
  }

  if(word === rword) return true;
  else return false;
}

let word1 = "hello";
let word2 = "racecar";

console.log(`${word1} is ${isPalindrome(word1)}`);
console.log(`${word2} is ${isPalindrome(word2)}`);


//Demonstrating Recursion
//Stacks are often used in the implementation of computer programming languages. ONe area where stacks are used is in implementing recursion. 

function factorial(n) {
  if (n===0) return 1;
  else return n * factorial(n-1);
}

function fact(n) {
  let s = new Stack();

  while(n > 1) {
    s.push(n--);
  }

  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

console.log(factorial(5));
console.log(fact(5));


//Pez Dispenser
let pez = ["red","yellow","white","yellow","red","white","yellow"];


function pezRemover (arr,color) {
 
  let s = new Stack();
  let newS = new Stack();

  for(let i = 0; i < arr.length; i++){
    s.push(arr[i]);
  }

  while(s.length() > 0) {
    if (s.peek() !== color) newS.push(s.pop());
    else s.pop();
  }

  return newS.dataStore;
  
}
console.log(pezRemover(pez,"yellow"));