/*Write two functions:
○ pairsToObject(pairs) receives an array of pairs [[key, value], ...] and returns the equivalent object.
○ objectToPairs(obj) does the opposite, returning an array of pairs.
*/

const pairsArray = [
  [1, 6],
  [4, 7],
  [8, 9],
  [14, 27]
];

function pairsToObject(pairs) {
  if (!Array.isArray(pairs)) throw new Error('Input must be an array');

  for (const pair of pairs) {
    if (pair.length !== 2 || !Array.isArray(pair)) 
      throw new Error('Each element must be an array with exactly two elements');
  }

  return Object.fromEntries(pairs);
}

function objectToPairs(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) 
    throw new Error('Input must be a non-null object'); 

  return Object
    .entries(obj)
    .map(([key, value]) => [!isNaN(Number(key)) ? Number(key) : key, value]);
}


const pairsObj = pairsToObject(pairsArray);
console.log(pairsObj);

console.log(objectToPairs(pairsObj));

