/*Question 63: Shape Shifter:
Write a program that can describe either a circle or a rectangle using a special type alias,
including properties unique to each shape.

Explain & TIP: A type alias lets you create a custom type.
It's like a shortcut for describing more complex information, such as the details of different shapes.*/
// define the circle shape
var circle = {
    kind: "circle",
    radius: 3.5
};
var rectangle = {
    kind: "rectangle",
    length: 4.5,
    height: 7.9
};
console.log(circle);
console.log(rectangle);
