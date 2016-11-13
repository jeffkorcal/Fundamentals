// Given a sorted (increasing order) array with unique integer elements, write an algorithm to crate a binary search tree with minimal height.

function TreeNode(val) {
  return {
    value: val,
    left: null,
    right: null
  }
}

function minimalTree(arr) {

  if (!arr.length) { return null };

  let mid = Math.floor(arr.length/2);
  const node = TreeNode(arr[mid]);
  node.left = minimalTree(arr.slice(0,mid));
  node.right = minimalTree(arr.slice(mid + 1));
  return node;
}

console.log(minimalTree([1,2,3,4,5,6,7]));