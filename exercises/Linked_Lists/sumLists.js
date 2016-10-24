// You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

// 7 -> 1 -> 6
// 5 -> 9 -> 2
// 2 -> 1 -> 9


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
  arr.forEach(val => list.addToTail(val));
  return list;
}


const sumList = (list1, list2) => {
  const list = new LinkedList();
  let node1 = list1.head;
  let node2 = list2.head;
  let flag = false;

  while(node1 || node2) {
    let value1 = node1 ? node1.value : 0;
    let value2 = node2 ? node2.value : 0;
    let sum = value1 + value2;
    if (flag) { sum++; }
    
    if (sum > 9) {
      sum = sum % 10; //grabs the second value
      list.addToTail(sum);
      flag = true;
    } else {
      list.addToTail(sum);
      flag = false;
    }

    node1 = node1.next ? node1.next : 0;
    node2 = node2.next ? node2.next : 0;
  }

  if (flag) { list.addToTail(1); }

  return list;

}

list1 = arrToList([7,1,9,9]);
list2 = arrToList([5,9,2]);
console.log(JSON.stringify(sumList(list1, list2)));
