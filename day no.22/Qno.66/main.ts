/*Question 66: Logical AND Verification: 
Create a function that checks two boolean (true or false) values. 
It should only say true if both are true, using the && operator. 
For instance, checkBothTrue(true, false) should be false.*/


function checkBoolean(value1:boolean,value2:boolean) {
    return value1 && value2
};

console.log(checkBoolean(true,true));
console.log(checkBoolean(true,false));
