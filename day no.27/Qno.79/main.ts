/*Question 79: Creating and Accessing Object Properties: 
Construct an object representing a car with properties for make, model, and year. 
Then, show how you can access the model property of the car.*/

interface carProperties {
    make:string,
    model:string,
    year:number,
};

let myCar:carProperties={
    make:"Suzuki",
    model:"Cuore",
    year:2016
};

console.log(myCar.model +" "+ "This is car model");

