/*Question 48: Combining Arrays with Spread Operator:
Suppose you're comparing prices of two different sets of laptops.
Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var set1 = [1500, 1000, 2000, 5000];
var set2 = [2500, 600, 3000, 4500];
var combinedSet = __spreadArray(__spreadArray([], set1, true), set2, true).sort(function (set1, set2) { return set1 - set2; });
console.log(combinedSet);
