// Write code to remove duplicates from an unsorted linked list. How would you solve this problem if a temporary bu er is not allowed?

// I: linked list
// O: linked list with no duplicates
// C: no temporary buffer
// E: n/a

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let node = new Node(val);
    this.length++;
    !this.head ? this.head = node : this.tail.next = node;
    this.tail = node;
  }

  removeHead() {
    const head = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return head;
  }

  findByIndex(targetIndex) {
    let current = this.head,
        currentIndex = 0;
    
    while (current) {
      if (currentIndex === targetIndex) {
        return current;
      }
      current = current.next;
      currentIndex++;
    }
    return null;
  }

  delete(targetIndex) {

    if (targetIndex === 0) { return this.removeHead(); }

    const previous = this.findByIndex(targetIndex - 1);
    const removing = previous.next;

    // if target node does not exist
    if (!removing) { return null; }

    previous.next = removing.next;

    // if target node was the tail
    if (!previous.next) { this.tail = previous }

    this.length--;

    return removing.value;
  }

  // using hashMap
  removeDups() {
    const map = {};
    let node = this.head,
        index = 0;

    while (node) {
      if (map[node.value]) {
        this.delete(index);
      } else {
        map[node.value] = node.value;
        index++;
      }
      node = node.next;
    }
  }

  // using 2 pointers
  removeDups2() {
    let current = this.head;

    while (current) {
      let runner = current;

      while(runner.next) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        }
        runner = runner.next;
      }

      current = current.next;
    }

  }

}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const arrToLinkedList = (arr) => {
  const list = new LinkedList();

  arr.forEach(val => {
    list.addToTail(val);
  })

  return list;
}

let list = arrToLinkedList([2,5,2,3,5,3,7,8]);
console.log(JSON.stringify(list.head));
list.removeDups2();
console.log(JSON.stringify(list.head));
