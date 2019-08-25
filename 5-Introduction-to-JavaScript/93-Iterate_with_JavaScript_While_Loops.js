/*
    Luke Peterson
    8/23/2019
    
    Runs the code until "i" is no longer less than 5.  Each time it loops, the value of "i" is added to myArray, and then "i" is increased by 1.  With it being a while loop, the code will run while the condition is true and than stop.
*/

// Setup
var myArray = [];
var i = 0;
// Only change code below this line.

while(i < 5) {
  myArray.push(i);
  i++
}