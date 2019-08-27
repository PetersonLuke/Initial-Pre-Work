/*
    Luke Peterson
    8/27/2019
    
    Created a class "Thermostat" to set the temperature for Fahrenheit, and change it to celsius.
*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(Fahrenheit) {
      this.Fahrenheit = Fahrenheit;
    }

    get fahrenheitTemp() {
      return (5 / 9) * (this.fahrenheit - 32);
    }

    set fahrenheitTemp(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C