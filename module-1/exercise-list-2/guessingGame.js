/*Write a script that generates a random number from 1 to 100 and asks the user to guess it. 
Use a while loop to repeat until the correct guess, counting attempts and displaying "higher" or "lower" 
for each incorrect guess.*/

const prompt = require("prompt-sync")();

function guessingGame() {
  const correctNumber = Math.floor(Math.random() * 100 + 1);

  let userGuess;
  let attempts = 0;
  let hint = "?";
  let win = false;

  do {
    console.clear();

    console.log("=====================Guessing Game=======================");
    console.log(`Attempts: ${attempts}`);
    console.log(`Hint: ${hint}`);
    console.log("=========================================================");

    userGuess = Number(prompt("Enter your guess (1-100): "));

    if (!Number.isInteger(userGuess)) {
      hint = "Please enter an integer number";
      continue; 
    }

    hint = userGuess < correctNumber ? "Higher" : "Lower";
    
    console.log("---------------------------------------------------------"); 

    attempts += 1

    if (userGuess === correctNumber) {
      win = true;
      break;
    }

  } while (attempts < 10);

  console.clear();

  console.log(`========================${win ? "You Won" : "You Lost"}==========================`);
  console.log(`Your guess: ${userGuess}`);
  if (!win) console.log(`Correct number: ${correctNumber}`);
  console.log(`Attempts: ${attempts}`);
  console.log("=========================================================");
}

guessingGame();
