/*Write an algorithm to read an integer number and print it on the screen 10 times.*/

const prompt = require("prompt-sync")();

const numberInput = prompt("Enter a number: ").trim();
const number = Number(numberInput);

if (numberInput === "") {
  console.log("Please enter an integer number");
} else if (!Number.isInteger(number)) {
  console.log("Only integer values are allowed");
} else {
  for (let i = 0; i < 10; i++) {
    console.log(number);
  }
}

