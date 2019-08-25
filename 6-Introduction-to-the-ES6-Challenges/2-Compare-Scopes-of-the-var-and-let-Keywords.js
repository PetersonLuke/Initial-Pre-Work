/*
    Luke Peterson
    8/23/2019
    
    Made it so that the both "i" variables are differant.
*/

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}