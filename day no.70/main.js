/*******************
 * INTERFACE INTRO *
 *******************/
;
var Person1 = {
    name: "Alice",
    age: 23
};
;
var person2 = {
    name: "Saeed",
    age: 35,
    country: "Pakistan",
    greet: function (message) {
        console.log("".concat(this.name, " say ").concat(message));
    }
};
person2.greet("HEllo");
;
;
;
var person1 = {
    email: "abbc@gmail.com",
    UserName: "Ahmed",
    password: "12@twy",
    phoneNumber: "2374-6378-44"
};
console.log(person1);
/********************
 * HTMLIMAGEELEMENT *
 ********************/
var imgElements = document.createElement("img");
imgElements.src = "image.jpg";
imgElements.alt = "My image";
if (imgElements.complete) {
    console.log(console.log("Image dimensions: ".concat(imgElements.naturalWidth, "x").concat(imgElements.naturalHeight)));
}
else {
    imgElements.addEventListener("load", function () {
        console.log("Image dimensions: ".concat(imgElements.naturalWidth, "x").concat(imgElements.naturalHeight));
    });
}
