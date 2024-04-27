/*Question 83: Converting to Upper and Lower Case:
Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.*/
function caseConvertion(personName) {
    var upperCase = personName.toUpperCase();
    var lowerCase = personName.toLowerCase();
    console.log("Upper Case : ".concat(upperCase, " , lower case : ").concat(lowerCase));
}
;
caseConvertion("Qirat");
caseConvertion("I'm learning typescript");
