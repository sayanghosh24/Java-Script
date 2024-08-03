// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select elements from the DOM
const guessForm = document.getElementById('guessForm');
const guessField = document.getElementById('guessField');
const guessesDisplay = document.getElementById('guesses');
const remainingDisplay = document.getElementById('remaining');
const messageDisplay = document.getElementById('message');
const newGameButton = document.getElementById('newGame');

// Initialize game state variables
let prevGuesses = [];
let remainingGuesses = 10;
let gameEnded = false;

// Event listener for the guess submission form
guessForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    if (!gameEnded) {
        const userGuess = parseInt(guessField.value);

        // Validate the user's guess
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            setMessage('Please enter a valid number between 1 and 100.');
        } else {
            checkGuess(userGuess);
        }

        guessField.value = ''; // Clear the input field
    }
});

// Function to check the user's guess
function checkGuess(guess) {
    if (prevGuesses.includes(guess)) {
        setMessage('You already guessed that number!');
    } else {
        prevGuesses.push(guess); // Add the guess to the array of previous guesses

        // Display the guessed number
        guessesDisplay.textContent = prevGuesses.join(', ');

        // Decrease the remaining guesses
        remainingGuesses--;

        // Update the remaining guesses display
        remainingDisplay.textContent = remainingGuesses;

        // Check if the guess is correct
        if (guess === randomNumber) {
            gameOver(true);
        } else if (remainingGuesses === 0) {
            gameOver(false);
        } else {
            // Provide feedback on the guess
            const message = guess < randomNumber ? 'Too low!' : 'Too high!';
            setMessage(message);
        }
    }
}

// Function to end the game
function gameOver(won) {
    gameEnded = true;
    const message = won ? `Congratulations! You guessed the number ${randomNumber} correctly.` : `Game over. The number was ${randomNumber}.`;
    setMessage(message);

    // Disable the guess input and submit button
    guessField.disabled = true;
    guessForm.querySelector('button').disabled = true;

    // Show the New Game button
    newGameButton.style.display = 'block';
}

// Function to set messages in the message display area
function setMessage(message) {
    messageDisplay.textContent = message;
}

// Event listener for the New Game button
newGameButton.addEventListener('click', function() {
    // Reset game variables
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuesses = [];
    remainingGuesses = 10;
    gameEnded = false;

    // Reset displays
    guessesDisplay.textContent = '';
    remainingDisplay.textContent = remainingGuesses;
    messageDisplay.textContent = '';

    // Enable the guess input and submit button
    guessField.disabled = false;
    guessForm.querySelector('button').disabled = false;

    // Hide the New Game button
    newGameButton.style.display = 'none';
});
