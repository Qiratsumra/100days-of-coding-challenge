/*Question 68: Multiplying Decimals:
Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.*/
function decimalSum(num1, num2) {
    return Math.round(((num1 + num2) * 100) / 50);
}
console.log(decimalSum(15, 10));
