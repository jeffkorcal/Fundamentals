const slice = function(stringOrArray, start, end) {

  let sliced, append;

  if(typeof stringOrArray === 'string') {
    sliced = '';
    append = letter => sliced += letter;
  } else {
    sliced = [];
    append = item => sliced.push(item);
  }

  if (start === undefined) start = 0;
  if (end === undefined) end = stringOrArray.length;
  if (start < 0) start += stringOrArray.length;
  if (end < 0) end += stringOrArray.length;
  if (start > stringOrArray.length) start = stringOrArray.length;
  if (end > stringOrArray.length) end = stringOrArray.length;

  for (let i = start; i < end; i++) {
    append(stringOrArray[i]);
  }

  return sliced;

};