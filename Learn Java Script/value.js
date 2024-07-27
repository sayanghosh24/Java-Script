// const mynums = [1, 2, 3]

// const mytotal = mynums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)   // under reduces giveing two value first accumulator & second current value 


// using arrow function

// const mytotal = mynums.reduce((acc, curval) => acc + curval, 0)



// console.log(mytotal);



const shoppingCart = [
    {
        itemName: "javascript",
        price: 1300,
    },
    {
        itemName: "java",
        price: 1200,
    },
    {
        itemName: "python",
        price: 1299,
    },
    {
        itemName: "c++",
        price: 999,
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
