/*
    Luke Peterson
    8/22/2019
    
    Accessed the nested objects by using dot and bracket notation, to find out what is inside the glove box.
*/

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line