/*Question 48: Combining Arrays with Spread Operator: 
Suppose you're comparing prices of two different sets of laptops. 
Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/

let set1 :number[]=[1500,1000,2000,5000];
let set2:number[]=[2500,600,3000,4500];
let combinedSet= [...set1,...set2].sort((set1,set2)=>set1 - set2);
console.log(combinedSet);


