/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

//making guest list: 
let guests:string[]=["Saeed","Abari","Sumra","Kinza"];

// guest unable to come:
let unableToCome=guests[1];

// add a new guest in the replacement of guest who is not come
guests.splice(1,1,"Ali");

// add a  new guest in starting of list:
guests.unshift("Sara")

// add a new guest in the endinng of list:
guests.push("Sana");

// add a new guest in the middle of the list:
let middle = Math.floor(guests.length/2);
guests.splice(middle,0,"Qirat");

// // print the message for the guest who unable to come:
console.log(unableToCome,"is not join us for grand dinner");

// print message for bigger table:
console.log("Great New");
guests.forEach(guest=>console.log(`${guest} is inviting for grand dinner`))

 

