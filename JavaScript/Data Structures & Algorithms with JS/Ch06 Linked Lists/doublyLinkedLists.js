// Doubly Linked Lists
//Although traversing a linked list from the first node to the last node is straightforward, it is not as easy to traverse a linked list backward. We can simplify this procedure if we add a property to our Node class that stores a link to the previous node. When we insert a node into the list, we’ll have to perform more operations to assign the proper links for the next and previous nodes, but we gain efficiency when we have to remove a node from the list, since we no longer have to search for the previous node.
//The remove() function for a doubly linked list is more efficient than for a singly linked list because we don’t have to find the previous node. We first need to find the node in the list that is storing the data we want to remove. Then we set that node’s previous property to the node pointed to by the deleted node’s next property. Then we need to redirect the previous property of the node the deleted node points to and point it to the node before the deleted node.

function Node(element) { 
  this.element = element; 
  this.next = null; 
  this.previous = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}

function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
      currNode = currNode.next;
   }
  return currNode; 
}

function insert(newElement, item) { 
  let newNode = new Node(newElement); 
  let current = this.find(item); 
  newNode.next = current.next; 
  newNode.previous = current; 
  current.next = newNode;
}

// findPrevious is no longer needed
/*function findPrevious(item) {
   let currNode = this.head;
   while (!(currNode.next == null) && (currNode.next.element != item)) {
      currNode = currNode.next;
}
   return currNode;
}*/

function remove(item) {
  let currNode = this.find(item); 
  if (!(currNode.next === null)) {
    currNode.previous.next = currNode.next; 
    currNode.next.previous = currNode.previous; 
    currNode.next = null;
    currNode.previous = null;
  } 
}

function display() {
  let currNode = this.head;
  while(!(currNode.next === null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findLast() {
  let currNode = this.head;
  while (!(currNode.next === null)) {
    currNode = currNode.next;
  }
  return currNode;
}

function dispReverse() {
  let currNode = this.head;
  currNode = this.findLast();
  while (!(currNode.previous === null)) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
}

let cities = new LList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle"); 
cities.display();
cities.dispReverse();

cities.remove("Carlisle");
// cities.display();
// cities.dispReverse();
