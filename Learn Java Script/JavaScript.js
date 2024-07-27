//Function JS

function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}


// sayMyName()

// function addTwoNumbers(number1, number2) {  //(number1, number2) this are called perameter
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {  //(number1, number2) this are called perameter
    // let result = number1 + number2
    // return result;

    return number1 + number2
}
const result = addTwoNumbers(10, 10)
// addTwoNumbers(10 , "a")  //(10 , "a")  this are called arguments
// console.log("result: ", result);

function loginusermessage(username) {
    if (!username) {
        console.log("Please enter a username ");
        return
    }
    return `$() just logged in`
}

console.log(loginusermessage("sayan"));