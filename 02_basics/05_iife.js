// function dbConnection(){
//     console.log("DB Connnection inside dbConnection() function.");
    
// }

// dbConnection()

// IIFE = Immediately Invoked Function Expression

// global scope k polution se problem hoti h so global function is varible k polution ko rokne k liye iife ka use kiya jata h and immediate funtion invoke krke k liye bhi. 
// when in single file we use multiple iife function so use semicolumn of all function after the excution. below in dbConnection function use seicolumn.


(function dbConnection(){
    console.log("DB Connnection inside dbConnection() function.");
    
})();


console.log(( (num1, num2) => (num1 + num2))(2, 3))
// fist bracket declaration and second braket is excution as normal function chai() below chai is also parenthisis
// ()()
// console.log(
//     (
//         () => {
//             console.log("THIS IS ARROW FUNCTION.")
//         }
//     )()
// );
