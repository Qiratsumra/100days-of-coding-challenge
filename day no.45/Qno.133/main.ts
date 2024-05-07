// Question 133: Write a JavaScript object and convert it into a JSON string.

const person={
    name:"Hira",
    age:26,
    country:"Pakistan",
    city:"Lahore"
};


let jsonString =JSON.stringify(person);
console.log(jsonString);
