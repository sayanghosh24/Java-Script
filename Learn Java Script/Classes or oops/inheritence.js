class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME IS ${this.username}`);
    }
}

class teacher extends User {
    constructor(username, email, password) {
        super(username)  // call the keyword & get access
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// const name = teacher("sayan","abc@email.com","123")  // Class constructor teacher cannot be invoked without 'new'
const name = new teacher("sayan", "abc@email.com", "123")

name.addCourse()

const newName = new User("Sayan")

// newName.addCourse() // newName have no access addCourse
newName.logMe() // newName have an access logMe

console.log(name === newName); // false
console.log(name === teacher); // false

console.log(name instanceof User); // true


