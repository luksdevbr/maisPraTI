/*
 * This module provides functions to calculate BMI, classify triangles, and display multiplication tables.
 * To test these functions, run `interactiveMenu.js`, which imports this module and provides an interactive menu.
 * Do not run this file directly; it is meant to be imported by `interactiveMenu.js`.
 */

/*Write a program that calculates a person's Body Mass Index (BMI) and determines 
the weight category (underweight, normal weight, overweight, obesity) using if-else.*/

const prompt = require("prompt-sync")();

function centerString(str, wrap) {
  const totalPadding = wrap.length - str.length;
  const paddingLeft = Math.floor(totalPadding / 2) + str.length;
  const paddingRight = wrap.length;

  return str.padStart(paddingLeft, " ").padEnd(paddingRight, " ");
}

function interface(title, content) {
  const border = "------------------------------------------------";
  
  console.log(`\n${border}`);
  console.log(`${centerString(title, border)}`)
  console.log(border);
  console.log(`${content}`)
  console.log(`${border}`);
}

function bmiCalculator() {
  const weightInput = prompt("Your weight (KG): ").trim(); 
  const heightInput = prompt("Your height (M): ").trim();

  const weight = Number(weightInput);
  const height = Number(heightInput);

  if (weightInput === "" || heightInput === "") {
    console.log("Please fill in both fields");
    return;
  }
  if (isNaN(weight) || isNaN(height)) {
    console.log("Only numeric values are allowed");
    return;
  }
  if (weight <= 0 || height <= 0) {
    console.log("Only values greater than zero are allowed");
    return;
  }
  
  const bmi = (weight / height ** 2).toFixed(2); 

  if (bmi < 18.5) { 
    interface(`Your BMI: ${bmi}`, "Underweight");  
  } else if (bmi < 24.9) {
    interface(`Your BMI: ${bmi}`, "Normal weight"); 
  } else if (bmi < 29.9) { 
    interface(`Your BMI: ${bmi}`, "Overweight"); 
  } else if (bmi < 34.9) { 
    interface(`Your BMI: ${bmi}`, "Class I Obesity"); 
  } else if (bmi < 39.9) {
    interface(`Your BMI: ${bmi}`, "Class II Obesity"); 
  } else {
    interface(`Your BMI: ${bmi}`, "Class III Obesity"); 
  }
}

/*Read three values for the sides of a triangle: A, B, and C. Check if the provided sides actually form a triangle. 
If they do, indicate the type of triangle: isosceles, scalene, or equilateral.

To check if the provided sides form a triangle: A < B + C and B < A + C and C < A + B 

Isosceles triangle: has two equal sides (A = B or A = C or B = C)  

Scalene triangle: has all sides different (A ≠ B and B ≠ C)  

Equilateral triangle: has all sides equal (A = B and B = C)*/

function triangleClassifier() { 
  const aInput = prompt("Side (A): ").trim();
  const bInput = prompt("Side (B): ").trim();
  const cInput = prompt("Side (C): ").trim();

  const a = Number(aInput);
  const b = Number(bInput);
  const c = Number(cInput);

  if (aInput === "" || bInput === "" || cInput === "") {
    console.log("Please fill in all fields"); 
    return;
  }
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Only numeric values are allowed");
    return;
  }
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c) || 
    a <= 0 || b <= 0 || c <= 0) { 
    console.log("Only integer values greater than zero are allowed");
    return;
  }
  if (!(a < b + c && b < a + c && c < a + b)) {
    console.log("The sides do not form a triangle");
    return;
  }

  if (a === b && b === c) {
    interface("Equilateral triangle", "Has all sides equal");
  } else if (a === b || a === c || b === c) {
    interface("Isosceles triangle", "Has two equal sides");   
  } else { 
    interface("Scalene triangle", "Has all sides different"); 
  }
}

/*Create a program that displays the multiplication table of a number provided 
by the user (from 1 to 10) using a for loop.*/

function multiplicationTable() {
  const numberInput = prompt("Enter a number: ").trim();
  const number = Number(numberInput);

  function printMultiTable() {
    let tableStr = "";

    for (let i = 1; i <= 10; i++) {
      tableStr += `${number} x ${i} = ${number * i}\n`;   
    } 

    return tableStr;
  }

  if (numberInput === "") {
    console.log("Please enter a number");
  } else if (!Number.isInteger(number)) {
    console.log("Only integer values are allowed");
  } else {
    interface(`Multiplication table of ${number}`, printMultiTable());
  }
}

module.exports = { bmiCalculator, triangleClassifier, multiplicationTable };
