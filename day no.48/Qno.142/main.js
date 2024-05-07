// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello,World!");
    }, 2000);
});
helloPromise.then(function (resolve) { return console.log(resolve); });
