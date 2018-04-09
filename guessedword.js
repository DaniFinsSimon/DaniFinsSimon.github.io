!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Word Guesser Starter Code</title>
</head>
<body>



<div id="guess_display"></div>


<form id="guess_form">
<label>Guess a letter:
<input type="text" id="guess_input">
</label>
</form>

<div id="guess_status"></div>

<script>
// Store DOM elements in variables
var guessForm = document.getElementById("guess_form");
var guessDisplay = document.getElementById("guess_display");
var guessLettersDisplay = document.getElementById("guess_letters_display");
var guessInput = document.getElementById("guess_input");
var guessStatus = document.getElementById("guess_status");

// Initialize game state variables
var secretWord = "banana";
var guessedWord = [];
var guessedLetters = [];
for (var i = 0; i < secretWord.length; i++) {
guessedWord[i] = "_";
}

// Returns true if its a correct guess -
//  if the letter is anywhere in the word
// Also updates guessedWord and guessedLetters
var checkLetterGuess = function(letter) {
var foundLetter = false;
for (var i = 0; i < secretWord.length; i++) {
if (secretWord[i] == letter) {
guessedWord[i] = letter;
foundLetter = true;
}
}
guessedLetters.push(letter);
return foundLetter;
};

// Returns true if they guessed the whole word
var hasWon = function() {
for (var i = 0; i< secretWord.length;i++)  //using a loop
if (secretWord[i] != guessedWord[i]) {
//if (secretWord == guessedWord.join("")) {
return false;                       //reversed false/true
}
return true;
};


var displayGuessedWord = function() {
guessDisplay.innerHTML = "Current correct: "
+"<br>" +guessedWord.join(" ");
//console.log(guessedWord);

};

var displayGuessedLetters = function() {
//console.log(guessedLetters);
guessLettersDisplay.innerHTML = "Letters guessed: "
+"<br>" +guessedLetters;

};

guessForm.addEventListener("submit", function(event) {
event.preventDefault();
var foundLetter = checkLetterGuess(guessInput.value);
if (foundLetter) {
guessStatus.innerHTML = "Yay you found one!";
//displayGuessedLetters();
} else {
guessStatus.innerHTML = "Sorry, not correct :(";
//displayGuessedLetters();
}
if (hasWon()) {
guessStatus.innerHTML = "WINNER WINNER!"
+"<br>" + "Found them all!"+"<br>" + "WOOOHOOO!";
}
displayGuessedWord();
displayGuessedLetters();
guessInput.value = "";
});
displayGuessedWord();
displayGuessedLetters();
// Step 0: Read through the code and understand it
// Step 1: Implement guessLetter
// Step 2: Implement hasWon
// Bonus Steps:
// - Randomly generate a word for each game
//   by pulling from an array
// - Come up with a scoring mechanism --
//    you can declare game over in a # of guesses
//    or just track number of guesses and display it
// - Display the letters they've already guessed
// - Implement error checking for duplicate guesses
// - Make way cooler win and lose states!

</script>






</body>
</html>