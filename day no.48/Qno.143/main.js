// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var conditionalPromise = new Promise(function (resolve, reject) {
    var num = Math.random() > 0.5;
    if (num) {
        resolve("sucess");
    }
    else {
        reject(new Error("Reject!"));
    }
    ;
});
conditionalPromise
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error); });
