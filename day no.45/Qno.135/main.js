//Question 135: Explain how you can format a JSON string with proper indentation for readability.
var person = {
    name: "Alish",
    age: 23,
    country: "Pakistan",
    city: "Karachi"
};
var convert = JSON.stringify(person);
console.log(convert);
