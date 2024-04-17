//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string="qirat saeed";

// toUpperCase:
console.log(`This is upper case: ${personName.toUpperCase()}`);

// toLowerCase:
console.log(`This is lower case: ${personName.toLowerCase()}`);

// title case:
// step1: to split
let word:string[] = personName.split(" ");
// step2:
let titlecase:string=" ";
// step3: using loop:
for (let i = 0; i < word.length; i++) {
    titlecase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
    
};
console.log(`This is title case: ${titlecase}`);
