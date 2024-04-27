/*Question 90: Checking if a Value is NaN:
Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.*/
function isValueIs(value) {
    return isNaN(value);
}
;
console.log(isValueIs("qirat")); // output is true because it is string not a number:
console.log(isValueIs(209)); //output is false because it is a number not a string;
