// Querying Trees
// Sometimes, in addition to flat arrays, we need to query trees. Trees pose a challenge because we need to flatten them into arrays in order to apply filter() and map() operations on them. In this section we'll define a concatAll() function that we can combine with map() and filter() to query trees.

var movieLists = [
	{
		name: "Instant Queue",
		videos : [
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
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		]
	},
	{
		name: "New Releases",
		videos: [
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxarts": [
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
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
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
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


// Exercise 12: Retrieve id, title, and a 150x200 box art url for every video
	var idTitleBoxArt = movieLists.map(function(movieList) {
		return movieList.videos.map(function(video){
			return video.boxarts.filter(function(boxart){
				return boxart.width === 150;
			}).map(function(boxart){
				return {id: video.id, title: video.title, boxart: boxart.url};
			});
		}).concatAll();
	}).concatAll();
	//console.log(idTitleBoxArt);


// Exercise 13: Implement concatMap()
	Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
		return this.map(function(item) {
				return projectionFunctionThatReturnsArray(item);
			}).concatAll();
	};


// Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video
	var idTitleBoxArt = movieLists.concatMap(function(movieList) {
		return movieList.videos.concatMap(function(video){
			return video.boxarts.filter(function(boxart){
				return boxart.width === 150;
			}).map(function(boxart){
				return {id: video.id, title: video.title, boxart: boxart.url};
			});
		})
	});
	console.log(idTitleBoxArt);