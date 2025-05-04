/*Create a program that classifies a person's age into categories (child, teenager, 
adult, senior) based on the provided value, using an if-else control structure.*/

const prompt = require("prompt-sync")();

const ageInput = prompt("Enter your age: ").trim(); 
const age = Number(ageInput);

if (ageInput === "") {
  console.log("Please enter an age");
} else if (age <= 0) {
  console.log("Age cannot be zero or negative");
} else if (!Number.isInteger(age)) {
  console.log("Age must be an integer");
} else if (age <= 12) {
  console.log("You are a child");
} else if (age <= 17) {
  console.log("You are a teenager");
} else if (age <= 59) {
  console.log("You are an adult");
} else {
  console.log("You are a senior")
}
