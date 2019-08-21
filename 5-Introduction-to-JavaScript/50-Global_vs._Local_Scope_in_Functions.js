/*
    Luke Peterson
    8/20/2019
    
    Used a local variable with the same name as a global variable.  The local variable is then used in place of the global one.
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  
  var outerWear = "sweater";
  
  // Only change code above this line
  return outerWear;
}

myOutfit();