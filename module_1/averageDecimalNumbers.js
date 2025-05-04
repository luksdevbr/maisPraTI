/*Create an algorithm to receive decimal numbers until the user enters 0 
and calculate the arithmetic mean of those numbers.*/

const prompt = require("prompt-sync")();

let count = 0;
let sum = 0;

while (true) { 
  const numberInput = prompt(`Enter a number (${count + 1}): `).trim();
  const number = Number(numberInput);

  if (numberInput === "") {
    console.log("Please enter a number");
    continue;
  } else if (isNaN(number)) {
    console.log("Only numeric values are allowed");
    continue;
  } else if (number === 0) {
    break;
  }

  sum += number;
  count++;
}

if (count > 0) {
  const average = (sum / count).toFixed(2);

  console.log(`Average: ${average}`);
}

