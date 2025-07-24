/*Write a program that generates and prints the first 10 numbers of the Fibonacci sequence using a for loop.*/

let a = 0;
let b = 1;
let c = 0;

const limit = 10;

for (let i = 0; i < limit; i++) { 
  process.stdout.write(`${a}`);

  if (i != limit - 1) {
    process.stdout.write(", ");
  }

  c = a + b;
  a = b;
  b = c;
}
