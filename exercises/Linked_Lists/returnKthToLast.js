// Implement an algorithm to find the kth to last element of a singly linked list.

// I: k to last element
// O: the elements value
// C: n/a
// E: n/a

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const node = new Node(val);
    !this.head ? this.head = node : this.tail.next = node;
    this.tail = node;
  }

  // Two Pointer Solution
  findKthToLastNode(k) {
    let start = 1;
    let current = null;
    let ahead = this.head;

    while (ahead.next) {

      if (start === k) {
        current = this.head;
      }
      
      if (current) { 
        current = current.next; 
      }

      ahead = ahead.next;
      start++;
    } 

    return current;
  }

  // Recursive Solution
  findKthToLastNode2(num) {
    let target = null;

    (function recurse(k, node) {
      if(node === null) { return 0; }

      let index = recurse(k, node.next) + 1;
      
      if (index === k) { target = node; }

      return index;

    })(num, this.head);

    return target;

  }

}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}


const arrToList = (arr) => {
  const list = new LinkedList();

  arr.forEach(val => {
    list.addToTail(val);
  });

  return list;
}

const list = arrToList([1,2,3,4,5,6,7]);
console.log(list.findKthToLastNode2(3));
