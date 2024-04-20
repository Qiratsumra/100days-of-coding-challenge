/* Enhanced Laptop Object: 
Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.*/

interface laptops{
    make:string,
    model:string,
    year:number
}

let laptop1 :laptops ={
    make:"Dell",
    model:"E-6440",
    year:2013
};

let laptop2 : laptops={
    make:"Apple",
    model:"Mac Book Pro",
    year:2021
}
console.log(laptop1);
console.log(laptop2);

