/*Create an interactive console menu that offers the user a choice of three options. 
Use switch-case to implement the logic for each selected option.*/

const prompt = require("prompt-sync")();
const math = require("./math");

let option;

do {
  console.log("\n=== Interactive Menu ===");
  console.log("[ 1 ] BMI Calculator \n[ 2 ] Triangle classifier\n[ 3 ] Multiplication table\n[ 0 ] Exit");
  optionInput = prompt("Option: ").trim();

  option = Number(optionInput);
  
  if (optionInput === "" || option < 0) {
    console.log("Please enter a valid option (0-3)");
  } else if (!Number.isInteger(option)) {
    console.log("Option must be an integer");
  } else {
    switch (option) {
      case 1:
        math.bmiCalculator();
        break;
      case 2:
        math.triangleClassifier();
        break;
      case 3:
        math.multiplicationTable();
        break;
    }
  }
} while (option !== 0);

console.log("Execution finished");
