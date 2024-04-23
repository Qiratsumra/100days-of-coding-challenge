/*Question 72: Block Scope with let and const:
Demonstrate block scope by creating a code block with {} that uses both let and const.
Show how variables declared inside the block are not accessible outside of it.*/
{
    var blockLet = 10;
    var blockConst = 45;
    console.log("".concat(blockLet, " inside the block scope "));
    console.log("".concat(blockConst, " inside the block scope"));
}
