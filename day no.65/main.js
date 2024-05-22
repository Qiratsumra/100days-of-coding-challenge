/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/
function calculateArea(lengthOfArea, width) {
    return lengthOfArea * width;
}
;
var lengthOfArea = 2;
var width = 3;
var area = calculateArea(lengthOfArea, width);
console.log("The area of retangular is: ".concat(area));
/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/
function defaultOptionalParameters(defaultPara, optionalPara) {
    if (defaultPara === void 0) { defaultPara = "Alexa"; }
    if (optionalPara !== undefined) {
        console.log("Hey my name is ".concat(defaultPara, " and I'm ").concat(optionalPara, " years old"));
    }
    else {
        console.log("Hey my name is ".concat(defaultPara));
    }
    ;
}
;
defaultOptionalParameters("john"); //output is  "Hey my name is john"
defaultOptionalParameters("alexa", 27); //output is  "Hey my name is alexa and I'm 27 years old"
/***************************
 * FUNCTION REST PARAMETER *
 ***************************/
function restParameter() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total;
}
;
console.log(restParameter(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //output is 55
/******************
 * ARROW FUNCTION *
 ******************/
var arrowFunction = function (num1, num2) {
    return num1 + num2;
};
console.log(arrowFunction(20, 80));
/**********************
 * ANONYMOUS FUNCTION *
 **********************/
var annotationFunction = function () {
    var chickenSandwish = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        chickenSandwish[_i] = arguments[_i];
    }
    return chickenSandwish;
};
console.log(annotationFunction("Chicken Tikka Sandwish", "BBQ Sandwish"));
