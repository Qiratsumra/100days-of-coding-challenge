
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function studentGrades(score:number):string{
    if(score>=90){
        return "Grade A+One";
    }else if(score>=80){
        return "Grade A-One";
    }else if(score>=70){
        return "Grade A";
    }else if(score>=60){
        return "Grade B";
    }else if(score>=50){
        return "Grade C";
    }else if(score>=40){
        return "Grade D";
    }else{
        return "You are fail"
    }
};

console.log(studentGrades(87));
console.log(studentGrades(39));

