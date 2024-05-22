// enum 
// is a set of value.
// which return index or define index.
// or return value.

enum Days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday="2",
};
const Day1 = Days[`Friday`]
console.log(Day1);


const today: Days = Days.Wednesday;
console.log(`Today day is ${Days[`Wednesday`]}`);
