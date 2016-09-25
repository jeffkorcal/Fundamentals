function reject (arr,cb){
  return arr.filter(item => !cb(item))
}

var odds = reject([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0 );
console.log(odds);//=> [1, 3, 5]