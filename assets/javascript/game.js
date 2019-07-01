var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessChoices = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function updateDom() {
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessLeft;
    document.getElementById('guessesSoFar').innerHTML = guessChoices;
}

updateDom();

document.onkeyup = function (event) {
    var userGuess = event.key;
      
    console.log('Computer guess is: ', computerGuess);

    console.log('key pressed was: ', userGuess);

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            guessLeft--;
            guessChoices = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            updateDom();
        }
            else {
                guessLeft--;
                guessChoices.push(userGuess);
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                updateDom();
            }
        }

        if (guessLeft === 0) {
            guessLeft = 9;
            losses++;
            guessChoices = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            updateDom();
        }

        
    }


