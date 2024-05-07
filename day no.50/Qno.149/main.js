// Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(function () {
    console.log("Call Back!");
}, 0);
console.log("End!");
