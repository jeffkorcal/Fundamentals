// Powerful Queries

// Exercise 25: Converting from Arrays to Trees
  var lists = [
      {
        "id": 5434364,
        "name": "New Releases"
      },
      {
        "id": 65456475,
        name: "Thrillers"
      }
    ],
    videos = [
      {
        "listId": 5434364,
        "id": 65432445,
        "title": "The Chamber"
      },
      {
        "listId": 5434364,
        "id": 675465,
        "title": "Fracture"
      },
      {
        "listId": 65456475,
        "id": 70111470,
        "title": "Die Hard"
      },
      {
        "listId": 65456475,
        "id": 654356453,
        "title": "Bad Boys"
      }
    ];

  return lists.map(function(list) {
    return {
      name: list.name,
      videos:
        videos.
          filter(function(video) {
            return video.listId === list.id;
          }).
          map(function(video) {
            return {id: video.id, title: video.title};
          })
    };
  });

// Exercise 26: Converting from Arrays to Deeper Trees
  var lists = [
      {
        "id": 5434364,
        "name": "New Releases"
      },
      {
        "id": 65456475,
        name: "Thrillers"
      }
    ],
    videos = [
      {
        "listId": 5434364,
        "id": 65432445,
        "title": "The Chamber"
      },
      {
        "listId": 5434364,
        "id": 675465,
        "title": "Fracture"
      },
      {
        "listId": 65456475,
        "id": 70111470,
        "title": "Die Hard"
      },
      {
        "listId": 65456475,
        "id": 654356453,
        "title": "Bad Boys"
      }
    ],
    boxarts = [
      { videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
      { videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
      { videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
      { videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      { videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
      { videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
      { videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
    ],
    bookmarks = [
      { videoId: 65432445, time: 32432 },
      { videoId: 675465, time: 3534543 },
      { videoId: 70111470, time: 645243 },
      { videoId: 654356453, time: 984934 }
    ];

  return lists.map(function(list) {
    return {
      name: list.name,
      videos:
        videos.
          filter(function(video) {
            return video.listId === list.id;
          }).
          concatMap(function(video) {
            return Array.zip(
              bookmarks.filter(function(bookmark) {
                return bookmark.videoId === video.id;
              }),
              boxarts.filter(function(boxart) {
                return boxart.videoId === video.id;
              }).
              reduce(function(acc,curr) {
                return acc.width * acc.height < curr.width * curr.height ? acc : curr;
              }),
              function(bookmark, boxart) {
                return { id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url };
              });
        })
    };
  });

// Exercise 27: Stock Ticker
  var microsoftPrices,
    now = new Date(),
    tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);

  // use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
  microsoftPrices =
    pricesNASDAQ.
      filter(function(priceRecord) {
        return priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo;
      });

  // Print the trades to the output console
  microsoftPrices.
    forEach(function(priceRecord) {
      printRecord(priceRecord);
    });