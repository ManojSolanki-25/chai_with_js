//  PRIMITIVE DATATYPES

//  7 types of primitive datatypes => Number, String, BigInt, Boolean, Null, Undefined, Symnbol

let name = "manoj"
let age = 12
let isMarried = false
isDeveloper = true;



console.log(typeof name) // string
console.log(typeof age) // int
console.log(typeof isMarried) // boolean
console.log(typeof null) // object and also null is standalone value
console.log(typeof undefined) // undefined
console.table([name, age, isMarried])  // print a table 

// symbol use for uniq
const id = Symbol(101)
const ontherId = Symbol(101)

console.log(id === ontherId); // false

// null is special type of data type it is standalone value and typeof is object
console.log(typeof null)


// reference (non primitive data type)


// Array, Object and function
// all noo primitive data types are typeof object 
// function is typeof function object but it also count into object


let names = ['manoj', 'yagyam', 'yogesh', 'shubham']
let namesObject = {
    name: "manoj",
    age: 101
}



const myFunction = function(){
    console.log("Hello World");
};


console.log(typeof names); // object
console.log(typeof namesObject); //object
console.log(typeof myFunction); // function and also called function object

