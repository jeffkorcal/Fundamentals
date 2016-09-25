// Zipping Arrays
// Sometimes we need to combine two arrays by progressively taking an item from each and combining the pair. If you visualize a zipper, where each side is an array, and each tooth is an item, you'll have a good idea of how the zip operation works.

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
        "interestingMoments": [
          { type: "End", time:213432 },
          { type: "Start", time: 64534 },
          { type: "Middle", time: 323133}
        ]
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
        "interestingMoments": [
          { type: "End", time:54654754 },
          { type: "Start", time: 43524243 },
          { type: "Middle", time: 6575665}
        ]
      }
    ]
  },
  {
    name: "Instant Queue",
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
        "interestingMoments": [
          { type: "End", time:132423 },
          { type: "Start", time: 54637425 },
          { type: "Middle", time: 3452343}
        ]
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
        "interestingMoments": [
          { type: "End", time:45632456 },
          { type: "Start", time: 234534 },
          { type: "Middle", time: 3453434}
        ]
      }
    ]
  }
];

// Exercise 4: Implement map()
  Array.prototype.map = function(projectionFunction) {
    var results = [];
    this.forEach(function(itemInArray) {
      results.push(projectionFunction(itemInArray));
    });
    return results;
  };

// Exercise 7: Implement filter()
  Array.prototype.filter = function(predicateFunction) {
    var results = [];
    this.forEach(function(itemInArray) {
      if(predicateFunction(itemInArray)){
         results.push(itemInArray);
         }
    });
    return results;
  };

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

// Exercise 22: Implement zip
  Array.zip = function(left, right, combinerFunction) {
    var counter,
      results = [];

    for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
      results.push(combinerFunction(left[counter],right[counter]));
    }

    return results;
  };

// Exercise 24: Retrieve each video's id, title, middle interesting moment time, and smallest box art url.
  var result = movieLists.concatMap(function(movieList) {
      return movieList.videos.concatMap(function(video) {
        return Array.zip(
          video.boxarts.reduce(function(acc,curr) {
            return (acc.width * acc.height < curr.width * curr.height) ? acc : curr;
            }),
          video.interestingMoments.filter(function(interestingMoment) {
            return interestingMoment.type === "Middle";
          }),
          function(boxart, interestingMoment) {
            return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
            });
      });
    });
  console.log(result);

