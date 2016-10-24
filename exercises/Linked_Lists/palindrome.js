// Implement a function to check if a linked list is a palindrome

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const node = new Node(val);
    !this.head ? this.head = node : this.tail.next = node;
    this.tail = node;
  }

  addToHead(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}

class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

const arrToList = (arr) => {
  const list = new LinkedList();
  arr.forEach(val => list.addToTail(val));
  return list;
}

const isPalindrome = (list) => {
  let forward = '';
  let backward = '';
  let node = list.head;

  backward = (function recurse(node){
    forward += node.value;

    if (!node.next) { return node.value; }

    return recurse(node.next) + node.value;
  })(node);

  return forward === backward;
};

//--------- 2nd Ver. works with numbers as well

const isPalindrome2 = (list) => {
  const revList = reverseList(list);
  return listsEqual(list, revList);
};

const reverseList = (list) => {
  let node = list.head;
  const revList = new LinkedList();

  while(node) {
    revList.addToHead(node.value);
    node = node.next;
  }
  return revList;
};

const listsEqual = (org, rev) => {
  let orgNode = org.head;
  let revNode = rev.head;

  while (orgNode && revNode) {

    if (orgNode.value !== revNode.value) { return false };

    orgNode = orgNode.next;
    revNode = revNode.next;
  }
  return true;

};


const list = arrToList(['r','a','c','e','c','a','r']);
const list2 = arrToList(['t','o','m','a','t','o']);
const list3 = arrToList([1,2,3,2,1]);
const list4 = arrToList([1,2,3,4,5]);

console.log(isPalindrome(list));
console.log(isPalindrome(list2));
console.log(isPalindrome2(list3));
console.log(isPalindrome2(list4));
