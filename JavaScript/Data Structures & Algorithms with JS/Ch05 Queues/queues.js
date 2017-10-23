// Queues
//A queue is a type of list where data are inserted at the end and are removed fro the front. 
//Queues are used to store data in the order in which they occur, as opposed to a stack, in which the last piece of data entered is the first element used for processing.
//A que is an example of first-in, first-out (FIFO) data structure.
//Example: line at a bank

function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length-1];
}

function toString() {
  let retStr = "";
  for (let i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
}

function count() {
  return this.dataStore.length;
}

// Example
let q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());

q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());


//Example: Assignig Partners at a Square Dance
//Split the queue in to two male and female then partner them up

let dancers = ['F Allison', 'M Frank', 'M Mason', 'M Clayton', 'F Cheryl', 'M Raymond', 'F Jennifer', 'M Brian', 'M David', 'M Danny', 'F Aurora'];

function Dancer(name,sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(dancers, males, females) {
  for(let i = 0; i < dancers.length; ++i) {
    let dancer = dancers[i].split(" ");
    let sex = dancer[0];
    let name = dancer[1];

    if(sex === "F") femaleDancers.enqueue(new Dancer(name, sex));
    else maleDancers.enqueue(new Dancer(name, sex));
  }
}

function dance(males,females) {
  console.log('The dance partners are: \n');
  while(!females.empty() && !males.empty()) {
    let femaleDancer = females.dequeue();
    let maleDancer = males.dequeue();

    console.log(`The female dancer is ${femaleDancer.name} and the male dancer is ${maleDancer.name}`);
  }
};

let maleDancers = new Queue();
let femaleDancers = new Queue();
getDancers(dancers,maleDancers,femaleDancers);
dance(maleDancers,femaleDancers);

if(!maleDancers.empty()){
  console.log(`${maleDancers.front().name} is waiting to dance.`);
}
if(!femaleDancers.empty()){
  console.log(`${femaleDancers.front().name} is waiting to dance.`);
} 

if(maleDancers.count() > 0){
  console.log(`There are ${maleDancers.count()} male dancers waiting to dance.`);
}
if(femaleDancers.count() > 0){
  console.log(`There are ${femaleDancers.count()} male dancers waiting to dance.`);
}


//Sorting Data with Queues: Radix Sort

function distribute(nums, queues, n, digit) {
  for (let i = 0; i < n; ++i){
    if(digit === 1) {
      console.log(nums[i]%10);
      queues[nums[i]%10].enqueue(nums[i]);
    } else {
      console.log(Math.floor(nums[i]/10));
      queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
    }
  }
}

function collect(queues, nums) {
  let i = 0;
  for (let digit = 0; digit < 10; ++digit) {
    while(!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr) {
  for(let i = 0; i < arr.length; ++i) {
    console.log(arr[i] + ' ');
  }
}

// Main Script
let queues = [];
for(let i = 0; i < 10; ++i){
  queues[i] = new Queue();
}
let nums = [];
for(let i = 0; i < 10; ++i){
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

console.log("Before radix sort: ");
dispArray(nums);

distribute(nums,queues,10,1);
collect(queues,nums);
distribute(nums,queues,10,10);
collect(queues,nums);

console.log("After radix sort: ");
dispArray(nums);


//Priority Queue
function Patient(name, code) {
  this.name = name;
  this.code = code;
}

function dequeueP() {
  let priority = this.dataStore[0].code;
  for(let i = 1; i < this.dataStore.length; ++i){
    if(this.dataStore[i].code < priority) priority = i;
  }
  return this.dataStore.splice(priority,1);
} 