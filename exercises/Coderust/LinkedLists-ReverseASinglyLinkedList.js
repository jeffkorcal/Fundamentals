/* 
Given the pointer/reference to the head of a singly linked list, reverse it and return the pointer/reference to the head of reversed linked list.

If linked list only contains 0 or 1 nodes, then the current list can be returned as it is. If there are two or more nodes, then iterative solution starts with 2 pointers.

reversed: A pointer to already reversed linked list (initialized to head).
list_to_do: A pointer to the remaining list (initialized to head->next).
We then set the reversed->next to NULL. This becomes the last node in the reversed linked list. reversed will always point to the head of the newly reversed linked list.

At each iteration, the list_to_do pointer moves forward (until it reaches NULL). The current node becomes the head of the new reversed linked list and starts pointing to the previous head of the reversed linked list.

The loop terminates when list_to_do becomes NULL and reversed pointer is pointing to the new head at the termination of the loop.

Time Complexity: Linear, O(n).
*/
const Node = value => {
  return { value: value, next: null };
};

const reverseIterative = head => {
  var node = head;
  var previous = null;

  while (node) {
    // save next node
    var save = node.next;

    // set the current node's next to previous
    node.next = previous;

    // update previous with current node
    previous = node;

    // increment node to next node or null at end of list
    node = save;
  }
  return previous;
};

const reverseRecursive = head => {
  if (!head || !head.next) {
    return head;
  }

  const reverseHead = reverseRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return reverseHead;
};

let nodeA = Node('A');
let nodeB = (nodeA.next = Node('B'));
let nodeC = (nodeB.next = Node('C'));
console.log(reverseIterative(nodeA));
// console.log(reverseRecursive(nodeA));
