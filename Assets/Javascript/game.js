//Create an array of letters for the computer to pick from
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Choose a random letter from the array
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);
// Create variables to store info
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Create variables to store html
var winText = document.getElementById("winCount");
var lossText = document.getElementById("lossCount");
var guessText = document.getElementById("guessCount");
var letterText = document.getElementById("letterGuess");

// Create a function for when the key is pressed
document.onkeyup = function (e) {

    // Create variable for key press
    var keyPress = e.key.toLowerCase();

    // Check if key pressed is a letter
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        // Create if statement to check if user matches computer and edit values
        if (keyPress === randomLetter) {
            //Add win and reset game
            wins++;
            winText.innerHTML = "Wins: " + wins;
            guessText.innerHTML = "Guesses Left: 10";
            letterText.innerHTML = "Your guesses so far: ";
            guessesLeft = 10;
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            console.log(randomLetter);
        }
        //If key press does not equal computer 
        else {
            //Subtract guess
            guessesLeft--;
            guessText.innerHTML = "Guesses Left: " + guessesLeft;
            if (guessesLeft === 9) {
                // Add what letter the user guessed
                letterText.append(keyPress);
            }
            else if (guessesLeft === 0) {
                // Reset game if no guesses left and select new letter
                losses++;
                lossText.innerHTML = "Losses: " + losses;
                guessText.innerHTML = "Guesses Left: 10";
                letterText.innerHTML = "Your guesses so far: ";
                guessesLeft = 10;
                randomLetter = letters[Math.floor(Math.random() * letters.length)];
                console.log(randomLetter);
            }
            else {
                //Add what letter the user guessed after first guess
                letterText.append(" , " + keyPress);
            }
        }
    }
}