/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
import inquirer from "inquirer";
console.log("\t Welcome to Alien Color Game \t");
let alien = await inquirer.prompt([{
        name: "color",
        type: "list",
        choices: ["green", "yellow", "red"],
        message: "Select the color"
    }]);
if (alien.color === "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else if (alien.color === "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alien.color === "red") {
    console.log("Your are fail");
}
else {
    console.log("Try again");
}
