// Hashing
//Hashing is a common technique for storing data in such a way that the data can be inserted and retrieved very quickly. Hashing uses a data structure called a hash table. Although has tables provide fast insertion, deletion, and retrieval, they perform poorly for operations that involve searching, such as finding the minimum and maximum values in a data set. For these operations, other data structures such as the binary search tree are more appropriate.
//To store a piece of data in a hash table, the key is mapped into a number in the range of 0 through the hash table size, using a hash function. The realistic goal of the hash function is to attempt to distribute the keys as evenly as possible amoung the elements of the array. The choice of a hash function depends on the data type of the key.
//Even with an efficient hash function, it is possible for two keys to hash the same value. This is called a collision, and we need a strategy for handling collisions when they occur.
//The last thing we have to determine when creating a hash function is how large an array to create for the hash table. One constraint usually placed on the array size is that it should be a prime number.

//We need a class to represent the hash table. The class will include functions for com‐ puting hash values, a function for inserting data into the hash table, a function for retrieving data from the hash table, and a function for displaying the distribution of data in the hash table, as well as various utility functions we might need.

//The simpleHash() function computes a hash value by summing the ASCII value of each name using the JavaScript function charCodeAt() to return a character’s ASCII value. The put() function receives the array index value from the simpleHash() function and stores the data element in that position. The showDistro() function displays where the names are actually placed into the array using the hash function.

//To avoid collisions, you first need to make sure the array you are using for the hash table is sized to a prime number. This is necessary due to the use of modular arithmetic in computing the key. The size of the array needs to be greater than 100 in order to more evenly disperse the keys in the table.

function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.put2 = put2;
  this.get = get;
}

function put(data) {
  let pos = this.simpleHash(data);
  this.table[pos] = data;
}

function put2(data) {
  let pos = this.betterHash(data);
  this.table[pos] = data;
}

function get(key) {
return this.table[this.betterHash(key)];
}

function simpleHash(data) {
  let total = 0;
  for(let i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function betterHash(string) {
  const H = 37;
  let total = 0;
  for (let i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
   }
  total = total % this.table.length; 
  if(total < 0){
    total += this.table.length-1; 
  }
  return parseInt(total); 
}

function showDistro() {
  let n = 0;
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i] !== undefined) {
      console.log(i + " : " + this.table[i]);
    }
  }
}

let someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];

let hTable = new HashTable();
for (let i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
console.log("Simple Hash:");
hTable.showDistro();

console.log("");

console.log("Better Hash is not quite working:");
let hTable2 = new HashTable();
for (let i = 0; i < someNames.length; ++i) {
  hTable2.put2(someNames[i]);
}
hTable2.showDistro();



////Hashing Integers Not quite working due to betterhash
// function getRandomInt (min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function genStuData(arr) {
// for (var i = 0; i < arr.length; ++i) {
// var num = ""; for(var j=1;j<=9;++j){
//          num += Math.floor(Math.random() * 10);
//       }
//       num += getRandomInt(50,100);
//       arr[i] = num;
//    }
// }

// var numStudents = 10;
// var arrSize = 97; 
// var idLen = 9;
// var students = new Array(numStudents);
// genStuData(students);
// console.log("\nStudent data:");
// for (var i = 0; i < students.length; ++i) {
//    console.log(students[i].substring(0,8) + " " +
//          students[i].substring(9));
// }
// console.log("\nData distribution:");
// var hTable3 = new HashTable();
// for (var i = 0; i < students.length; ++i) {
//    hTable3.put2(students[i]);
// }
// hTable3.showDistro();