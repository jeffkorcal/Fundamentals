// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

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

const partition = (list, target) => {
  let node = list.head;
  let lowerList = new LinkedList();
  let higherList = new LinkedList();

  while (node) {
    if(node.value < target) {
      lowerList.addToTail(node.value)
    } else {
      higherList.addToTail(node.value)
    }
    node = node.next
  }

  lowerList.tail.next = higherList.head;
  lowerList.tail = higherList.tail;
  return lowerList;

}

const list = arrToList([3,5,8,5,10,2,1]);
console.log(JSON.stringify(partition(list, 5)));
