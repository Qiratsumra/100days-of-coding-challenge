/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

import inquirer from "inquirer";

let alien = await inquirer.prompt([{
    name:"color",
    type:"list",
    choices:["green","yellow","red",],
    message:"Select the color"
}]);
if (alien.color === "green") {
    console.log("the player earned 5 points.");
    
}else if (alien.color === "yellow") {
    console.log(" the player earned 10 points.");
    
}else if(alien.color === "red"){
    console.log("the player earned 15 points.");
    
}else{console.log("OPPs! Try again");
}