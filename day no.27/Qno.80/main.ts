/*Question 80: Updating Object Properties: 
Add a property named color to the existing car object, 
and then update the year property to 2021. 
Show how to perform these operations.*/

// Starting with our car object
let car = {
    make: "Suzuki",
    model: "Cuore",
    year: 2016
};
car["color"]= "Golden"; 
car.year = 2021; 
console.log(car); 