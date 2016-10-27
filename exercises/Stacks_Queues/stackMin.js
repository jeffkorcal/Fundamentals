// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time.

function Stack() {

  const stack = [];

  function push(value) {
    stack.push(value);
  }

  function pop() {
    if(stack.length) {
      return stack.pop();
    }
  }

  function peek() {
    return stack[stack.length - 1];
  }

  return { push, pop, peek };
}

function MinStack() {
  const stack = Stack();
  const minStack = Stack();

  function push(value) {
    if(!minStack.peek() || minStack.peek() > value) {
      minStack.push(value);
    }
    stack.push(value);
  } 

  function pop() {
    let value = stack.pop();
    if (value === minStack.peek()) {
      minStack.pop();
    }
  }

  function min() {
    return minStack.peek();
  }

  return { push, pop, min};
}

const minStack = MinStack();
minStack.push(1);
minStack.push(2);
console.log(minStack.min());