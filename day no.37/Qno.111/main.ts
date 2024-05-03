

// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).


function categorizePersonAge(age:number):string{
    if(age<=7){
        return "Child"
    }else if(age<=19){
        return "Teenager"
    }else {
        return "Adult"
    }
};

console.log(categorizePersonAge(1));
console.log(categorizePersonAge(19));
console.log(categorizePersonAge(23));

