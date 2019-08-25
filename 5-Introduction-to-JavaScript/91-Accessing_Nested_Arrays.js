/*
    Luke Peterson
    8/22/2019
    
    Accessed the nested arrays to find out what is in the 2nd array, position 1, and what is inside the 2nd spot, position 1, of that array.
*/

// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line