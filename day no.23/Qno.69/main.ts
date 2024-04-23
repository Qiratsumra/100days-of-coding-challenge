/*Question 69: Dividing and Finding the Remainder: 
Write a function that divides two numbers and returns both the quotient and the remainder. 
Use an object to return both values.*/

function sum(num1:number,num2:number){
    let quotient=num1/num2;
    let remainder= num1 % num2;
    return {quotient,remainder};
};
console.log(sum(17,2));
console.log(sum(21,2));



