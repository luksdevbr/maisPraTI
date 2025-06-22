/*Implement the memoize(fn) function that caches previous calls to fn (by arguments), 
returning instant results on repeated invocations.*/

function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
      
    return result;
  }
}

function sum(a, b) {
  return a + b;
}

const memoizedSum = memoize(sum);

console.log(memoizedSum(5, 6));
console.log(memoizedSum(3, 7));
console.log(memoizedSum(9, 8));
console.log(memoizedSum(5, 6));
