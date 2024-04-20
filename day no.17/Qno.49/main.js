/*Question 49: Function with Rest Parameters:
Write a function that takes a rest parameter representing multiple hobbies.
It should log each hobby with a statement saying you enjoy that hobby.*/
function hobbies() {
    var hobbys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbys[_i] = arguments[_i];
    }
    hobbys.forEach(function (hobby) { return console.log("I like to enjoy ".concat(hobby, ".")); });
}
hobbies("coding", "learning typescript projects", "gaming", "cooking", "playing outdoor games");
