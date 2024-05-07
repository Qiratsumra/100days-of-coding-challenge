// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var person = {
    name: "John",
    place: function () {
        var _this = this;
        console.log(this.name);
        var innerPlace = function () {
            console.log(_this.name);
        };
        innerPlace();
    },
};
person.place();
