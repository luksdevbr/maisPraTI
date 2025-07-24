/*Create a program that calculates the factorial of a number provided by the user using a for or while loop.*/

const prompt = require("prompt-sync")();

const numberInput = prompt("Enter a number: ").trim(); 
const number = Number(numberInput);

if (numberInput === "") {
  console.log("Please enter an integer number");
} else if (isNaN(number)) {
  console.log("Only numeric values are allowed");
} else if (!Number.isInteger(number)) {
  console.log("Only integer values are allowed");
} else if (number < 0) {
  console.log("Factorial is not defined for negative numbers");
} else {
  let factorial = 1;

  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }

  console.log(`${number}! = ${factorial}`);
}
