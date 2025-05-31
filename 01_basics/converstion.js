//  Conversion of Data Type OR type casting.


let number = "10abs"

console.log(number);
console.log(typeof number);
console.log(typeof(number));

let convertInNumber = Number(number)
console.log(convertInNumber)
console.log(typeof(convertInNumber));

// in   => out  => typeof
// 10   => 10   => number
// "10" => 10   => number
// "10ab" => NaN => number      Nan = Not a Number, NaN is also special data type.



let isLoggedIn = "manoj"

// console.log(isLoggedIn)
// console.log(typeof(isLoggedIn));

let convertInBoolean = Boolean(isLoggedIn)
console.log(convertInBoolean);
console.log(typeof(convertInBoolean));


// inout   =>  output  =>  typeof
// true    => true     =>  Boolean
// false   => false    =>  Boolean
// 1       => true     =>  Boolean
// 0       => false    =>  Boolean
// ""      => false    =>  Boolean
// "manoj  => false    =>  Boolean


let someNumber = false

let convertInString = String(someNumber)

console.log(convertInString);
console.log(typeof(convertInString));


// inout   =>  output  =>  typeof
//  33     =>   33     =>  String
// true    => true     =>  String
// false   => false    =>  String



// OPERATION

console.log(true)  // true
console.log(+true); // 1
console.log(1 + "2"); // 12
console.log("1" + 2); // 12
console.log("1" + "2"); // 12
console.log(1 + 2 + "2"); // 32
console.log("1" + 2 + 2); // 122

let counter = 100
console.log(counter); // 100
counter++
console.log(counter); // 101
++counter
console.log(counter); // 102





let x = 3
let y = x++
console.log(`X:${x}Y:${y}`);   // x:4 , y = 3

let a = 3
let b = ++a
console.log(`a:${a}b:${b}`); // a=4 b= 4


let p = 4n;
let q = ++p;
console.log(`p:${p} q:${q}`);   // p:5 , q = 5


let s = 4n;
console.log(s);
let v = s++;
console.log(`s:${s.toString()} v:${v.toString()}`);   // s:5n , v = 4n
console.log(s.toString());

