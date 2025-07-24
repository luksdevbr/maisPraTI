/*Write a program that prompts the user for 5 numbers and calculates the total sum using a for loop.*/

const prompt = require("prompt-sync")();

let sum = 0;

for (let i = 0; i < 5; i++) {
  const numberInput = prompt(`Enter a number (${i + 1}): `).trim();
  const number = Number(numberInput);

  if (numberInput === "" || isNaN(number)) {
    console.log("Only numeric values are allowed");
    i--;
  } else {
    sum += number;
  } 
}

console.log(`Sum: ${sum.toFixed(2)}`);


