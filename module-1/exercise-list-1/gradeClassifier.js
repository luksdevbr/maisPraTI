/*Implement a program that receives a grade from 0 to 10 and classifies it as "Approved," 
"Recovery," or "Failed" using if-else if.*/

const prompt = require("prompt-sync")();

const gradeInput = prompt("Enter a grade: ").trim(); 
const grade = Number(gradeInput);

if (gradeInput === "") {
  console.log("Please enter a grade");
} else if (isNaN(grade)) {
  console.log("Only numeric values are allowed");
} else if (grade < 0 || grade > 10) {
  console.log("Grade must be between 0 and 10");
} else if (grade < 5) {
  console.log("You are failed");
} else if (grade < 7) {
  console.log("You need recovery");
} else {
  console.log("You are approved");
}  
