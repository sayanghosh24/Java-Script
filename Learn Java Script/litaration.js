// for loop 
// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best num");
    }

    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value : $"j" and inner loop ${i}`);

        // console.log(i + '*' + j + ' = ' + i*j);
    }

}

let myArray = ["a", "b", "c"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    // const element = myArray[index];
    // console.log(element);
}



// Break & Continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 10) {
//         console.log(`Detected 10`);
//         break
//     }
//     console.log(`Value of i is ${i}`);

// }


for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        // console.log(`Detected 10`);
        continue
    }
    // console.log(`Value of i is ${i}`);

}





// while & do while loop

// while

let index = 0
while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2
}

let myArr = [`a`, `b`, `c`, `d`]
let arr = 0
while (arr < myArr.length) {
    // console.log(`value is ${myArr[arr]}`);
    arr = arr + 1
}

// dowhile

let score = 1
do {
    // console.log(`score is ${score}`);
    score++
} while (score <= 10);




// Some types of loops

// forof loop

// ["", "", ""]
// [{} , {} , {}]

let array = [`1`, `2`, `3`, `4`, `5`]

for (const num of array) {
    // console.log(num);
}



const greeting = "hello world!"

for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
}


//Maps

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'United State Of America')
// map.set('FR', 'Franch')
// map.set('IN', 'India')

// console.log(map);

// for (const [key,value] of map) {
//     // console.log(key , ':-', value);
// }

// const myobj = {
//     game1 : 'xyz',
//     game2 : 'abc'
// }

// for (const [key ,value] of myobj) {
//     console.log((key , ':-', value);
// }


// forin loop

const myobj = {
    game1: 'xyz',
    game2: 'abc',
    game3: 'zyx',
    game4: 'cba'
}

for (const key in myobj) {
    // console.log(`${key} game name is for ${myobj[key]}`);
}


const programing = ['java', 'js', 'ruby', 'c', 'c++']

for (const key in programing) {
    // console.log(`${key} programing language is ${programing[key]}`);
}


const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State Of America')
map.set('FR', 'Franch')
map.set('IN', 'India')

for (const key in map) {
    // console.log(key);
}




// foreach loop

const code = ['js', 'java', 'c', 'c++', 'python']

// code.forEach(function (item) {
//     console.log(item);
// });


// code.forEach((item) => {
//     console.log(item);
// });


// function printme (item){
//     console.log(item);
// }

// code.forEach(printme);


// code.forEach((item , index , arr) =>{
//     console.log(item , index , arr);
// })



const coding = [
    {
        langName: "javascript",
        langVersion: "javascript",
    },
    {
        langName: "java",
        langVersion: "java",
    },
    {
        langName: "python",
        langVersion: "python",
    },
]

coding.forEach((item) => {
    console.log(item.langName,item.langVersiona );
})
