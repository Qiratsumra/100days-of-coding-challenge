// enum 
// is a set of value.
// which return index or define index.
// or return value.
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days["Saturday"] = "2";
})(Days || (Days = {}));
;
var Day1 = Days["Friday"];
console.log(Day1);
var today = Days.Wednesday;
console.log("Today day is ".concat(Days["Wednesday"]));
