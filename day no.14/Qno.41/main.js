/*Magicians:
Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
var magicians = ["Suhani Shah", "Harry", "Tommy Cooper", "David"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log("".concat(magician)); });
}
show_magicians(magicians);
