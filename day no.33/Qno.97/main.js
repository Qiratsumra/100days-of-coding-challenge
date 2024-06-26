/*Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way.
The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.*/
function getCurrentDataFormate() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, "0");
    var month = String(now.getMonth() + 1).padStart(2, "0");
    return "".concat(now, "-").concat(day, "-").concat(month);
}
;
console.log(getCurrentDataFormate());
