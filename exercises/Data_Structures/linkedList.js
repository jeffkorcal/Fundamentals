// Big-O
// Access    | O(n) Linear
// Search    | O(n) Linear
// Insertion | O(1) Constant
// Deletion  | O(1) Constant  

class LinkedList {
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    !this.head ? this.head = node : this.tail.next = node;
    this.tail = node;
  }
  
  pop() {
    return this.delete(this.length - 1);
  }

  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) { return null; }
    return node.value;
  }

  delete(index) {
    // Edge case for deleting head
    if (index === 0) {
      const head = this.head;
      if (head.next) {
        this.head = head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return head.value;
    }

    // Deleting anything other than the head
    // Find node before current node
    const node = this._find(index-1, this._testIndex);
    // Select current node
    const excise = node.next;
    // If current node does not exist return null
    if (!excise) { return null; }
    // Set previous node to the deleting nodes next
    node.next = excise.next;

    // set tail to current node if next is null
    if (node.next === null) { 
      this.tail = node; 
    } 

    this.length--;
    return excise.value;
  }

  _find(target, test=this._testValue) {
    let current = this.head;
    let i = 0;
    while(current) {
      if (test(target, current.value, i)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }
  
  _testValue(a,b) {
    return a === b;
  }

  _testIndex(search, __, i) {
    return search === i;
  }

}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
console.log('Pushed to list: ', list.push(1), list);
console.log('Popped from list: ',list.pop(), list);
console.log('Pushed to list: ', list.push(1), list);
console.log('Pushed to list: ', list.push(2), list);
console.log('Pushed to list: ', list.push(3), list);
console.log('Get index 1 of list: ', list.get(1));
console.log('Delete index 1 of list: ', list.delete(1), list);