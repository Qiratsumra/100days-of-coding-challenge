// Question 127: Convert a traditional function expression to an arrow function.
//traditional functions || basic function: 
var traditionalFunction = function (num1, num2, num3) {
    return num1 - num2 + num3;
};
// arrow function:
var arrowFunction = function (num1, num2, num3) { return num1 - num2 + num3; };
// print the traditional function :
console.log(traditionalFunction(20, 3, 10));
//print the arrow function:
console.log(arrowFunction(20, 3, 10));
