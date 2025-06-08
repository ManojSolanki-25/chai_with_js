let arr = [1, 2, 2.5,3 , 5, 6]

for (const value of arr) {
    // console.log(value);
}

//  Map is special type of data types it is same as object but little beat difference it hold uniq type of keys if we are going to same key in multiple times so it override the values.
// we are not iterate object of for of loop but we also iterate map of for of loop.
// for of loop for basically used for arrays but we are use according to our need.
// map follow the inesertion order while object don't
let map = new Map()

map.set("a", 1)
map.set("b", 2)
map.set("c", 3)
map.set("a", 0)
// console.log(map);


for (const [key, value] of map) {
    // console.log(`KEY : ${key}, VALUE : ${value}`);
}


for (const element of "Manoj SOlanki...") {
    // console.log(element);
    
}


let obj = {a: 1, b: 2, c: 3, a: 0}
// console.log(obj);



// filter, map, and reduce in js
// all this array expect callback function. callback function this function who have not name.

//  filter return value who is true,
// all values return
// return single value just like sum of all element of array


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// foreach is return undefined 

let resultValue = numbers.forEach( (num ) => num*10)
console.log(`for each return value is ${resultValue}`);


// access only even value so use filter
let evenNumsWithFunction = numbers.filter( function (item){
    return item%2 == 0
})

console.log(evenNumsWithFunction);

let oddNumbersWithArrowFunction = numbers.filter( (item) => item%2 == 1 )
console.log(oddNumbersWithArrowFunction);


// perform any task of all the element and get update arrays so use map.

let resultWithFunction = numbers.map( function (num) {
    return num*10
})
console.log(resultWithFunction);

let resultWithArrowFunction = numbers.map( (item) => item*10 + 1 )
console.log(resultWithArrowFunction);



// reduce is return single value it take two argument first is accumlator and second is currentValue and it also take initial value.
// when sum of all element of array and get totalAmount inside the shoping card so use reduce of array.


let sumOfElememntWithFunction = numbers.reduce( function (acc, currentValue) {
    return acc + currentValue
}, 0)

console.log(sumOfElememntWithFunction);

let sumOfElementWithArrowFunction = numbers.reduce( (acc, currVal) =>  acc + currVal, 0 )
console.log(sumOfElementWithArrowFunction);


// chaning. when we use mutiple methods in array so called chaning
// just like we multiple of element of 10 and after that adding 5 of all element and after that select those element who is greater than 50 then chaning concept is introduce


const result = numbers
                .map( (num) => num*10 )
                .map( (num ) => num + 5)
                .filter( (num) => num >= 50)

console.log(result);
                

