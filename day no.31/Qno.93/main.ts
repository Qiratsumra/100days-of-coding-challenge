//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function mangoIsReplaceWithBanana(fruits:string[]):void{
    let index = fruits.indexOf("Banana");
    if(index !== -1) fruits[index] = "Mango";
};
const fruits:string[]=["Apple","Banana","Pineapple"];
mangoIsReplaceWithBanana(fruits);
console.log(fruits);
