/*Question 84: Replacing Text in a String:
Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".*/
function replaceText(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceText("I love JavaScript and JavaScript is awesome!"));
