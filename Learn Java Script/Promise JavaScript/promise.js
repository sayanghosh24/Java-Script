const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB call , cryptofraphy , network
    setTimeout(function () {
        console.log('Asysnc task is complete');
        resolve()
    }, 1000)
})


promiseOne.then(function () {
    console.log('Promise is consumed')
})  //resolves connections .then()

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Asysnc task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');

})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: "sayan", email: "abc@example.com" })
    }, 1000)

})

promiseThree.then(function (user) {
    console.log(user);
})

const promisesFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // Corrected typo and syntax
        if (!error) {
            resolve({ username: "sayan", password: "123" });
        } else {
            reject("Error: this is the error");
        }
    }, 1000);
});

const username = promisesFour
    .then((user) => {
        console.log(user);
        returnuser.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejection"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // Corrected typo and syntax
        // let error = false; // Corrected typo and syntax
        if (!error) {
            resolve({ username: "JavaScript", password: "123" });
        } else {
            reject("Error: this is the js error");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive   // Promises is an object
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})