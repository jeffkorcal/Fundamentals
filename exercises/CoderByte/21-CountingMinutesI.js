//Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

function CountingMinutesI(str) { 

  var timeArray = str.split("-");
  var startTime = timeArray[0];
  var endTime = timeArray[1];
  var startTimeArr = startTime.split(":");
  var startTimeHour = parseInt(startTimeArr[0]);
  var startTimeMinute = parseInt(startTimeArr[1].replace(/[^0-9]/g, ""));
  var startTimeAMPM = startTimeArr[1].replace(/[^a-zA-Z]/g, "");
  var endTimeArr = endTime.split(":");
  var endTimeHour = parseInt(endTimeArr[0]);
  var endTimeMinute = parseInt(endTimeArr[1].replace(/[^0-9]/g, ""));
  var endTimeAMPM = endTimeArr[1].replace(/[^a-zA-Z]/g, "");
  var minutes = 0;

  //Converting pm to military time
  if ((startTimeHour !== 12) && (startTimeAMPM === "pm")) {
      startTimeHour += 12;
  }
  if ((endTimeHour !== 12) && (endTimeAMPM === "pm")) {
      endTimeHour += 12;
  }

  //Converting 12am to 0
  if ((startTimeHour === 12) && (startTimeAMPM === "am")) {
      startTimeHour -= 12;
  }
  if ((endTimeHour === 12) && (endTimeAMPM === "am")) {
      endTimeHour -= 12;
  }

  if ((startTimeHour > endTimeHour) || ((startTimeHour === endTimeHour) && (startTimeMinute > endTimeMinute))) {
      return (1440 + ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute));
  } else {
      return ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute);
  }

  return minutes;

}
console.log(CountingMinutesI('12:30pm-12:00am')); //690
console.log(CountingMinutesI("1:23am-1:08am")); //1425



function CountingMinutesI(str) { 
  var seps = str.split("-");
  var col1 = seps[0].indexOf(":");
  var col2 = seps[1].indexOf(":");
  var hour1 = parseInt(seps [0].slice(0, col1));
  var hour2 = parseInt(seps[1].slice(0, col2));
  var min1 = parseInt(seps[0].slice(col1+1, col1+3));
  var min2 = parseInt(seps[1].slice(col2+1, col2+3));
  var ampm1 = seps[0].slice(-2);
  var ampm2 = seps[1].slice(-2);
    if (ampm1 == "pm" && hour1 != 12) {
      hour1 = hour1 + 12;
    }
    if (ampm2 == "pm" && hour2 != 12) {
      hour2 = hour2 + 12; 
    }
    if (hour1 == 12 && ampm1 == "am") {
      hour1 = 0;
    }
    if (hour2 == 12 && ampm2 == "am") {
      hour2 = 0;
        }
  var time1 = (hour1*60) + min1;
  var time2 = (hour2*60) + min2;

  var diff = time2 - time1;
    
    if (diff < 0) {
      diff = diff + (60 * 24);
    }
    
  return diff;   
}