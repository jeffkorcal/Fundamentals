// Reducing Arrays

// Sometimes we need to perform an operation on more than one item in the array at the same time. For example, let's say we need to find the largest integer in an array. We can't use a filter() operation, because it only examines one item at a time. To find the largest integer we need to compare items in the array to each other.

// One approach could be to select an item in the array as the assumed largest number (perhaps the first item), and then compare that value to every other item in the array. Each time we come across a number that was larger than our assumed largest number, we'd replace it with the larger value, and continue the process until the entire array was traversed.

// If we replaced the specific size comparison with a closure, we could write a function that handled the array traversal process for us. At each step our function would apply the closure to the last value and the current value and use the result as the last value the next time. Finally we'd be left with only one value. This process is known as reducing because we reduce many values to a single value.


var videos = [
  {
    "id": 65432445,
    "title": "The Chamber"
  },
  {
    "id": 675465,
    "title": "Fracture"
  },
  {
    "id": 70111470,
    "title": "Die Hard"
  },
  {
    "id": 654356453,
    "title": "Bad Boys"
  }
];

// Exercise 19: Reducing with an initial value
var idTitle = videos.reduce(function(accumulatedMap, video) {
      var obj = {};
      obj[video.id] = video.title; 

      // Object.assign() takes all of the enumerable properties from
      // the object listed in its second argument (obj) and assigns them
      // to the object listed in its first argument (accumulatedMap).
      return Object.assign(accumulatedMap, obj);
    },{});
console.log(idTitle);


var movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
          { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
          { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
          { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ]
  },
  {
    name: "Thrillers",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
          { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
          { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
          { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
          { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
          { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ]
  }
];

// Exercise 10: Implement concatAll()
  Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    results.push.apply(results, subArray);
  });
    return results;
  };

// Exercise 13: Implement concatMap()
  Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
      map(function(item) {
        return projectionFunctionThatReturnsArray(item);
      }).
      concatAll();
  };

// Exercise 16: Implement reduce() that returns and array
  Array.prototype.reduce = function(combiner, initialValue) {
    var counter, accumulatedValue;

    if (this.length === 0) {
      return this;
    }
    else {
      if (arguments.length === 1) {
        counter = 1;
        accumulatedValue = this[0];
      }
      else if (arguments.length >= 2) {
        counter = 0;
        accumulatedValue = initialValue;
      }
      else {
        throw "Invalid arguments.";
      }

      while(counter < this.length) {
        accumulatedValue = combiner(accumulatedValue, this[counter])
        counter++;
      }

      return [accumulatedValue];
    }
  };

// Exercise 20: Retrieve the id, title, and smallest box art url for every video.
var idTitleBoxArt = movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(video) {
      return video.boxarts.reduce(function(acc,curr) {
        return (acc.width * acc.height < curr.width * curr.height) ? acc : curr;
      }).map(function(boxart) {
      return {id: video.id, title: video.title, boxart: boxart.url};
      });
    });
  });
console.log(idTitleBoxArt);
