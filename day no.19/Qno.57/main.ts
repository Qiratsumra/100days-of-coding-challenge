//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

// list of grades:
let grades:number[]=[99.85,50,75,77,65];

let averageGrades=grades.reduce((total , grade)=> total + grade)/grades.length;

console.log(averageGrades);
