/*Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.

• Start with your program from Exercise 14.
Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
//making guest list: 
var guests = ["Saeed", "Abari", "Sumra", "Kinza"];
// pointout the guest who is not come for dinner
var guestUnableToCome = guests[2];
// add a new guest in the replacement of guest who is not come
guests.splice(2, 1, "Ali");
// print the message for guest for invition:
guests.forEach(function (guest) { return console.log("".concat(guest, " is invite for dinner.")); });
// print the message guest who is unable to come:
console.log("".concat(guestUnableToCome, " is unable to come."));
