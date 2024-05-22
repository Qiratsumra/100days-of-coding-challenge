/*********************************************
 *****  Type Annotations With Arrays    ******
 *********************************************/

//Type annotations with arrays allow you to specify the expected data types of the array elements, ensuring type safety in your code.

// type annotation in array
let listOfVegetables :Array<string> = [`Tomato`,`Potato`,`Onion`,`Carrat`];

listOfVegetables.filter((listOfVegetable)=>listOfVegetable);
console.log(listOfVegetables);


/*********************************************************************
 *******    Type Annotations With Multidimensional Arrays   **********
 *********************************************************************/

 let mixArray : Array<string|number|boolean> = [1,"Apple","Car","Alexa",true]; 

 for (let i = 0; i < mixArray.length; i++) {
    console.log(mixArray[i]);
    
    
 }