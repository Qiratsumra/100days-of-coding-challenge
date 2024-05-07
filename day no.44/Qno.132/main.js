"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = require("./function");
console.log((0, function_1.default)(20, 6));
var index_1 = require("./index");
console.log(index_1.message);
