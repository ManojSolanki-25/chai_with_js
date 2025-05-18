let number = 10
console.log(number);

let classNumber = new Number(10000000.00);
console.log(classNumber)
console.log(classNumber.toLocaleString('en-IN'));  // separted by comma and default toLocalString function is give americal standard if we want to change into india so add en-IN
console.log(classNumber.toPrecision(1))


// in js have powerfull library which is math easy to use and use to undestand it have predefine function which we are use below
// math library is predefault library in js you have not add in external sources it is internal configure to js.


classNumber = 100.5

console.log(Math.round(classNumber)); // below of 5 it give lower value and above of 5 it give higher value in 5 also give higher value after the dot
console.log(Math.ceil(classNumber)); // it always return higher value in decimal values
console.log(Math.floor(classNumber)); // it always return lower value 

console.log(Math.random()) // random it always return 0 to 1
console.log((Math.round(Math.random() * 10) + 1))  // randome return between 0 to 1 so we mutilple by 10 so we get 0 to 10 and we avoid 0 that's why add + 1 after adding add also get value aoumng 0 to 11 and use round 

let min = 100
let max = 1000


console.log(Math.round((Math.random() * (max - min + 1)) + min)) // this logic return always value between 100 to 1000