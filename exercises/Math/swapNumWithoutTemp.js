// How would you swap two numbers without using a temporary variable?

const swapNum = (a, b) => {
  b = b - a;
  a = a + b;
  b = a - b;
  console.log('a:', a, 'b:', b);
};

swapNum(1,2);
swapNum(4,3);
swapNum(-1,2);