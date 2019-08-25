/*
    Luke Peterson
    8/23/2019
    
    Loop through multi-dimensional array, by using a nested for loop, with "i" getting the first array value, and "j" getting the second.  The array locations are then multiplied by the value of the variable product.
*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
     product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);