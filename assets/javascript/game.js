
// set up an array of letters for the computer to choose from
var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

//set up an array for user inputs to be pushed into
alreadyGuessed = [];

//have the computer pick a random letter
computerGuess = letters[Math.floor(Math.random() * letters.length)];

//set initial values for game
guessesLeft = 9;
wins = 0;
losses = 0;

//set initial HTML
document.querySelector("#wins").innerHTML = "Wins: " + wins;
document.querySelector("#losses").innerHTML = "Losses: " + losses;
document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
document.querySelector("#guesses").innerHTML = "Already Guessed: " + alreadyGuessed;

//reset function to reset guessesLeft, update all HTML, and have the computer pick a new letter
var reset = function(){
    guessesLeft = 9;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    alreadyGuessed = [];
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.querySelector("#guesses").innerHTML = "Already Guessed: " + alreadyGuessed;
};

//when the user presses a key
document.onkeyup = function(event){

    //user guess = key pressed
    userGuess = event.key;

    //push guess to the alreadyGuessed Array
    alreadyGuessed.push(userGuess);

    //update HTML with the alreadyGuessed Array
    document.querySelector("#guesses").innerHTML = "Already Guessed: " + alreadyGuessed;

    //if the user guesses correctly add a win and reset
    if(userGuess === computerGuess){
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        reset();
    }

    //if the user has no more guesses left add a loss and reset
    else if (guessesLeft === 0){
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
    }

    //if the user guesses incorrectly
    else if (userGuess !== computerGuess){
        guessesLeft--;
        document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }


};









