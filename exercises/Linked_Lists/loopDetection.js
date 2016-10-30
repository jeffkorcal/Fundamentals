// Given a circular linked list, implement an algorithm that returns the node at the beginnning of the loop.

const Node = (value) => {
  return { value: value, next: null };
}

const hasCycle = (list) => {
  let fast = list;
  let slow = list;
  let inside = list;

  while(fast && fast.next) {
    
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) { 
      while(inside) {
        if (inside === slow) {
          return inside;
        }
        inside = inside.next;
        slow = slow.next;
      }
    }
  }

  return false;

}


var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
nodeE.next = nodeB;
console.log(hasCycle(nodeA));