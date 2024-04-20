/*Question 47: Advanced Array Destructuring: 
Given an array of objects representing different laptops, each with properties make, model, and year, 
use array destructuring to assign the first and second laptops to variables. Then, log these variables.*/

interface laptops{
    make:string,
    model:string,
    year:number
}
let laptop1: laptops={
    make:"Dell",
    model:"E-6440",
    year:2013
};

let laptop2: laptops={
    make:"Apple",
    model:"Mac Book Pro",
    year:2020
}
console.log("Laptop no.1 properties:",laptop1);
console.log("Laptop no.2 properties:", laptop2);
