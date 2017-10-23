// Binary Trees and Binary Search Trees
//Trees are a commonly used data structure in computer science. A tree is a nonlinear data structure that is used to store data in a hierarchical manner. Tree data structures are used to store hierarchical data, such as the files in a file system, and for storing sorted lists of data.
//Binary trees are chosen over other more primary data structures because you can search a binary tree very quickly (as opposed to a linked list, for example) and you can quickly insert and delete data from a binary tree (as opposed to an array).

//Binary trees: restrict the number of child nodes to no more than two. 

// Traversing
//   Nodes
//     Root Node
//     Parent Node
//     Child Node
//     Leaf Node
//   Edges
//     Path

// Levels
//   Staring at level 0 to however many node deep 

// Binary Tree
//   Left Node
//   Right Node
//   certain binary tree implementations, certain data values can be stored only in left nodes, and other data values must be stored in right nodes.

// Binary Search Tree
// Binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes.

// Algorithm for Insert
  // 1. Set the root node to be the current node.
  // 2. If the data value in the inserted node is less than the data value in the current node, set the new current node to be the left child of the current node. If the data value in the inserted node is greater than the data value in the current node, skip to step 4.
  // 3. If the value of the left child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
  // 4. Set the current node to be the right child of the current node.
  // 5. If the value of the right child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.

// Traversing
//   There are three traversal functions used with BSTs: inorder, preorder, and postorder. An inorder traversal visits all of the nodes of a BST in ascending order of the node key values. A preorder traversal visits the root node first, followed by the nodes in the sub‐ trees under the left child of the root node, followed by the nodes in the subtrees under the right child of the root node. A postorder traversal visits all of the child nodes of the left subtree up to the root node, and then visits all of the child nodes of the right subtree up to the root node.

// Node Class
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

// Binary Search Tree (BST) Class
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

function insert(data) {
  let node = new Node(data,null,null);
  
  if (this.root === null){
    this.root = node;
  } else {
    let current = this.root;
    let parent;
    
    while(true) {
      parent = current;
      if(data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = node;
          break;
        }
      } else {
        current = current.rigth;
        if (current === null) {
          parent.right = node;
          break;
        }
      }
    }
  }
}

function inOrder(node) { 
  if (!(node === null)) {
    return inOrder(node.left);
    putstr(node.show() + " ");
    return inOrder(node.right);
  }
}

function preOrder(node) { 
  if (!(node === null)) {
    putstr(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  } 
}


function postOrder(node) { 
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    putstr(node.show() + " ");
  } 
}

var nums = new BST(); 
nums.insert(23); 
nums.insert(45); 
nums.insert(16); 
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22); 
console.log("Inorder traversal: "); 
inOrder(nums.root);