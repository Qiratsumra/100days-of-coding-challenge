/*Question 74: Swapping Variables:
Demonstrate how to swap the values of two variables.
Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
Explain & TIP: Swapping variables is a common task.
You can use a temporary variable to hold one value while you swap them around.
It's like juggling where you temporarily place one ball in a basket to free up your hand.*/
// initials the values:
var a = 5;
var b = 10;
//print the initialized value: 
console.log("value of a = ".concat(a));
console.log("value of b = ".concat(b));
var c = a;
a = b;
b = c;
console.log("now the b = ".concat(b));
