/*Greetings:
Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.*/
var friends = ["Unzela", "Seemal", "Maira", "Dua"];
var message = "how are you?";
friends.forEach(function (friend) { return console.log("".concat(friend, " ").concat(message)); });
