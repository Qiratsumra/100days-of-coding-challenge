//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum(sum) {
    return sum.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
;
var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculateSum(sum));
