// Question 133: Write a JavaScript object and convert it into a JSON string.
var person = {
    name: "Hira",
    age: 26,
    country: "Pakistan",
    city: "Lahore"
};
var jsonString = JSON.stringify(person);
console.log(jsonString);
