/*Question 71: Compare let and const: 
Create two examples where let allows reassignment but const does not. 
Try to reassign a const-declared variable and catch the error.*/

//  let allows assignable in the same data type. 
let person:string="Qirat";
person="Saeed";
console.log(person);  

const personName:string="Ali";
// personName="Sara"  //Where const is not allow assignale in same data type
console.log(personName);//it print "Ali"  not "Sara" because const is not reassignable
