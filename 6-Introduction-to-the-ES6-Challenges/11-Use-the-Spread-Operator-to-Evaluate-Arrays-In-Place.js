/*
    Luke Peterson
    8/24/2019
    
    Copied the contents of arry2 into arry1 by using the spread operator, by adding ...arr1 in side arry2.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);