// Big-O
// Access    | O(1) Constant
// Search    | O(1) Constant
// Insertion | O(1) Constant
// Deletion  | O(1) Constant

// Worse case scenario
// Access may become linear when hashing function is weak and collision are handled poorly
// Only when resizing Search, Insertion, and Deletion become O(n) Linear

var HashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
   result.insert = function(key, value){
    var bucketKey = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[bucketKey] || [];

    for (var t = 0; t < bucket.length; t++) {
      if (bucket[t][0] === key) {
        bucket[t][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    storage[bucketKey] = bucket;
    size++;
 
    if (size > storageLimit * 0.75) {
      _resize(storageLimit * 2);
    }

    console.log(JSON.stringify(storage));
  };

  result.retrieve = function(key){
    var bucketKey = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[bucketKey] || [];

    for (var t = 0; t < bucket.length; t++) {
      if (bucket[t][0] === key) {
        return bucket[t][1];
      }
    }

  };

  result.remove = function(key){
    var bucketKey = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[bucketKey] || [];

    for (var t = 0; t < bucket.length; t++) {
      if (bucket[t][0] === key) {
        var tValue = bucket[t][1];
        bucket.splice(t, 1);
        size--;
        if (size < storageLimit * 0.25) {
          _resize(Math.floor(storageLimit / 2));
        }
        return tValue;
      }
    }

  };

  var _resize = function(newLimit) {
    storageLimit = newLimit;
    var oldStorage = storage;
    storage = [];
    size = 0;

    for (var i = 0; i < oldStorage.length; i++) {
      var bucket = oldStorage[i] || [];
      for (var j = 0; j < bucket.length; j++) {
        result.insert(bucket[j][0], bucket[j][1]);
      }
    }
  };

  return result;
};

// Hashing Function
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashTable = HashTable();
hashTable.insert('George','W');
hashTable.insert('John','A');
hashTable.insert('Thomas','J');
hashTable.insert('James','M');
hashTable.insert('James','M');
hashTable.insert('Andrew','J');
console.log(hashTable.retrieve('George','W'));
console.log(hashTable.remove('George','W'));