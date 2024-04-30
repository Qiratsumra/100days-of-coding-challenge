/*Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way.
The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.*/


function getCurrentDataFormate():string{
    const now = new Date();
    const day = String(now.getDate()).padStart(2,"0");
    const month = String(now.getMonth()+1).padStart(2,"0");
    return `${now}-${day}-${month}`;
};

console.log(getCurrentDataFormate());

