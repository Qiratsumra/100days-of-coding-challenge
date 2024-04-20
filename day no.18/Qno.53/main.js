/*Question 53: Pulling Apart a Nested Object:
Imagine you have a list inside another list that shows what a computer programmer knows,
like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/
var computerList = {
    frameWorks: ["Node Next", "Node JS", "Common.JS"],
    tools: ["CPU", "RAM", "Storage", "Software System"],
    codingLanguages: ["Typescript", "Java", "Javascript", "HTML"]
};
var frameWorks = computerList.frameWorks, tools = computerList.tools, codingLanguages = computerList.codingLanguages;
console.log("Specific Skill is: ".concat(frameWorks[0], ", ").concat(tools[1], ",").concat(codingLanguages[2], "."));
