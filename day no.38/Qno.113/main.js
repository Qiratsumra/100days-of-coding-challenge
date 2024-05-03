/*Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.*/
function checkForCanada(map) {
    if (map.has("Canada")) {
        var capital = map.get("Canada");
        if (capital !== undefined) {
            console.log("The capital of Canada is ".concat(capital));
        }
        else {
            console.log("Capital for Canada is not specified in the Map");
        }
    }
    else {
        // If the key does not exist, log that the key is not found
        console.log("Canada is not found in the Map");
    }
}
;
// / Example usage:
var countryCapitals = new Map([
    ["USA", "Washington D.C."],
    ["Canada", "Ottawa"],
    ["France", "Paris"],
    ["Japan", "Tokyo"]
]);
checkForCanada(countryCapitals); // This will log "The capital of Canada is Ottawa"
