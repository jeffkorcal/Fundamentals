// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

// I: 
// O: 
// C: only have access to the head
// E: if there are less than 3 elements in the list

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const node = new Node(val);
    !this.head ? this.head = node : this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  middleNode() {
    let node = this.head;
    const middleIndex = this.length / 2;

    for (let i = 1; i < middleIndex; i++) {
      node = node.next;
    }

    return node;
  }

  deleteMiddleNode(node) {
    if (node === null || node.next === null) {
      return false;
    }

    let next = node.next;
    node.value = next.value;
    node.next = next.next;
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
  arr.forEach(val => list.addToTail(val));
  return list;
}

const list = arrToList([1,2,3,4,5,6,7]);
list.deleteMiddleNode(list.middleNode())
console.log(JSON.stringify(list.head));