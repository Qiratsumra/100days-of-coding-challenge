// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var sum = {
    num1: 20,
    num2: 40,
    totolNum: function () {
        return this.num1 + this.num2;
    },
};
console.log(sum.totolNum());
