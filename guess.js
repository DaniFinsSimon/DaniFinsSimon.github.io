<!DOCTYPE html>
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

};

    // Returns true if they guessed the whole word
    var hasWon = function() {

};


    var displayGuessedWord = function() {
    guessDisplay.innerHTML = guessedWord.join(" ");
};


    guessForm.addEventListener("submit", function(event)) {
    event.preventDefault();
    var foundLetter = checkLetterGuess(guessInput.value);
    if (foundLetter) {
      guessStatus.innerHTML = "Yay you found one!";
    }

    else {
    guessStatus.innerHTML = "Sorry, not so much!";
}
    if (hasWon()) {
    guessStatus.innerHTML += "WOOO WINNER WINNER!";
}
    displayGuessedWord();
    guessInput.value = "";
    //});
    displayGuessedWord();

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