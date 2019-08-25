/*
    Luke Peterson
    8/23/2019
    
    Runs the code until "i" is no longer less than 5.  Each time it loops, the value of "i" is added to myArray, and then "i" is increased by 1.  With it being a do while loop, the code will run at least once.
*/

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

do {
  myArray.push(i);
  i++;
} while (i < 5);
