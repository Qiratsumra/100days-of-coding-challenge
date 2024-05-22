/***************
 * UNION TYPES *
 ***************/
// union types in variable declaraation:
var unionType = "Hello World!";
console.log(unionType); //output is Hello World!
unionType = 400;
console.log(unionType); //output is 400;
// union types in function:
function total(num) {
    return num;
}
;
console.log(total(1)); //output is 1;
console.log("Hello world"); //output is Hello word
/*****************
 * LITERAL TYPES *
 *****************/
// literal types in variable declaration:
var literalTypes = 34;
literalTypes = [1, 2, 3433, 6554];
literalTypes = "Ali";
literalTypes = ["Qasim", "Qirat", "Saeed"];
literalTypes = [true, false];
literalTypes = true;
// literal type in function:
function literalFunc(mix) {
    console.log(mix);
}
;
literalFunc("Hey");
literalFunc(2);
literalFunc(true);
literalFunc(false);
literalFunc(undefined);
