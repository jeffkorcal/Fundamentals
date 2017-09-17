/*
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

function TempTracker() {
  this.temps = {};
  this.length = 0;
  this.total = 0;
  this.maxTemp = null;
  this.minTemp = null;
  this.mode = null;
}

TempTracker.prototype.insert = function(temperature) {

  // Out of Bounds
  if (temperature < 0 || temperature > 110) { return; }

  // Mean
  this.total += temperature;
  this.length++;

  // Max
  if (this.maxTemp === null || temperature > this.maxTemp) {
    this.maxTemp = temperature;
  }
  
  // Max
  if (this.minTemp === null || temperature < this.minTemp) {
    this.minTemp = temperature;
  }

  if (this.temps[temperature]) {
    this.temps[temperature] += 1;
  } else {
    this.temps[temperature] = 1;
  }

  // Mode
  if (this.mode === null || this.temps[temperature] > this.temps[this.mode]){
    this.mode = temperature;
  }
};

TempTracker.prototype.getMax = function() {
  return this.maxTemp;
};

TempTracker.prototype.getMin = function() {
  return this.minTemp;
};

TempTracker.prototype.getMean = function() {
  return this.total / this.length;
};

TempTracker.prototype.getMode = function() {
  return this.mode;
};

var tempTracker = new TempTracker();
tempTracker.insert(1);
tempTracker.insert(1);
tempTracker.insert(2);
tempTracker.insert(3);
tempTracker.insert(4);
console.log(tempTracker.getMax());
console.log(tempTracker.getMin());
console.log(tempTracker.getMean());
console.log(tempTracker.getMode());
