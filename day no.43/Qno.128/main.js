// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
var arrowFunction = function () {
    var num1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num1[_i] = arguments[_i];
    }
    return num1.reduce(function (total, number) { return total * number; });
};
console.log(arrowFunction(20, 2, 2));
