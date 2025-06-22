/*Given a string (e.g., "hello hello world world"), use if/else and for to extract
all unique words and display them in an array.*/

function uniqueWords(str) {
  let strArray = str.replace(/[^\w\s]/g, "").toLowerCase().split(/\s+/);
  let wordsArray = [];
  
  for (let i = 0; i < strArray.length; i++) {
    const word = strArray[i];

    if (!wordsArray.includes(word)) {
      wordsArray.push(word);
    }   
  }
 
  return wordsArray;
}

console.log(uniqueWords("Hello hello world world"));
