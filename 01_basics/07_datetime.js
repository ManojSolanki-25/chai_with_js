//  The typeof date is Object
//  in JS date is object.

let currentDate = new Date()
// console.log(currentDate);
// console.log(currentDate.toString());
// console.log(currentDate.toLocaleString());
// console.log(currentDate.getTime());

let newDate = new Date(2025, 0, 31)   // month start from 0 because it is array.
// console.log(newDate.toString());
// console.log(newDate.toLocaleDateString());

let newDate2 = new Date(2024, 10, 12);
// console.log(newDate2);
// console.log(newDate2.toLocaleDateString()); // only date print
// console.log(newDate2.toLocaleString()); // date with time print


let inputStringDate = new Date("12-28-2025") // mm-dd-yy in string month start from 1 because it is string.
// console.log(inputStringDate.toLocaleString());

let currentTimeStamp = Date.now() // output in mili seconds.
console.log(currentTimeStamp);
// console.log(currentTimeStamp.getTime());  this method is not work here.
console.log(Math.floor(Date.now()/1000)); // with the help of this it convert into seconds.






