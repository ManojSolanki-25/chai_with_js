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

console.log(isLoggedIn)
console.log(typeof(isLoggedIn));

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
