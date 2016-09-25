// Zipping Arrays
// Sometimes we need to combine two arrays by progressively taking an item from each and combining the pair. If you visualize a zipper, where each side is an array, and each tooth is an item, you'll have a good idea of how the zip operation works.

var videos = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
      }
    ],
    bookmarks = [
      {id: 470, time: 23432},
      {id: 453, time: 234324},
      {id: 445, time: 987834}
    ];

// Exercise 21: Combine videos and bookmarks by index
  var videoBookmark = function(videos,bookmarks){
    var counter, videoIdAndBookmarkIdPairs = [];

    for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
      videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
    }

    return videoIdAndBookmarkIdPairs;
  }
  console.log(videoBookmark(videos,bookmarks));

// Exercise 22: Implement zip
  Array.zip = function(left, right, combinerFunction) {
    var counter,
      results = [];

    for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
      results.push(combinerFunction(left[counter],right[counter]));
    }

    return results;
  };
    

// Exercise 23: Combine videos and bookmarks by index
var videosBookmarks = Array.zip(videos,bookmarks,function(video,bookmark){
      return {videoId: video.id, bookmarkId: bookmark.id};
    });
console.log(videosBookmarks);

// Exercise 24: Retrieve each video's id, title, middle interesting moment time, and smallest box art url.


