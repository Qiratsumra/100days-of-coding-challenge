//Question 135: Explain how you can format a JSON string with proper indentation for readability.

const person = {
    name:"Alish",
    age:23,
    country:"Pakistan",
    city:"Karachi"
};

const convert = JSON.stringify(person);
console.log(convert);
