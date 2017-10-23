// Dictionary
//A dictonary is a data structure that stores data as key-value pairs. The key is the element you use to perform a search, and the value is the result of the search.
//The JavaScript Object class is designed to operate as a dictonary. 
//The basis for the Dictionary class is the Array class rather than the Object class. Keep in mind, though, that everything in JavaScript is an Object, so an array is an object.


function Dictionary() {
  this.datastore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key,value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  for (let key in this.datastore) {
    console.log(key + " : " + this.datastore[key]);
  }
}

function count() {
  let num = 0;
  for (let key in this.datastore){
    ++num;
  }
  return num;
}

function clear() {
  for (let key in this.datastore){
    delete this.datastore[key];
  }
}

let pbook = new Dictionary(); 
pbook.add("Raymond","123"); 
pbook.add("David", "345"); 
pbook.add("Cynthia", "456"); 
pbook.add("Mike", "723"); 
pbook.add("Jennifer", "987"); 
pbook.add("Danny", "012"); 
pbook.add("Jonathan", "666"); 
console.log("David's extension: " + pbook.find("David")); 
pbook.remove("David");
console.log(pbook.datastore);
pbook.showAll();
console.log(pbook.count());
pbook.clear();
pbook.add("Mike","123");
pbook.showAll();