// Linked Lists
//When you determine that the operations performed on an array are too slow for practical use, you can consider using the linked list as an alternative data structure.
//The linked list can be used in almost every situation where a one-dimensional array is used, except when yoyu need random access to the elements of a list. When random access is required, an array is the better data structure to use.
//A linked list is a collection of objects called nodes. Each node is linked to a successor node in the list using an object reference. The reference is called a link.
//While array elements are referenced by their poistion, linked list elements are referenced by their relationship to the other elements of the linked list.
//Many linked-list implementations include a special node, called the head, to denote the beginning of a linked list.
//We mark the end of a linked list by pointing to a null node.
//Inserting a new node into a list is a very efficient task. To insert a new node, the link of the node before the inserted node (the previous node) is changed to point to the new node, and the new node's link is set to the node the previous node was pointing to before the insertion.
//Removing an item from a linked list is also easy to do. The link of the node before the removed node is redirected to point to the node the removed node is pointing to, while also pointing the removed node to null, effectively taking the node out of the linked list.

//An Object-Based Linked List Design
//Node Class: Adding nodes to a linked list.
//LinkedList Class: Which provides fuctions for inserting nodes, removing nodes, displaying a list, etc.

function Node(element) {
  this.element = element; //stores the node's data
  this.next = null; //stores a link to the next node in the linked list
}

function LList() {
  this.head = new Node("head"); //Setting the element to "head" and next to null
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  let currNode = this.head;  
  while(currNode.element !== item) { //if currentNode.element does not equal the item go to next element
    currNode = currNode.next;
  }
  return currNode; 
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let currNode = this.find(item);
  //newNode.next = currNode.next; //setting null
  currNode.next = newNode; //setting newElement to the next property 
}

function findPrevious(item) {
  let prevNode = this.head;
  while(!(prevNode.next === null) && (prevNode.next.element !== item)){
    prevNode = prevNode.next;
  }
  return prevNode;
}

function remove(item) {
  let prevNode = this.findPrevious(item);
  if(!(prevNode.next === null)) {
    prevNode.next = prevNode.next.next; //skip over the node we are removing
  }
}

function display() {
  let currNode = this.head;
  while(!(currNode.next === null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

//Example Insert
let cities = new LList();
cities.insert("Conway","head");
cities.insert("Russellville","Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma","Carlisle");
cities.display();

//Example Remove
cities.remove("Carlisle");
cities.display();