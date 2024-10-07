// const user = {
//     username: "sayan",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to the website`);  // 'this' refers to the current context
//         console.log(this);
//     }
// };

// user.welcomeMessage();

// // Attempting to reassign the welcomeMessage method to a string
// user.welcomeMessage = "sam";
// console.log(user.welcomeMessage); // This will now log "sam" instead of calling a function

// // This would cause an error if uncommented, because user.welcomeMessage is no longer a function
// // user.welcomeMessage();

// Example of using 'this' outside of an object method
// console.log(this);  // In a browser environment, 'this' refers to the window object


// function chai (){
//     let username = "sayan"
//     console.log(this.username);
// }

// chai();



// const omg = function (){
//     let username = "sayan"
//     console.log(this.username);
// }

const omg = () => {
    let username = "sayan"
    console.log(this);
}

// omg ()

// const addtwo = (num1, num2) => {
//     return num1 + num2  //use  `{}` this then written return
// }
// const addtwo = (num1, num2) => num1 + num2  // not use `{}` this if you not written return
// const addtwo = (num1, num2) => (num1 + num2)
// const addtwo = (num1, num2) => {username : "sayan"} //if you not returning this logic
const addtwo = (num1, num2) => ({ username: "sayan" }) //if you returning this logic




console.log(addtwo(10, 10));


const arr = [2, 3, 4, 5, 6]

arr.forEach(function () {})
