// Big-O
// Access    | O(1) Constant
// Search    | O(n) Linear
// Insertion | O(n) Linear
// Deletion  | O(n) Linear

class ArrayList {
  constructor () {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    return this.delete(this.length-1);
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const deleted = this.data[index];
    this._collapseTo(index);
    return deleted;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }

}

const arr = new ArrayList();

arr.push(1);
console.log('Pushed to arr: ', arr.data);
arr.pop();
console.log('Popped from arr: ', arr.data);
arr.push(1);
arr.push(2);
console.log('Get index 1 of arr: ', arr.get(1));
arr.delete(1);
console.log('Delete index 1 of arr: ', arr.data);