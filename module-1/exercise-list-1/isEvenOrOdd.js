/*Write a program that receives an integer number and checks whether 
it is even or odd using an if control structure.*/

const prompt = require("prompt-sync")();

const numberInput = prompt("Enter a number: ").trim();
const number = Number(numberInput);

if (numberInput === "") {
  console.log("Please enter a valid number");
} else if (!Number.isInteger(number)) {
  console.log("Only integers are allowed");
} else if (number % 2 === 0) {
  console.log("This number is even");
} else { 
  console.log("This number is odd");
}
