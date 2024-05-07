// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
var add = function (a, b) {
    console.log(a + b);
};
executeCallback(add, 5, 3);
