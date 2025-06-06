let student = {
    name: "manoj solanki",
    class: "xii",
    cast: "genral",
    age: 19,
    isFeePaid: true,
    detail: function(){
        return `name: ${this.name}, class: ${this.class}, cast: ${this.cast}, age: ${this.age}, isFeePiad: ${this.isFeePaid}`
    }
}


// console.log(student.detail())
// student.name = "Shivam Solanki"
// console.log(student.detail())


//  depend on environment where you print this in node it is empty object
// but in browser console it is window object that why we accress DOM element using this.
// in older version js run only inside the browser and now it is run various environment.

// console.log(this) // {}


// function chai(){
//     let name = "manoj solanki"
//     console.log(this.name);   // undefined because we can not access this type inside the function it is only allow object.
// }

// chai()



// normal function
function  addSum(num1,num2){
    return num1 + num2
}

// in curly brases must be use return keyword
// explicit return
const sumTwoNumber = (num1, num2) => {
    return num1  + num2
}

console.log(sumTwoNumber(2, 3))

// implicit retrurn
const sum = (n1, n2) => (n1 + n2)

console.log(sum(5, 7));
