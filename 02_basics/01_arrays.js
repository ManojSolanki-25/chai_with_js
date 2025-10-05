// Array
// array is a object and store collection of data into a single variable it wrraped the data.
// array is mixer of all datatypes it mean in single array store different types of data types.
// array is shallow copies it mean it is reference based whenever anyone change in original that time change into duplicate copy
// shollow copies work on reference based also just like a non primitive data types.

let myArr = [1, 2, 3, 4, 5, 6] // same as ruby minor changes have so they will discuss here.
let myArr2 =  myArr;
// myArr2.push(7);

// console.log(myArr); // [1,2, 3, 4, 5, 6, 7]
// console.log(myArr2);// [1,2, 3, 4, 5, 6, 7]

// shift and unshift this two methods but majorily this are not used

// console.log(myArr2.unshift(10)) // add this value in first and swap all the element by 1  and return length of array
// console.log(myArr2.unshift(13))
// console.log(myArr2);
// console.log(myArr2.shift()); // remove first index value and swap each element by 1 and return remove value.
// console.log(myArr2);





// there so many methods in array same as ruby they also know it.


// slice and splice


let originalArray = [0, 1, 2, 3, 4, 5, 6]

// console.log("A :", originalArray); // [0, 1, 2, 3, 4, 5, 6]
// 
// console.log(originalArray.slice(1, 3)); // here 3 index is excluded. and output -> [1, 2]
// console.log("B: ", originalArray); // [0, 1, 2, 3, 4, 5, 6]
// 
// console.log(originalArray.splice(1, 3)); // [1, 2, 3] here 3 index is include and one major changes is splice change originalArray remaining all the value after the splice.
// console.log("C: ", originalArray); // [0, 4, 5, 6]





// concat - merge to array into single array and return new array
// push  - push also merge two arrays and output in store in first array it is not return new array
// flat - flat nestaed array into a single array of the elements

// console.log(Array.from("manoj")) // convert into array 
// console.log(Array.from({name: "manoj"})); // return empty array because we not define convert array of keys bases and values bases.


const age = 10
const age1 = 20
const age2 = 30

// console.log(Array.of(age, age1, age2)); // [10, 20, 30]

// console.log(Array.isArray("manoj"))  // check valid input is a array or not return boolean value.

const arr = [1, 2, 3, 4]
const arr2 = [4, 5, 6, [7, 6 , 5],7]


// arr.push(arr2)
// console.log(arr);

// console.log([...arr, ...arr2].flat());





const a = [1, 2, 3, 4, 4, 54, 4, 5, 6, 99]

// console.log(a.fill(1));
console.log(a.filter(item => item === 99 ));








