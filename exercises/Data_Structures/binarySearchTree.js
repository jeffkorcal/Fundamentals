// Big-O
// Access    | O(log(n)) logarithmic
// Search    | O(log(n)) logarithmic
// Insertion | O(log(n)) logarithmic
// Deletion  | O(log(n)) logarithmic

// Worst case
// If everything is added in order it becomes O(n) linear

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {

    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    
    while(true) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }

}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


const bst = new Tree();
bst.insert(7);
bst.insert(1);
bst.insert(2);
bst.insert(2);
bst.insert(8);
console.log(JSON.stringify(bst.root));