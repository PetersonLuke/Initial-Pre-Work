/*
    Luke Peterson
    8/27/2019
    
    Because ES6 doesn't need it "function" was removed in the code.
*/

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);