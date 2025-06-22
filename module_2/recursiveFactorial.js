/*Implement the function factorial(n) recursively; handle n < 0 by throwing an Error, and n === 0 by returning 1.*/

function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) throw new Error("Only positive integers are allowed"); 

  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));
