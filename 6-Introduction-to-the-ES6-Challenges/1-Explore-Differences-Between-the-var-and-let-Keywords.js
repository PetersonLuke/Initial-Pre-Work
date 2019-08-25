/*
    Luke Peterson
    8/23/2019
    
    Changed the var to let, so that the variable name can only be used once.
*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();