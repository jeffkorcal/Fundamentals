// Big-O
// Access    | O(log(n)) logarithmic
// Search    | O(log(n)) logarithmic
// Insertion | O(log(n)) logarithmic
// Deletion  | O(log(n)) logarithmic

// Self-balancing

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {

    if (this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      this.root.insert(value);
    }
  }

}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }

  insert(value) {
    if(value < this.value) {

      if(this.left) {
        this.left.insert(value);
      } else {
        this.left = new Node(value);
      }

      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }

    } else {

      if(this.right) {
        this.right.insert(value);
      } else {
        this.right = new Node(value);
      }

      if (!this.right || this.right.height < this.right.height) {
        this.height = this.right.height + 1;
      }

    }
    this.balance();
  }

  balance() {
      const rightHeight = (this.right) ? this.right.height : 0;
      const leftHeight = (this.left) ? this.left.height : 0;
      
      if ( leftHeight > rightHeight + 1 ) {
        const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
        const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;
        
        if (leftRightHeight > leftLeftHeight) {
          this.left.rotateRR();
        }
        
        this.rotateLL();
      }
      else if ( rightHeight > leftHeight + 1 ) {
        const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
        const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;
        
        if (rightLeftHeight > rightRightHeight) {
          this.right.rotateLL();
        }
        
        this.rotateRR();
      }
    }
    rotateRR() {
      const valueBefore = this.value;
      const leftBefore = this.left;
      this.value = this.right.value;
      this.left = this.right;
      this.right = this.right.right;
      this.left.right = this.left.left;
      this.left.left = leftBefore;
      this.left.value = valueBefore;
      this.left.updateInNewLocation();
      this.updateInNewLocation();
    }
    rotateLL() {
      const valueBefore = this.value;
      const rightBefore = this.right;
      this.value = this.left.value;
      this.right = this.left;
      this.left = this.left.left;
      this.right.left = this.right.right;
      this.right.right = rightBefore;
      this.right.value = valueBefore;
      this.right.updateInNewLocation();
      this.updateInNewLocation();
    }
    updateInNewLocation() {
      if (!this.right && !this.left) {
        this.height = 1;
      }
      else if (!this.right || (this.left && this.right.height < this.left.height)) {
          this.height = this.left.height + 1;
      }
      else { //if (!this.left || this.right.height > this.left.height)
          this.height = this.right.height + 1;
      }
    }

}

const tree = new Tree ();
tree.insert(5);
tree.insert(3);
tree.insert(1);
tree.insert(4);
tree.insert(2);
console.log(tree.root);