/*Write an algorithm to read 2 values (assume that identical values will not be read) 
and write them in ascending order.*/

const prompt = require("prompt-sync")();

const value1Input = prompt("Value (1): ").trim();
const value2Input = prompt("Value (2): ").trim();

const value1 = Number(value1Input);
const value2 = Number(value2Input);

if (value1Input === "" || value2Input === "") {
  console.log("Please fill in both fields");
} else if (isNaN(value1) || isNaN(value2)) {
  console.log("Only numeric values are allowed");
} else if (value1 > value2) {
  console.log(`${value2}, ${value1}`);
} else if (value2 > value1) {
  console.log(`${value1}, ${value2}`);
} else {
  console.log("Values cannot be identical");
}


