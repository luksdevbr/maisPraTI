/*Create a function debounce(fn, delay) that takes a function fn and a delay in milliseconds, returning 
a new function that only executes fn if it is not called again within the specified interval.
*/

function debounce(fn, delay) {
  let time = null;

  return function(...args) {
    clearTimeout(time);

    time = setTimeout(() => fn.apply(this, args), delay); 
  }
}
