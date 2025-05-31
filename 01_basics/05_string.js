let name = "manoj"
console.log(name)
let age = 24
// always use backticks to concatenate to string because inside the backticks have string interpolation.


console.log(`My name is ${name} and my age is ${age}`);



// instead of define string in above syntax it is not good in projects and it is outdated syntax you know that js is class and object and instance.
// so use string class because we get multiple functionality and use methods and perform task of a string it is more power full as compare of normal declaration.

let myName = new String('Manoj Solanki')

console.log(`My name is ${myName.toLowerCase()}`)
console.log(`My name is ${myName.toUpperCase()}`)
console.log(Number.MAX_SAFE_INTEGER)