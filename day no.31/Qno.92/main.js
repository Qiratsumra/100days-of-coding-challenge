//Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement(arra) {
    return arra.pop();
}
;
var fruits = ["Apple", "Mango", "Banana", "Pineapple"];
console.log(removeLastElement(fruits));
console.log(fruits);
