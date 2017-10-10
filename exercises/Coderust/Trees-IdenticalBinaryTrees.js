/* 
Check if two binary trees are identical

Given roots of two binary trees, determine if these trees are identical or not.
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

function identicalBinaryTrees (treeOne, treeTwo) {

  // if leave node both should be null so return false
  if (!treeOne && !treeTwo) {
    return true;
  }

  if (treeOne && treeTwo) {
    // this will only return true if the node values are identical and it has the same amount of nodes
    return (treeOne.value === treeTwo.value && 
      identicalBinaryTrees(treeOne.left, treeTwo.left) &&
      identicalBinaryTrees(treeOne.right, treeTwo.right));
  }

  return false;
}

const binaryTree1 = new BinaryTreeNode(100);
binaryTree1.insertLeft(50);
binaryTree1.insertRight(200);
binaryTree1.left.insertLeft(25);
binaryTree1.right.insertLeft(125);
binaryTree1.right.insertRight(300);

const binaryTree2 = new BinaryTreeNode(100);
binaryTree2.insertLeft(50);
binaryTree2.insertRight(200);
binaryTree2.left.insertLeft(25);
binaryTree2.right.insertLeft(125);
binaryTree2.right.insertRight(300);

console.log(identicalBinaryTrees(binaryTree1, binaryTree2));
