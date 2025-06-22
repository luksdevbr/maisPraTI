
const array = [3, 1, 4, 2];

//const sumArray = array.reduce((sum, value) => sum + value);
//const evenArray = array.filter((num) => num % 2 === 0 ? num : null );

//console.log(`Sum: ${sumArray}`);
//console.log(`Even array: ${evenArray}`);

/*let sumArray;
let evenArray = [];

array.forEach((num) => {
  if (num % 2 === 0)  {
    evenArray.push(num);
  }
});

console.log(evenArray);*/

/*function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
      
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  } 

  return array;
}

console.log(bubbleSort(array))*/

/*let array = [[3, 5, 10], [1, 10, 8], [10, 0, 9]];


let diagonalSum = 0;
let len = array.length - 1;

for (let i = 0; i < array.length; i++) {
  
  diagonalSum += array[i][len--] 

}

console.log(diagonalSum)*/



function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(array))
