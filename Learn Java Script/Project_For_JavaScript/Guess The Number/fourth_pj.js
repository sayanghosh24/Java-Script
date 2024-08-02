const randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')    // create a paragraph

let prevGuess = []   // show an array in previous Guesses number by usesrs
let numGuess = 1   // how many attempt to guesses the users number 
let number = randomNumber;  // the number to be guessed by the user  || Users guesses 1 - 10 then submit button will disable 

let playGame = true  // create a variable 


function valiDateGuess(guess){
    // users get a valid number (ex: not a negative number )
}


function checkGuess(guess){
    // valid a number to check this 
}


function displayGuess(guess){
    // clean a value , update a array , print a array 
}


function displayMassege(massage){
    // display a massege to the user
}


function newGame(){
    // reset a game , clean a array , disable a button , reset a number 
}

function endGame(){
    // display a massege to the user , disable a button , clean a array , reset a number
}