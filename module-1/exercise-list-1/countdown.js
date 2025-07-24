/*Implement a program that displays a countdown from 10 to 1 in the console using a for loop.*/

async function printDots() {
  for (let i = 0; i < 3; i++) {
    process.stdout.write(".");

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

async function countdown(min, max) {
  for (let i = max; i >= min; i--) {
    process.stdout.write(`${i}`);
  
    await printDots();

    console.log("");
  }
}

countdown(1, 10);
