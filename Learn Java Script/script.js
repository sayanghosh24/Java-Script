//singleton

// Object literals
const mysym = Symbol("key1")
const JsUser ={
    name: 'John',
    "full name": "Jhon sins",
    age: 30,
    location:'italy',
    [mysym]: "mykey1", // print a symbol 
    email: "abc@gmail.com",
    isLoggedIn: false,
    lasrLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser [mysym])


JsUser.email ="abcd@gmail.com"
// Object.freeze(JsUser) // freeze a JsUser email
JsUser.email ="xyz@gmail.com"
console.log(JsUser)

JsUser.greeting =function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting());