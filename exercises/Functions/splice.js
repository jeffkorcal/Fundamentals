const splice = function(array, start, count, ...args) {

  if (start > array.length) start = array.length;
  if (start < 0) start += array.length;
  if (count === undefined) count = array.length - start;
  if (count > array.length - start) count = array.length - start;

  let inserts = args;
  let removed = array.slice(start, start+count);
  let end = array.slice(start + count);

  for (let i = 0; i < inserts.length; i++){
    array[i + start] = inserts[i];
  }

  for (let j = 0; j < end.length; j++){
    array[start + inserts.length + j] = end[j];
  }

  array.length = start + inserts.length + end.length;

  return removed;

};

console.log(splice([1,2,3,4,5], 1, 1));