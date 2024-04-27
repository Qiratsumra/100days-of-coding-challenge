/*Question 83: Converting to Upper and Lower Case: 
Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.*/

function caseConvertion(personName:string){
    let upperCase = personName.toUpperCase();
    let lowerCase = personName.toLowerCase();
    
    console.log(`Upper Case : ${upperCase} , lower case : ${lowerCase}`);
    
};
caseConvertion("Qirat");
caseConvertion("I'm learning typescript")