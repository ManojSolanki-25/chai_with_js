// with two types we declare object first one construction and second one literals 


// whenever we define object using construction they have singleton object.
//  Object.create()   // singleton. because object created by contruction.
// literals can not have singleton object


// below all declaretion is literals
const mySym = Symbol("This is Symbol") 

const myUser = {
    name: "manoj",
    [mySym]: "manoj solanki",
    email: "manoj.solanki@gemsessence.com",
    age: 20,
    location: "indore",
    "isLogIn": true
}
// console.log(myUser);


// console.log(myUser.name); // the deafult key of object is string thats why [] can we accress.
// console.log(myUser["name"]);

// console.log(myUser.isLogIn);


// console.log(mySym); // Symbol(This is Symbol)
// console.log(typeof mySym); // symbol




// lock the objec
// Object.freeze(myUser)

myUser.age = 24;
// console.log(myUser);


myUser.greeting = function(){
    console.log(`hello my user  i am  greeting ${this.name}`);
}

// console.log(myUser.greeting); // function anonymous

// console.log(myUser.greeting());




let newObj  = new Object()
// console.log(newObj);



const ob  = {
    name: "manoj",
    position: "software developer",
    salary: "10000"
}

// syntax to access object.
const {salary: s} = ob;
console.log(s)

// json = Java Script Object Notation.

