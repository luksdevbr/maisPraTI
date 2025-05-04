/*Apples cost $0.30 if fewer than a dozen are purchased, and $0.25 if at least twelve are purchased. 
Write an algorithm that reads the number of apples purchased, calculates, 
and outputs the total cost of the purchase.*/

const prompt = require("prompt-sync")();

const applesInput = prompt("Enter the number of apples: ").trim(); 
const applesPurchased = Number(applesInput);

if (applesInput === "") {
  console.log("Please enter the number of apples");
} else if (isNaN(applesPurchased)) {
  console.log("Only numeric values are allowed");
} else if (!Number.isInteger(applesPurchased) || applesPurchased <= 0) {
  console.log("Only positive integer values are allowed");
} else {
  const totalCost = applesPurchased < 12 ? applesPurchased * 0.30 : applesPurchased * 0.25;

  console.log(`Total cost: $${totalCost.toFixed(2)}`);
} 

