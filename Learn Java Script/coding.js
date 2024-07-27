// const code = ['js', 'java', 'c', 'c++', 'python']


// const val = code.forEach((item) => {
//     console.log(item);
//     return item 
// });

// // foreach loop value not returning
// console.log(val);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

// const nums = myNums.filter((num) => num > 4)
// const nums = myNums.filter((num) => {
//     // num > 4
//     return num > 4
// })


const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter( (bk) => bk.genre === 'History')
const userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
});


// console.log(userBooks);




const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = mynumbers.map((num) => {
//     return num + 10
// })



const newNum = mynumbers
    .map((num) => num * 10)
    .map((num) => num + 1)      // this methods call chaining method
    .filter((num) => num >= 40)

console.log(newNum);
