// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var _this = this;
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
