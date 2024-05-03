//Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function logicalCondition(num) {
    return num % 2 === 0 && num % 3 === 0;
}
;
console.log(logicalCondition(12));
console.log(logicalCondition(14));
