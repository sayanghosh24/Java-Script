// Object literal

const user = {
    username:"sayan",
    loginCount: 8,
    signedIn: true,

    getUserDetail : function(){
        // console.log("Got user details from database");
        console.log(`username:${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username); 
// console.log(user.getUserDetail());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()

function User (username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    
    this.greeting = function(){
        console.log(`Welcome${this.username}`);
    }
    return this
}

const userOne = new User("Sayan" , 12 , true) 
const userTwo = new User("Sayan Ghosh" , 10 , false) //Overwrite the code 

console.log(userOne.constructor);
// console.log(userTwo);
