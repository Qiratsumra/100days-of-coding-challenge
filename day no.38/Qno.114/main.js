/*Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.*/
var studentInformation = new Map();
studentInformation.set("Ali Ahmed", 22);
studentInformation.set("Sara", 11);
studentInformation.set("Qirat", 13);
studentInformation.forEach(function (student, id) {
    console.log("Student Name ".concat(id, " , Student ID: ").concat(student));
});
