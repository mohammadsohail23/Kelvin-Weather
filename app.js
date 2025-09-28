// Creating a variable and setting it to today's forecast to kelvin.
const kelvin = 0;

// Converting Kelvin to Celsius by subtracting 273 from the kelvin variable.
let celsius = kelvin - 273;

// Using this equation to calculate Fahrenheit, then storing the answer in a variable names fahrenheit.
let fahrenheit = celsius * (9/5) + 32

// Converting the decimal number into a whole number by using .floor() method.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Extra Practice! Converting Celcius to Newton Scale using the equation below:
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton`);
