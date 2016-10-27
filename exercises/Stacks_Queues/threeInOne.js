// Describe how you could use a single array to implement three stacks.

function MultiStack() {

  const numOfStacks = 3;
  let stackCapcity = 10;
  const values = [];
  const sizes = [0,0,0];

  function push(stackNum, value) {
    if (_isFull(stackNum)) { 
      console.log('stack is full'); 
    } else {
      sizes[stackNum]++;
      values[_indexOfTop(stackNum)] = value;
    }
  }

  function pop(stackNum) {
    if (_isEmpty(stackNum)) {
      console.log('stack is empty');
    } else {
      let topIndex = _indexOfTop(stackNum);
      let value = values[topIndex];
      values[topIndex] = null;
      sizes[stackNum]--;
      return value;
    }
  }

  function peek(stackNum) {
    if (_isEmpty(stackNum)) {
      console.log('stack is empty');
    } else {
      return values[_indexOfTop(stackNum)];
    }
  }

  function _isEmpty(stackNum) {
    return sizes[stackNum] === 0;
  }
  
  function _isFull(stackNum) { 
    return sizes[stackNum] === stackCapcity;
  }

  function _indexOfTop(stackNum) {
    let offset = stackNum * stackCapcity;
    let size = sizes[stackNum];
    return offset + size - 1;
  }

  return { push, pop, peek };
}

let stacks = MultiStack();
stacks.push(0,1);
stacks.push(1,2);
stacks.push(2,3);
console.log(stacks.peek(0));
console.log(stacks.peek(1));
console.log(stacks.peek(2));