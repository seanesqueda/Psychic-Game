//Create an array of letters for the computer to pick from
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Choose a random letter from the array
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

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
document.onkeyup = function(e) {
    
    // Create variable for key press
    var keyPress = e.key.toLowerCase();
    
    // Create if statement to check if user matches computer and edit values
    if (keyPress === randomLetter) {
        wins++;
        winText.innerHTML = "Wins: " + wins;
        guessText.innerHTML = "Guesses Left: 10";
        letterText.innerHTML = "Your guesses so far: ";
        guessesLeft = 10;
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
    } 
    else {
        guessesLeft--;
        guessText.innerHTML = "Guesses Left: " + guessesLeft;
        letterText.append(keyPress);
        if (guessesLeft === 0) {
            losses++;
            lossText.innerHTML = "Losses: " + losses;
            guessText.innerHTML = "Guesses Left: 10";
            letterText.innerHTML = "Your guesses so far: ";
            guessesLeft = 10;
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
        }
    }
}