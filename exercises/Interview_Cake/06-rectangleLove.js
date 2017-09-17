/*
A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.
They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.

Two rectangles overlapping a little. It must be love.
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.


  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};
*/


function rectangleOverlap(rec1, rec2) {
  var x = findXoverlap(rec1, rec2);
  var y = findYoverlap(rec1, rec2);
  if (x && y) {
    return {
      leftX: x.leftX,
      bottomY: y.bottomY,
      width: x.width,
      height: y.height
    };
  } 
  return null;
}

function findXoverlap(rec1, rec2) {

  if (rec1.leftX < rec2.leftX) {
    recLeft = rec1;
    recRight = rec2;
  } else {
    recLeft = rec2;
    recRight = rec1;
  }

  var recRightStr = recRight.leftX;
  var recLeftEnd = recLeft.leftX + recLeft.width;

  // if full or partial overlap  // if full or partial overlap
  if (recRightStr < recLeftEnd) {
    return {
      leftX: recRightStr,
      width: recLeftEnd - recRightStr
    };
  } 

  return null;
}

function findYoverlap(rec1, rec2) {

  if (rec1.bottomY < rec2.bottomY) {
    recBtm = rec1;
    recTop = rec2;
  } else {
    recBtm = rec2;
    recTop = rec1;
  }

  var recTopStr = recTop.bottomY;
  var recBtmEnd = recBtm.bottomY + recBtm.height;

  // if full or partial overlap
  if (recTopStr < recBtmEnd) {
    return {
      bottomY: recTopStr,
      height: recBtmEnd - recTopStr
    };
  } 
  
  return null;
}

var rec1 = { leftX: 1, bottomY: 5, width: 10, height: 4 };
var rec2 = { leftX: 8, bottomY: 6, width: 5, height: 9 };
console.log(rectangleOverlap(rec1, rec2));


/*/////////////////////////////////////////////////////
  Refactored
/////////////////////////////////////////////////////*/
function findRectangularOverlap(rect1, rect2) {
  var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  if (xOverlap && yOverlap) {
    return {
      leftX: xOverlap.startPoint,
      bottomY: yOverlap.startPoint,
      width: xOverlap.overlapLength,
      height: yOverlap.overlapLength
    };
  }
  return null;
}

function findRangeOverlap(point1, length1, point2, length2) {
  var highestStartPoint = Math.max(point1, point2);
  var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  if (lowestEndPoint > highestStartPoint) {
    return {
      startPoint: highestStartPoint, 
      overlapLength: lowestEndPoint - highestStartPoint
    }
  }

  return null;
}

