/*
    Luke Peterson
    8/23/2019
    
    Runs the code until "i" is no greater than 0, with "i" starting at 10.  Each time it loops, the value of "i" is added to myArray, and then "i" is decreased by 2.  With it being a for loop, the condition must be true be for the loop to execute.
*/

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -=2) {
  myArray.push(i);
}