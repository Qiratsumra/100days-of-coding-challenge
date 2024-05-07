// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.


let arrowFunction =  (...num1:number[]) =>{
    return num1.reduce((total,number)=>total * number) };

    console.log(arrowFunction(20,2,2));
    