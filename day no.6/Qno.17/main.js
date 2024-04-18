/*Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.*/
// make a guest list:
var guestsList = ["Dua", "Laiba", "Sara", "Haleema", "A.bari", "Saad"];
// select the guest who is not come: 
var guestUnableToCome = guestsList[3];
// add a new guest in the replacement of guest who is not come:
guestsList.splice(3, 1, "Ahmed");
// add a new guest in the starting of the list:
guestsList.unshift("Saeed");
// add a new guest in the ending of the list:
guestsList.push("Ali");
// add a new guest in middle of the list:
var middleGuest = Math.floor(guestsList.length / 2);
guestsList.splice(middleGuest, 0, "Qirat");
// print the message for the guest who unable to come:
// console.log(guestUnableToCome,"is not join us for grand dinner");
// print a message of great new:
// console.log("Great New!");
// guestsList.forEach(guest=>console.log(`HEY! ${guest} I'm invinting you for a grand dinner.`));
// using while loop condition to remove all the guest accept only two guest is remain in the  guest list:
while (guestsList.length > 0) {
    var removeGuest = guestsList.pop();
    console.log("Sorry! ".concat(removeGuest, " I can't invites you for dinner."));
}
;
//  print the message for last two guest that you are still invited;
// guestsList.forEach(lastTwoGuest=>console.log(`Lucky! ${lastTwoGuest} you are still invited.`)
// );
// also removes the last two guest;
guestsList.pop();
guestsList.pop();
// print the message that the last two guest is also remove:
console.log(guestsList, "Now no guest is invites for dinner.");
