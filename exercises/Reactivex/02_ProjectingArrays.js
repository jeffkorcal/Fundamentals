// Projecting Arrays
// Applying a function to a value and creating a new value is called a projection. To project one array into another, we apply a projection function to each item in the array and collect the results in a new array.

var newReleases = [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [5.0],
		"bookmark": [{ id:432534, time:65876586 }]
	},
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [5.0],
		"bookmark": [{ id:432534, time:65876586 }]
	}
];

// Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()
  var videoAndTitlePairs = [];
	newReleases.forEach(function(video) {
		videoAndTitlePairs.push({id:video.id, title: video.title});
	});
  console.log(videoAndTitlePairs);


// Exercise 4: Implement map()
	Array.prototype.map = function(projectionFunction) {
		var results = [];
		this.forEach(function(itemInArray) {
	    results.push(projectionFunction(itemInArray));
		});
		return results;
	};


// Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs
  var result = newReleases.map(function(item){
    return {id:item.id,title:item.title};
  });
  console.log(result);
