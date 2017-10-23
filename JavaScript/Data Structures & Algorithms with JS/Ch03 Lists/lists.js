// Lists
//List are especially useful if we don't have to perforem searches on the items in the list or put them into some type of sorted order.
//Abstract data type (ADT)

function List() {
  this.dataStore = []; //initializes an empty arry to store list elements
  this.listSize = 0; //property: number of elements in a list
  this.pos = 0; //property: current position in list
  this.length = length; //property: returns the number of elements in list
  this.toString = toString; //function: returns string representation of list
  this.clear = clear; //function: clears all elements from list
  this.insert = insert; //function: insets new element after existing element
  this.append = append; //function: adds new element to end of list
  this.remove = remove; //function: removes element from list
  this.front = front; //function: sets current position to first element of list
  this.end = end; //function: sets current position to last element of list
  this.prev = prev; //function: moves current position back one element
  this.next = next; //function: moves current position forward one element
  this.currPos = currPos; //function: returns the current position in list
  this.moveTo = moveTo; //function: moves the current poistion to specified position
  this.getElement = getElement; //function: returns element at current position
  this.find = find; //function: return position of element or -1 if not found
  this.contains = contains; //function: returns true if element is in dataStore false if not
}

function append(element) {
  this.dataStore[this.listSize++] = element; //After the element is appended, listSize is incremented by 1
}

function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i){
    
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore.join(", ");
}

//Example 1
// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// console.log(names.toString());
// names.remove("Raymond");
// console.log(names.toString());


function insert(element,after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1,0,element);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = 0;
  this.pos = 0;
}

function contains(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if(this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}

//Traversing

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1;
}

function prev() {
  if (this.pos > 0) --this.pos;
}

function next() {
  //if (this.pos < this.listSize-1) ++this.pos;
  ++this.pos;
}

function currPos() {
  return this.pos;
}

function moveTo(poistion) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

//Example 2
var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

// names.front();
// console.log(names.getElement());
// names.next();
// console.log(names.getElement());
// names.next();
// names.next();
// names.prev();
// console.log(names.getElement());

//next needs to have the if statement taken off
for(names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}

//Advantages to using iterators over using array indexing:
  //Not having to worry about the underlying data storage structure when accessing list elements
  //Being able to update the list and not having to update the iterator, where an index becomes invalid when a new element is added to the list
  //Providing a uniform means of accessing elements for different types of data stores used in the implemenation of a list class
