const jsUser ={
    name: 'John',
    "full name": "jhon shing",
    age: 30,
    mySym: "key1",
    address:'Anytown',
    email: 'john@anytown.com',
    isLoggedIn: false,        
}

console.log(jsUser.email)
console.log(jsUser["email"])
// console.log(jsUser."full name")

const mySym = Symbol("key1")
console.log(typeof jsUser.mySym)

jsUser.email ="john@anytownchatgpt.com"
// Object.freeze(jsUser)
console.log( )
