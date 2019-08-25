/*
    Luke Peterson
    8/23/2019
    
    Runs the code until "i" is no longer less than 6, with "i" starting at 1.  Each time it loops, the value of "i" is added to myArray, and then "i" is increased by 1.  With it being a for loop, the condition must be true be for the loop to execute.
*/

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for(var i = 1; i < 6; i++)
{
    myArray.push(i);
}