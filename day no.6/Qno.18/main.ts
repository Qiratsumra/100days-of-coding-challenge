/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let placesToVisit:string[]=["NorWay","Egypt","Maldives","Paris","The Great Wall of China"];

//  Print your array in its original order:
console.log(placesToVisit,"The location list is in its original order.");

// Print your array in alphabetical order without modifying the actual list:
// also make the copy of original list to not change its original order:
console.log([...placesToVisit].sort(),"The location list is in its an aplhabetic order.");


// Show that your array is still in its original order by printing it.
console.log(placesToVisit,"The location list is still in its original order.");

// Print your array in reverse alphabetical order without changing the order of the original list.
// also make the copy of original list to not change its original order:
console.log([...placesToVisit].sort().reverse(),"The location list is in its reverse alphabetic order.");

// Show that your array is still in its original order by printing it again:
console.log(placesToVisit,"The location list is still in its original order.");

//  Reverse the order of your list. Print the array to show that its order has changed.
console.log([...placesToVisit].reverse() ,"The location list is change in reverse order.");


// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(placesToVisit, "The location list is back to its original order.");

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// also make the copy of original list to not change its original order:
console.log([...placesToVisit].sort(),"The location list is in alphabetic order.");

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//  also make the copy of original list to not change its original order:
console.log([...placesToVisit].sort().reverse(),"The location list is in reverse alphabetic order.");