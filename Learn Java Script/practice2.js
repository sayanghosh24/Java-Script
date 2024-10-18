// JavaScript execution context

// Global EC context (.this)

// browser EC context "Window object"

// Execution Context type --
// 1st Global execution context
// 2nd function execution context
// 3rd eval execution context

// Memory Phase Type --
// Memory Creation Phase
// Execution phase

// val1 => undefined
// val2 => undefined
// addNum => defination
//result 1 => undefined
//result 2 => undefined

// execution phase 
// val1 = 10
// val2 = 5


// 1. global execution

// 2. Memory phase
// val1 -- undefined
// val2 -- undefined
// add num -- defination
// result 1 -- undefined
// result2 --undefined

// 3. Execution phase
// val1 = 10
// val2 = 5 ===>
    //add num -- new execution context(new variable enviroment + execution thread) ===>
        // memory phase
        // val1 --undefined
        // val2 -- undefined
        // total -- undefined

        // execution context
        // num1 -- 10
        // num2 -- 5
        // total --15

// global execution context works end then delete

// result1 -- 15
// result2 --    ===>
    // new variable enviroment + thread ===>
        // memory phase
        // val1 --undefined
        // val2 -- undefined
        // total -- undefined

        // execution phase
        // num1 -- 10
        // num2 -- 5
        // total --15
// Then repeat    


// Call Stack
// 1. global execution context
// 2. add num execution context




let val1 = 10
let val2 = 5

function addNum(num1 , num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1 , val2)
let result2 = addNum (10 , 2)
