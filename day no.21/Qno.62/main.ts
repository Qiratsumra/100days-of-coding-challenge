/*Question 62: Making a Student Template: 
Create a blueprint for student information, including their name, age, and the classes they're taking, 
and then fill in this blueprint with an example student.*/

/*Explain & TIP: This blueprint, called an interface, 
helps ensure all students have the same kind of information, making your code more organized.*/

interface studentInformation{
    name:string,
    age:number,
    class:string,
    subject:string[] 
};

let student1:studentInformation={
    name:"Ali Rehman",
    age:12,
    class:"XI-A",
    subject:["English","Math","Science","Urdu"]
}

console.log(student1);

let student2:studentInformation={
    name:"Sara",
    age:13,
    class:"XII-B",
    subject:["English","Computer","Maths","Urdu"]
};

console.log(student2);

