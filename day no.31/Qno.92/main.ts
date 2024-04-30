//Question 92: Write a function to remove the last element from an array and return the removed element.


function removeLastElement<T>(arra:T[]):T|undefined{
    return arra.pop()
};
const fruits:string[]=["Apple","Mango","Banana","Pineapple"];
console.log(removeLastElement(fruits));
console.log(fruits);


 