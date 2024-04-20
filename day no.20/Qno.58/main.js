//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// using function to calculate the average socres:
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return score + sum; });
    return total / scores.length;
}
;
console.log(averageScore(20, 50, 55, 40, 474));
console.log(averageScore(10, 10, 10, 10, 10, 20));
