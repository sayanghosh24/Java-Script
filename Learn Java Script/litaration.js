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
while (arr<myArr.length) {
    // console.log(`value is ${myArr[arr]}`);
    arr = arr + 1
}

// dowhile

let score = 1
do {
    console.log(`score is ${score}`);    
    score ++
} while (score <=10);



