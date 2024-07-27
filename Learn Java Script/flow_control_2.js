// const userEmail = "sayan@email.com"
// const userEmail = ""
const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else{
//     console.log("No user email");
// }



// Falsy values
    // false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN ...
 
// Truthy values    
    // "0" , 'false' , " " , [] , {} , function () {}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }    


const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}

// false == 0 op -- true
// false == '' op -- true
// 0 == '' op -- true




// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")