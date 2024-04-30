//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

let words:string[]=["Typescript","Javascript","Hello","World"];
let length1 :number[] = words.map(words => words.length);

console.log(length1);
