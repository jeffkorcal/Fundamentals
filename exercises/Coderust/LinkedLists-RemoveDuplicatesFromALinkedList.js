/* 
Remove Duplicates from a Linked List
Remove duplicate nodes from linked list of integers while keeping only the first occurrence of duplicates.

A -> B -> A -> C -> D -> E -> F -> E -> G

*/

function removeDuplicates(head) {
  const occurances = {};
  let current = head;
  occurances[current.val] = true;

  while (current.next) {
    if (!occurances[current.next.val]) {
      occurances[current.next.val] = true;
      current = current.next;
    } else {
      current.next = current.next.next;
    }
  }
  return head;
}

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new LinkedListNode('A');
// const b = new LinkedListNode('B');
// const a2 = new LinkedListNode('A');
// const c = new LinkedListNode('C');
// const d = new LinkedListNode('D');
// const e = new LinkedListNode('E');
// const f = new LinkedListNode('F');
// const e2 = new LinkedListNode('E');
// const g = new LinkedListNode('G');

// a.next = b;
// b.next = a2;
// a2.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = e2;
// e2.next = g;

const a = new LinkedListNode(7);
const b = new LinkedListNode(14);
const a2 = new LinkedListNode(28);
const c = new LinkedListNode(28);
const d = new LinkedListNode(14);
const e = new LinkedListNode(14);

a.next = b;
b.next = a2;
a2.next = c;
c.next = d;
d.next = e;

console.log(JSON.stringify(removeDuplicates(a)));
