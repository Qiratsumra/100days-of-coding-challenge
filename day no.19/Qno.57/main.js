//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// list of grades:
var grades = [99.85, 50, 75, 77, 65];
var averageGrades = grades.reduce(function (total, grade) { return total + grade; }) / grades.length;
console.log(averageGrades);
