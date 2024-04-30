//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function methodToReturnArrayNumber(numbers:number[]):number[]{
    return numbers.filter(number => number > 10);

};
let numbers :number[]=[5,10,15,20,25,30];
console.log(methodToReturnArrayNumber(numbers));
