/*********************************************
 *****  Type Annotations With Arrays    ******
 *********************************************/
//Type annotations with arrays allow you to specify the expected data types of the array elements, ensuring type safety in your code.
// type annotation in array
var listOfVegetables = ["Tomato", "Potato", "Onion", "Carrat"];
listOfVegetables.filter(function (listOfVegetable) { return listOfVegetable; });
console.log(listOfVegetables);
/*********************************************************************
 *******    Type Annotations With Multidimensional Arrays   **********
 *********************************************************************/
var mixArray = [1, "Apple", "Car", "Alexa", true];
for (var i = 0; i < mixArray.length; i++) {
    console.log(mixArray[i]);
}
