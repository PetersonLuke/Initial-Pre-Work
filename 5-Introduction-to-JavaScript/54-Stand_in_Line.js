/*
    Luke Peterson
    8/21/2019
    
*/

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));