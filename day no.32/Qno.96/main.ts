//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculateSum(sum:number[]):number{
    return sum.reduce((accumulator,current)=> accumulator + current, 0);
};
const sum:number[]=[1,2,3,4,5,6,7,8,9,10];
console.log(calculateSum(sum));

