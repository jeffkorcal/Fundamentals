/* 
We are given root node of a binary tree and we have to write an iterator that takes in this root and iterates through the nodes of binary tree in an inorder way. The expectation is to write two critical methods of any iterator: hasNext() and getNext(). 
*/


class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const inorderSearch = (node, result=[]) => {

  if (node.left) inorderSearch(node.left, result)
  result.push(node.value);
  if (node.right) inorderSearch(node.right, result)
  
  return result;
}

const binaryTree = new BinaryTreeNode(100);
binaryTree.insertLeft(50);
binaryTree.insertRight(200);
binaryTree.left.insertLeft(25);
binaryTree.left.insertRight(75);
binaryTree.right.insertLeft(125);
binaryTree.right.insertRight(300);

console.log(inorderSearch(binaryTree));
