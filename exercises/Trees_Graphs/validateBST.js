// Implement a function to check if a binary tree is a binary search tree.

// const isValidBST = (root) => {

//   let isBST = true;

//   (function dfs(node) {

//     if (node.left) {
//       if (node.left.value > node.value) isBST = false;
//       dfs(node.left);
//     }

//     if (node.right) {
//       if (node.right.value < node.value) isBST = false;
//       dfs(node.right);
//     }

//   })(root);

//   return isBST;
// }

// const isValidBST = (node) => {

//     if (node.left) {
//       if (node.left.value > node.value) return false;
//       if (!isValidBST(node.left)) return false;
//     }

//     if (node.right) {
//       if (node.right.value < node.value) return false;
//       if (!isValidBST(node.right)) return false;
//     }

//     return true;
// }

const isValidBST = (node) => {
  if(!node) return false;

  let isValid = true; 

  if (node.left) {
    isValid = node.left.value < node.value && isValidBST(node.left);
  } 
  if (isValid && node.right) {
    isValid = node.right.value > node.value && isValidBST(node.right);
  }

  return isValid;

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
// 1
//  \
//   3
//  / \
// 2   4
//      \
//       5

let tree2 = node(2);
tree2.right = node(3);
tree2.right.left = node(2);
tree2.right.left.left = node(4);
//   2
//    \
//     3
//    / 
//   2    
//  / 
// 4

console.log(isValidBST(tree));
console.log(isValidBST(tree2));
