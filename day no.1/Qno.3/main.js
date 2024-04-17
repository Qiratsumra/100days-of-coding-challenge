//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "qirat saeed";
// toUpperCase:
console.log("This is upper case: ".concat(personName.toUpperCase()));
// toLowerCase:
console.log("This is lower case: ".concat(personName.toLowerCase()));
// title case:
// step1: to split
var word = personName.split(" ");
// step2:
var titlecase = " ";
// step3: using loop:
for (var i = 0; i < word.length; i++) {
    titlecase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
;
console.log("This is title case: ".concat(titlecase));
