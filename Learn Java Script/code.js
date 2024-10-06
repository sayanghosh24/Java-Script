// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "jhon"
tinderuser.isLoogedIn = false

// console.log(tinderuser)

const regularuser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jhon",
            lastname: "doe"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname)


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "e", 6: "f" }

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)


const users = [
    {
        id: "123abc",
        email: "abc@gmail.com"
    },
    {
        id: "123abc",
        email: "abc@gmail.com"
    },
    {
        id: "123abc",
        email: "abc@gmail.com"
    },
]

// users [1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoogedIn'));



//object destructureing

const course = {
    coursename: "Java Script",
    price: "999",
    courseInstructor: "Sayan"
}

const { courseInstructor: Instructor } = course
// console.log(courseInstructor);
console.log(Instructor);

// const navbar = ({company}) =>{  //destructuring

// }

// navbar(company = "sayan")

// {
//     "name" : "sayan",
//         "coursename" : "Javascript",
//             " price" : "100",
// }

// [
//     {},
//     {},
//     {}
// ]
