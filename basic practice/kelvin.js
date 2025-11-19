// The forecast today is 293 Kelvin. This value will not change.
const kelvin = 309;

// Converting Kelvin to Celsius by subtracting 273.
const celsius = kelvin - 273;

// Calculating Fahrenheit using the Celsius value.
let fahrenheit = celsius * (9/5) + 32;

// Rounding down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

// Logging the temperature in Fahrenheit using string interpolation.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton =Math.floor(newton);
console.log(newton);