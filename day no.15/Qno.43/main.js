/*Unchanged Magicians:
Start with your work from Exercise 41.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and
one array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Suhani Shah", "Harry", "Tommy Cooper", "David"];
function make_great(_a) {
    var magicians = _a.slice(0);
    return magicians = [];
}
var show_magicians = __spreadArray(__spreadArray([], magicians, true), ["Devil"], false);
console.log("Original list: ".concat(magicians));
console.log("Modified list: ".concat(show_magicians));
