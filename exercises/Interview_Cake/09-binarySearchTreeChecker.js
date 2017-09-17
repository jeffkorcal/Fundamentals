/*
Write a function to check that a binary tree is a valid binary search tree

 */

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
 }

 BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
 };

 BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
 };


 // 1
 //  \
 //   3
 //  / \
 // 2   4
 //      \
 //       5


 //   2
 //    \
 //     3
 //    / 
 //   2    
 //  / 
 // 4
