/*Great Magicians: 
Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

// Here is assignment no:41
let magicians:string[]=["Suhani Shah","Harry","Tommy Cooper","David"];

function show_magicians(magicians:string[]) {
    magicians.forEach(magician=>console.log(magician))
    
};


// Here is assignment no:42
function make_great(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + "Great";
        
    };
};
// modified list:
make_great(magicians);

// Actually modified list:
show_magicians(magicians);