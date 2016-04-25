var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var guessArray = [1,1,1,1,1,1];

while (isSunk === false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    guess = parseInt(guess,10);
    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;

        if (guessArray[guess] === 0) {
            alert("ALREADY GUESSED!");

        } else if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            guessArray[guess] = 0;
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
                "which means your shooting accuracy was " + (3/guesses);

alert(stats);