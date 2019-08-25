/*
    Luke Peterson
    8/24/2019
    
    Used destructuring assignment to get the average temperature for tomorrow by, assigning value with key tomorrow to tempOfTomorrow. 
*/

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow : tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79