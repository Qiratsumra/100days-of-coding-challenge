/*Question 99: Generate a date object representing your next birthday and log it to the console.

Explain & TIP: When creating a Date object for a future event like a birthday,
you might need to adjust the year based on whether the birthday has already occurred this year or not.*/
function getNextBrithday(day, month) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        // if the birthday is passed this year ,use next year date:
        birthday.setFullYear(year + 1);
    }
    ;
    return birthday;
}
;
// replace with your birthday month and day:
var nextBirthay = getNextBrithday(6, 6);
console.log("Next birthday is on", nextBirthay.toLocaleDateString());
