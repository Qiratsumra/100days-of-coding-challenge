/*Hello Admin: 
Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website. 
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/


let user:string[]=["Admin","Sara","Saad","user2","user4"];

if (user.includes("Admin")) {
    console.log(`Hello Admin, would you like to see a status report?`);
}if (user.includes("Sara")) {
    console.log("Hello Sara, thank you for logging again.");
}if (user.includes("Saad")) {
    console.log("Hello Saad, thank you for logging again.");
}if (user.includes("user2")) {
    console.log("Hello user2, thank you for logging again.");
}if (user.includes("user4")) {
    console.log("Hello user4, thank you for logging again.");
};