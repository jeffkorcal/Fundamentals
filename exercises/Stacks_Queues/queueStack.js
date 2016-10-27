// Implement a queue with two stacks

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

function Queue() {
  s1 = Stack();
  s2 = Stack();

  function enqueue(value){
    s1.push(value);
  }

  function dequeue(){
    
    if (!s2.peek()) {
      while(s1.peek()) {
        s2.push(s1.pop());
      }
    }
    return s2.pop();
  }

  return { enqueue, dequeue };
}

const queue = Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
queue.enqueue(3);
console.log(queue.dequeue());