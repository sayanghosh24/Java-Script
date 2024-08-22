function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}


function createUser(username, email, password) {
    // SetUsername(username) // in js get a reference not call
    SetUsername.call(this, username) 

    this.email = email
    this.password = password
}

const newUser = new createUser("sayan", "sayan123@gmail.com", "123")
console.log(newUser);
