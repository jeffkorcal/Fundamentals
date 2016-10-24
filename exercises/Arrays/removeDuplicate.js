// How would you remove duplicate members from an array?

const removeDuplicate = (arr) => {
  const map = {},
        result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      result.push(arr[i]);
      map[arr[i]] = true; 
    }
  }
  return result;
};

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));