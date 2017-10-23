// Circularly Linked Lists
//The last node of the list is always pointing back to the head of the list, creating a circular list
//The reason you might want to create a circularly linked list is if you want the ability to go backward through a list but don’t want the extra overhead of creating a doubly linked list. You can move backward through a circularly linked list by moving forward through the end of the list to the node you are trying to reach.

function LList() {
this.head = new Node("head"); 
this.head.next = this.head; //this is different
this.find = find;
this.insert = insert; 
this.display = display; 
this.findPrevious = findPrevious; 
this.remove = remove;
}

function display() {
let currNode = this.head;
  while (!(currNode.next === null) && !(currNode.next.element === "head")) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  } 
}