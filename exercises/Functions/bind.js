// Implement bind

Function.prototype.bind = function(context, ...args1) {
  return (...args2) => this.apply( context, args1.concat(args2) );
};