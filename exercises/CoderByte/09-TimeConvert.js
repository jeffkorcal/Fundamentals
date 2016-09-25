// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

function TimeConvert(num) { 

  // to get the hours, we divide num by 60 and round it down
  // e.g. 61 / 60 = 1 hour
  // e.g. 43 / 60 = 0 hours
  var hours = Math.floor(num / 60);

  // to get the minutes, now we use the remainder that we discarded above
  // the modulo operation is represented by the % symbol
  // e.g. 61 % 60 = 1 minute
  // e.g. 43 % 60 = 43 minutes
  var minutes = num % 60;

  // combine the hours and minutes
  return hours + ':' + minutes;
         
}
TimeConvert(124);

//Methods Used
//Math.floor() - Math.floor(x) - returns the largest integer less than or equal to a given number.