//Create an array of letters for the computer to pick from
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Create a function such that when a key is pressed
// the computer picks a random letter from the array
document.onkeyup = function(e) {

    // Create variables to store info
    var win = 0;
    var loss = 0;
    var guessesLeft = 0;

    // Create variables to store html
    var winText = document.getElementById("winCount");
    var lossText = document.getElementById("lossCount");
    var guessText = document.getElementById("guessCount");
    var letterText = document.getElementById("letterGuess");

    // Store random computer pick
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];

    // Store key that is pressed
    var keyPress = e.key;

    // Create if statement
    //If user key and computer key match
    if (keyPress === randomLetter) {
    winText.textContent = "Wins: " + win;
    win++;
    }
    else {
    lossText.textContent = "Losses: " + loss;
    loss++;
    }
    console.log(keyPress);
    console.log(randomLetter);
}