/*
    Luke Peterson
    8/23/2019
    
    Used an arrow function (=>) with parameters because the function here is not used anywhere else, so it doesn't need a name.
*/

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));