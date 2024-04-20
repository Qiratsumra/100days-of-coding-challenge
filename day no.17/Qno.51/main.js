/*Question 51: Refactoring to Arrow Functions:
Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.*/
// simple function to calculate the area of rectangule
function calculateRectangle(rectangleLength, rectangleWidth) {
    return rectangleLength * rectangleWidth;
}
;
console.log("this is a way to find the area of rectangle:", calculateRectangle(4, 10), "using function method.");
// refact it into an arrow funnction:
var calculateRectangleArrow = function (rectangleLength, rectangleWidth) { return rectangleLength * rectangleWidth; };
console.log("this is a way to find the area of rectangle:", calculateRectangleArrow(4, 10), "using arrow function.");
