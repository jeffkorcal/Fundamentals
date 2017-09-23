// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
  const factorial = function(n) {
    if (n===0) {
      return 1;
    } else if (n<0){
      return null;
    } else {
      return n * factorial(n-1);
    }
  };
  // console.log(factorial(5));  // 5! = 5 x 4 x 3 x 2 x 1 = 120


// 2. Compute the sum of an array of integers.
  const sum = function(array) {

    if (array.length === 1) return array.pop();

    return array.pop() + sum(array);

  };
  // console.log(sum([1, 2, 3, 4, 5, 6]));  // 21


// 3. Sum all numbers in an array containing nested arrays.
  const arraySum = function(array) {

    return array.reduce(function(prev, curr){
      if(Array.isArray(curr)){
        return prev + arraySum(curr);
      } else {
        return prev + curr;
      }
    },0);

  };
  // console.log(arraySum([1,[2,3],[[4]],5])); // 15


// 4. Check whether a number is even or not.
  const isEven = function(n) {

    if(n === 0) return true;
    if(n === 1) return false;
    if(n < 0) return isEven(-n);

    return isEven(n-2);

  };
  // console.log(isEven(1));
  // console.log(isEven(2));
  // console.log(isEven(-2));


// 5. Get the integers in range (x, y).
  const range = function(min, max) {

    const result = [];

    if (min === max) return result;

    if (min < max-1){
      result.push(min+1);
      return result.concat(range(min+1,max));
    }

    if (max < min-1) {
      result.push(min-1);
      return result.concat(range(min-1,max));
    }

    //needs to return empty array b/c it is going to get called one more time
    return result;

  };
  // console.log(range(2, 2)); // []
  // console.log(range(2, 9)); // [ 3, 4, 5, 6, 7, 8 ]
  // console.log(range(9, 2)); // [ 8, 7, 6, 5, 4, 3 ]


// 6. Compute the exponent of a number. The exponent of a number says how many times the base number is used as a factor.
  const exponent = function(base, exp) {
    
    if (exp===0) return 1;
    if (exp < 0) return exponent(base, exp+1)/base; 
    if (exp > 0) return exponent(base, exp-1)*base;

  };
  // console.log(exponent(8,2));  // 8^2 = 8 x 8 = 64
  // console.log(exponent(8,4));  // 4096
  // console.log(exponent(8,-2)); // 0.015625


// 7. Write a function that accepts a string a reverses it.
  const reverse = function(str) {

    if (str.length === 1) return str.charAt(0);

    return str.charAt(str.length-1) + reverse(str.slice(0,str.length-1));

  };
  // console.log(reverse("Reversing the String")); // gnirtS eht gnisreveR


// 8. Write a function that determines if a string is a palindrome.
  const palindrome = function(str) {

    str = str.replace(/[\s]/g, "").toLowerCase();

    if (str.length <= 1) return true;

    if (str.charAt(0) !== str.charAt(str.length -1)) return false;
  
    return palindrome(str.slice(1, str.length -1));

  };
  // console.log(palindrome('racecar')); // true
  // console.log(palindrome('not palindrome')); // false


// 9. Write a function that returns the remainder of x divided by y without using the modulo (%) operator.
  const modulo = function(x, y) {
    if (x === 0 && y === 0) return NaN;
    if (x < 0 && y < 0) return x;
    
    //Base Case
    if (x<y) return x;

    //Recursive Case
    return modulo(x-y,y);
  };
  // console.log(modulo(2,1)); //0
  // console.log(modulo(17,5)); //2
  // console.log(modulo(78,453)); //78
  // console.log(modulo(-79,82)); //-79
  // console.log(modulo(-275,-502)); //-257
  // console.log(modulo(0,32)); //0


// 10. Write a function that multiplies two numbers without using the * operator  or JavaScript's Math object.
  const multiply = function(x, y) {
    if (x === 0) return 0;
    if (x<0 && y<0) return multiply(-x,-y); 
    
    //Base Case
    if (y === 1) return x;

    //Recursive Case
    return x + multiply(x,y-1);

  };
  // console.log(multiply(2,1)); // 2 * 1 = 2
  // console.log(multiply(17,5)); // 17 * 5 = 85
  // console.log(multiply(78,453)); // 78 * 453 = 35334
  // console.log(multiply(-79,82)); // -79 * 82 = -6478
  // console.log(multiply(-275,-502)); // -275 * -502 = 138050
  // console.log(multiply(0,32)); // 0 * 32 = 0
  // console.log(multiply(0,0)); // 0 * 0 = 0
  
  
// 11. Write a function that divides two numbers without using the / operator  or JavaScript's Math object.
  // let divide = function(x, y) {
  // };
  // console.log(17/5); //3.4
  // console.log(78/453); //0.17218543046357615
  // console.log(-79/82); //-0.9634146341463414
  // console.log(-275/-582); //0.4725085910652921
  // console.log(0/32); //0
  // console.log(0/0); //NaN


// 12. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two integers is the greatest integer that divides both x and y with no remainder.
  const gcd = function(x, y, divisor) {
    divisor = divisor || (x < y ? x : y);
  
    if (x%divisor === 0 && y%divisor === 0) return divisor;
    else return gcd(x,y,divisor-1);

  };
  // console.log(gcd(4,36));  // 4
  // console.log(gcd(5,32));  // 1
  // console.log(gcd(5,100));  // 5
  // console.log(gcd(7,48));  // 1


// 13. Write a function that compares each character of two strings and returns true if both are identical.
  const compareStr = function(str1, str2) {
    if (str1.length !== str2.length) return false;
    if (str1.length === 0 && str2.length === 0) return true;

    if (str1.charAt(0) === str2.charAt(0)) {
      return compareStr(str1.slice(1),str2.slice(1));
    } else {
      return false;
    }

  };
  // console.log(compareStr('house', 'houses')); // false
  // console.log(compareStr('', '')); // true
  // console.log(compareStr('tomato', 'tomato')); // true
  // console.log(compareStr('tomato', 'tomat0')); // false


// 14. Write a function that accepts a string and creates an array where each letter occupies an index of the array.
  const createArray = function(str){

    let arr = [str.charAt(0)];

    if (str.length === 1) return arr; 

    return arr.concat(createArray(str.slice(1)));

  };
  // console.log(createArray('StringtoArray')); //[ 'S', 't', 'r', 'i', 'n', 'g', 't', 'o', 'A', 'r', 'r', 'a', 'y' ]


// 15. Reverse the order of an array
  const reverseArr = function (arr) {

    let revArr = [arr.pop()];

    if (arr.length === 0) return revArr;

    return revArr.concat(reverseArr(arr));

  };
  // console.log(reverseArr([1,2,3,4])); // [ 4, 3, 2, 1 ]


// 16. Create a new array with a given value and length.
  const buildList = function(value, length) {
    let arr = [value];

    if (length === 1) return arr;

    return arr.concat(buildList(value,length-1));

  };
  // console.log(buildList(0,5)); // [0,0,0,0,0]
  // console.log(buildList(7,3)); // [7,7,7]


// 17. Count the occurence of a value inside a list.
  const countOccurrence = function(array, value) {

    let counter = 0;

    if (value === array.shift()) counter++;

    if (array.length === 0) return counter;

    return counter + countOccurrence(array,value);

  };
  // console.log(countOccurrence([2,7,4,4,1,4], 4)); // 3
  // console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')); // 2


// 18. Write a function that counts the number of times a key occurs in an object.
  const countKeysInObj = function(obj, value) {

    let counter = 0;

    for (let key in obj) {
      if(key === value) counter++;

      if(typeof obj[key] === 'object') {
        counter += countKeysInObj(obj[key],value);
      } 
    }

    return counter;

  };
  // let testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
  // console.log(countKeysInObj(testobj, 'r')); // 1
  // console.log(countKeysInObj(testobj, 'e')); // 2


// 19. Write a function that counts the number of times a value occurs in an object.
  const countValuesInObj = function(obj, value) {

    let counter = 0;

    for (let key in obj) {
      if(obj[key] === value) counter++;
      
      if(typeof obj[key] === 'object' && obj[key] !== null) {
        counter += countValuesInObj(obj[key],value);
      } 
    }

    return counter;

  };
  // let testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
  // console.log(countValuesInObj(testobj, 'r')); // 2
  // console.log(countValuesInObj(testobj, 'e')); // 1


// 20. Find all keys in an object (and nested objects) by a provided name and rename them to a provided new name while preserving the value stored at that key.
  const replaceKeysInObj = function(obj, value, newKey) {

    for (let key in obj) {
      if (key===value) {
        obj[newKey] = obj[key];
        delete obj[key]; 
      } 
      
      if (typeof obj[key] === "object" && obj[key] !== null) {
        replaceKeysInObj(obj[key],value,newKey);
      }

    }

    return obj;

  };
  // let testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'r':'r'}},'r':'e'};
  // console.log(replaceKeysInObj(testobj, 'r', 'newkey'));


// 21. Get the first n Fibonacci numbers. In the Fibonacci Sequence, each subsequent number is the sum of the previous two. Note:  The 0 is not counted.
  // let fibonacci = function(n) {
  // };
  // console.log(fibonacci(5));  // [0, 1, 1, 2, 3, 5]


// 22. Return the Fibonacci number located at index n of the Fibonacci sequence.
  let nthFibo = function(n) {
    if(n === 0) return 0;
    else if (n === 1) return 1;
    else return nthFibo(n - 1) + nthFibo(n - 2);
  };
  // console.log(nthFibo(5)); // 5
  // console.log(nthFibo(7)); // 13
  // console.log(nthFibo(3)); // 2


// 23. Given an array of words, return a new array containing each word capitalized.
  let capitalizeWords = function(input) {
    
    let output = [input.shift().toUpperCase()];

    if (input.length === 0) return output;

    return output.concat(capitalizeWords(input));

  };
  // let words = ['i', 'am', 'learning', 'recursion'];
  // console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


// 24. Given an array of strings, capitalize the first letter of each index.
  let capitalizeFirst = function(input) {
    let output = [];
    let str = input.shift();
    output.push(str.charAt(0).toUpperCase() + str.slice(1));

    if (input.length === 0) return output;

    return output.concat(capitalizeFirst(input));

  };
  // let words = ['i', 'am', 'learning', 'recursion'];
  // console.log(capitalizeFirst(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


// 25. Return the sum of all even numbers in an object containing nested objects.
  let nestedEvenSum = function(obj) {
    let sum = 0;

    for (let key in obj) {
      if (typeof obj[key] === 'object'){
        sum += nestedEvenSum(obj[key],sum);
      } else if(obj[key]%2 === 0) {
        sum += obj[key];
      }
    }

    return sum;
  };
  // let obj1 = {
  //   a: 2,
  //   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  //   c: {c: {c: 2}, cc: 'ball', ccc: 5},
  //   d: 1,
  //   e: {e: {e: 2}, ee: 'car'}
  // };
  // console.log(nestedEvenSum(obj1)); // 10


// 26. Flatten an array containing nested arrays.
  let flatten = function(arrays) {
    return array.reduce(function(prev,next){
      if (Array.isArray(next)){
        return prev.concat(flatten(next));
      } else {
        return prev.concat(next);
      }  
    },[]);
  };
  // console.log(flatten([1,[2],[3,[[4]]],5])); // [1,2,3,4,5]


// 27. Eliminate consecutive duplicates in a list. If the list contains repeated elements they should be replaced with a single copy of the element. The order of the elements should not be changed.
  let compress = function(input) {
    let output = [];

    if (input[0] !== input[1]) {
      output.push(input.shift());
    } else {
      input.shift();
    }

    if (input.length === 0) return output;

    return output.concat(compress(input));

  };
  // console.log(compress([1, 2, 2, 3, 4, 4, 5, 5, 5])); // [1, 2, 3, 4, 5]
  // console.log(compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4])); // [1, 2, 3, 4, 2, 5, 4]


// 28. Augument every element in a list with a new value where each element is an array itself.
  let augmentElements = function(input, aug) {
    let output = [];
    let arr = input.shift();
    arr.push(aug);
    output.push(arr);
    
    if(input.length === 0) return output;

    return output.concat(augmentElements(input,aug,output));

  };
  // console.log(augmentElements([[],[3],[7]], 5)); // [[5],[3,5],[7,5]]


// 29. Reduce a series of zeroes to a single 0.
  let minimizeZeroes = function(input) {
    let output = [];

    if (input[0] === 0 && input[1] === 0 ) {
      input.shift();
    } else {
      output.push(input.shift());
    }

    if (input.length === 0) return output;

    return output.concat(compress(input));
  };
  // console.log(minimizeZeroes([2,0,0,0,1,4])); // [2,0,1,4]
  // console.log(minimizeZeroes([2,0,0,0,1,0,0,4])); // [2,0,1,0,4]


// 30. Alternate the numbers in an array between positive and negative regardless of their original sign.  The first number in the index always needs to be positive.
  let alternateSign = function(input, counter) {
    counter = counter || 0;

    if (counter === input.length) return input;


    if (counter % 2 === 0) {
      if (input[counter] < 0) {
        input[counter] = -input[counter];
      } 
    } else {
      if (input[counter] > 0) {
          input[counter] = -input[counter];
      }
    }

    return alternateSign(input,counter+1);
  };
  // console.log(alternateSign([2,7,8,3,1,4])); // [2,-7,8,-3,1,-4]
  // console.log(alternateSign([-2,-7,8,3,-1,4])); // [2,-7,8,-3,1,-4]


// 31. Given a string, return a string with digits converted to their word equivalent. Assume all numbers are single digits (less than 10).
  let numToText = function(str) {
    let arrOfNumStr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    output = [];
    
    let arrStr = str.split(' ');
    let value = arrStr.shift();
    let matches = value.match(/\d+/g);

    if (matches !== null) {
      output.push(arrOfNumStr[value]);
    } else {
      output.push(value);
    }

    if (arrStr.length === 0) return output;

    str = arrStr.join(' ');

    return output.concat(numToText(str)).join(' ');
  };
  // console.log(numToText("I have 5 dogs and 6 ponies")); // "I have five dogs and six ponies"


// 32. Sum all integers below a given integer.
  let sumBelow = function(n) {

    if (n === 0) return 0;

    return n + sumBelow(n-1); 

  };
  // console.log(sumBelow(10)); // 55
  // console.log(sumBelow(7)); // 28


// 33. Determine if a number is a power of two.
  let powerOfTwo = function(n) {

    if (n === 1) return true;
    if (n === 2) return true;

    if (n%2 === 0) n = n/2;
    else return false;


  return powerOfTwo(n);
  };
  // console.log(powerOfTwo(1)); // true
  // console.log(powerOfTwo(16)); // true
  // console.log(powerOfTwo(10)); // false


// 33. Write a recursive version of map.
  let rMap = function(arr, cb) {
    var mapped = [];

    mapped.push(cb(arr.shift()));
    
    if (arr.length === 0) return mapped;

    return mapped.concat(rMap(arr,cb));
  };
  // console.log(rMap([1,2,3], function(item){ return item*2; })); // [2,4,6]


// 34. Given a string, return an object containing tallies of each letter.
  let letterTally = function(str, obj) {
    obj = obj || {};

    if (obj[str.charAt(0)] === undefined) {
      obj[str.charAt(0)] = 1;
    } else {
      obj[str.charAt(0)]++;
    }

    if(str.length === 1) return obj; 

    return letterTally(str.slice(1),obj);

  };
  // console.log(letterTally('potato')); // {'p':1, 'o':2, 't':2, 'a':1}


  // 35. Count keys in object.
    let getAllKeys = function (object) {
        let arrKeys = [];    
        
        for (let key in object){    
           arrKeys.push(key);

           if (typeof object[key] === 'object'){       
              arrKeys = arrKeys.concat(getAllKeys(object[key]));
           }        
           
        }
        return arrKeys;  
    };

    // let exampleData = {name: 'Beth', address: {street: '123 main', city: 'sf'}};
    // console.log(getAllKeys(exampleData)); // ['name', 'address', 'street', 'city']


// 36. Write a function for binary search. Sample 
  // let binarySearch = function(array, target, min, max) {
  // };
  // let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  // console.log(binarySearch(5)) will return '5'


// 37. Write a merge sort function.
  let mergeSort = function(arr) {
    
    let result = [];

    if (arr.length < 2) return arr;
        
    let mid = Math.floor(arr.length / 2);
    let subLeft = mergeSort(arr.slice(0,mid));
    let subRight = mergeSort(arr.slice(mid));

    //This is where the sorting happens; it exits if the length of one side is 0
    while (subLeft.length >0 && subRight.length >0) {
      result.push(subLeft[0] < subRight[0]? subLeft.shift() : subRight.shift());
    }
    
    //This cleans up the one extra stragler; if left still present concat left to result or vice versa
    return result.concat(subLeft.length ? subLeft : subRight);

  };
  // console.log(mergeSort([34,7,23,32,5,62])); // [5,7,23,32,34,62]