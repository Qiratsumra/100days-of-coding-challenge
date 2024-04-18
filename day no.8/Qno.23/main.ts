/*Conditional Tests: 
Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let x=20;
let y=25;

// Creating the five test for true:
console.log("\tCreeating the five tests for true.\t");

// Test no.1:
console.log("20 is not equals to 25");
console.log(x != y);

// Test no.2:
console.log("20 is less than 25");
console.log(x<y);

// Test no.3:
console.log("25 is greater than 20");
console.log(y>x);

// Test no.4:
console.log("20 is equals to 20");
console.log(x == x);

// Test no.5:
console.log("25 is not equals to 20");
 console.log(y != x);
 
//  Creating the five test for false:
console.log("\tCreating the five tests for false.\t");

// Test no.6:
console.log("20 is equals to 25");
console.log(x==y);

// Test no.7:
console.log("20 is greater than 25");
console.log(x>y);

// Test no.8:
console.log("25 is less than 20");
console.log(x>y);

// Test no.9:
console.log("20 is equals to 25");
console.log(x==y);

// Test no.10:
console.log("25 is equals to 20");
console.log(y == x);