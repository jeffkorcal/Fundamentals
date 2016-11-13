// Given a binary tree, find the length of the longest consecutive sequence path.

// The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).

// Longest consecutive sequence path is 3-4-5, so return 3.

// 1
//  \
//   3
//  / \
// 2   4
//      \
//       5

// Longest consecutive sequence path is 2-3,not3-2-1, so return 2.

//   2
//    \
//     3
//    / 
//   2    
//  / 
// 1

// I root of tree
// O number of longest sequence
// C n/a
// E 1 node

const longestConsecutiveSequence = (node) => {
  if (!node) { return 0; } 
  let longestCount = 1;

  (function recurse(node, count) {

    let lCount = count;
    let rCount = count;

    if (node.left) {

      if (node.left.value === node.value + 1) {
          lCount++;
          longestCount = Math.max(lCount, longestCount);
      } else {
        lCount = 1;
      }

      recurse(node.left, lCount);

    } 

    if (node.right) {

      if (node.right.value === node.value + 1) {
          rCount++;
          longestCount = Math.max(rCount, longestCount);
      } else {
        rCount = 1;
      }

      recurse(node.right, rCount);
    }

  })(node, 1);

  return longestCount; 
} 

const node = (val) => {
  return { 
    value: val,
    left: null, 
    right: null
  }
}

let tree = node(1);
tree.right = node(3);
tree.right.left = node(2);
tree.right.right = node(4);
tree.right.right.right = node(5);

let tree2 = node(2);
tree2.right = node(3);
tree2.right.left = node(2);
tree2.right.left.left = node(1);

console.log(longestConsecutiveSequence(tree));
console.log(longestConsecutiveSequence(tree2));