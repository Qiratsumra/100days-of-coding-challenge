/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// Tests for equality and inequality with strings:
var personName = "Qirat";
// test for equality with string:
console.log("Qirat is equals to ".concat(personName));
console.log("Qirat" == personName);
// test for unequality with string:
console.log("qirat is equals to ".concat(personName));
console.log("qirat" == personName);
//  Tests using the lower case function:
// test for true:
var person = "QIRAT";
var name1 = "qirat";
console.log("qirat is equals to QIRAT after converting into lower case");
console.log(name1 == person.toLowerCase());
// test for false:
console.log("Qirat is equals to QIRAT after converting into lower case");
console.log(personName == person.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
var a = 2;
var b = 3;
// test for equality:
console.log("2 is not equals to 3");
console.log(a != b);
// test for inequality:
console.log("2 is equals to 3");
console.log(a == b);
// test for greater than:
console.log("3 is greater than 2");
console.log(b > a);
// test for less than:
console.log("2 is less than 3");
console.log(a < b);
// test for greater than + equals to:
console.log("3 is greater than 2");
console.log(b > a);
console.log("2 is greater than 3");
console.log(a > b);
// test for equality
console.log("2 is not equals to 3");
console.log(a != b);
console.log("2 is equals to 3");
console.log(a == b);
// test for less than:
console.log("2 is less than 3");
console.log(a < b);
console.log("3 is less than 2");
console.log(b < a);
// Tests using "and" and "or" operators:
// for and(&&) operators
console.log("3 is greater than 2 and 2 is not equals to 3");
console.log(b > a && a != b);
console.log("3 is greater than 2 and 2 is equals to 3");
console.log(b > a && a == b);
// for or(||)operators:
console.log("3 is greater than 2 or 2 is equals to 3");
console.log(b > a || a == b);
// Test whether an item is in a array
var fruits = ["Apple", "Mango", "Banana", "Orange", "Kiwi"];
console.log("Is Mango is includes in list");
console.log(fruits.includes("Mango"));
//  Test whether an item is not in a array
console.log("Is Pineapple is include in list");
console.log(fruits.includes("Pineapple"));
