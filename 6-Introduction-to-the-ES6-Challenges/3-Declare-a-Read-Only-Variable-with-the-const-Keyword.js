/*
    Luke Peterson
    8/23/2019
    
    Changed the variable "SENTENCE" to be const.  Const makes the variable read only making it so it cannot be changed, the all caps help point this out.
*/

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE  = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE );
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");