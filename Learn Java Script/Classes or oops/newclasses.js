// ES6


class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abcd`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}


const users = new user("sayan" , "abc@gmail.com", "123")

console.log(users.encryptPassword());
console.log(users.changeusername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
} 

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}


const newUsers = new user("sayan" , "abc@gmail.com", "123")

console.log(newUsers.encryptPassword());
console.log(newUsers.changeusername());
