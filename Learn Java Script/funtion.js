// print a different name using function
/*
function code(name) {
        console.log("Hello" + name + "what's up bro");
        console.log("Hello" + name + "where are you from");
        console.log("Hello" + name + "what's your age");
        console.log("Hello" + name + "what's are you doing");
}

code(' Sayan ')
// calling different function 
code(' Rahul ')

// sum in two or three number using function
function num(a , b , c = 2) {
    console.log(a , b , c)
    return a + b + c;
}
result1 = 10+20;
result2 = 10+21;
result3 = 10+22+3;
result4 = 10+23;

console.log("The result is this sum : ",result1);
console.log("The result is this sum : ",result2);
console.log("The result is this sum : ",result3);
console.log("The result is this sum : ",result4);

// this the arrow function
const func1 = (s)=>{
    console.log("My arrow function is : ", s)
}

func1(34);
func1(66);
func1(84);

*/







// Chai or Java Script

// function addTwoNumbers(number1 , number2){ //number is a parameters
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1 , number2){ 
    // let result =result1 + result2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(10 , 10) //10,null is a arguments

// console.log("Result: " ,result)



function loginUserMessage(username ="Yooo Bro"){
    if(!username){ //!username or username === undefined
        console.log("Please enter a username")
        return
    }
    return `${username}just looged in`
}

// console.log(loginUserMessage("sayan"))
// console.log(loginUserMessage())



function calculateCardPrice(val1 , val2 , ...num1){
    return num1
}

// console.log(calculateCardPrice(200 , 400 , 500 , 600 , 700))

const user ={
    username:"Sayan" ,
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"Sam",
    price:299 
})


const myNewArray = [100 , 200 , 300 , 400 ]
function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100 , 200 , 300 , 400 ]))
