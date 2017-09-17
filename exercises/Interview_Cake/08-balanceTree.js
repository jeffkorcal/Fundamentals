/*
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.
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

function isBalanced(root) {
  var depths = []; //stores the depth of leaf nodes
  var nodes = []; //stores pairs of a node and it's depth
  nodes.push([root, 0]);

  while (nodes.length) {

    var nodePair = nodes.pop();
    var node = nodePair[0];
    var depth = nodePair[1];

    // if leave node
    if (!node.left && !node.right) {

      if (!depths.includes(depth)) { depths.push(depth) }

      /*
      The tree is unbalanced if:
        1) there are more than 2 different leaf depths
        2) 2 leaf depths that are more than 1 apart
      */
      if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
        return false;
      }

    } else {
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
    }
  }

  return true;
}

var tree = new BinaryTreeNode(0);
tree.insertLeft(1);
tree.insertRight(2);
tree.left.insertLeft(3);
tree.left.insertRight(4);
// tree.right.insertLeft();
tree.right.insertRight(6);
tree.right.right.insertRight(7);
tree.right.right.right. insertRight(8);

console.log(isBalanced(tree));