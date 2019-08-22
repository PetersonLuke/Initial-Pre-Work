/*
    Luke Peterson
    8/21/2019
    
    Created a chain of else if statements to see what a golfer got on their hole based on par and the number of stokes they took.  The code starts from checking with the smallest amount of strokes and progresses up.  Each check returns the variable position of the variable names.
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  
  if(strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  }else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);