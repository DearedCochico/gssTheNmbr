let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

function checkGuess() {
    const guess = document.getElementById('guessInput').value;
    const message = document.getElementById('message');

    if (guess == secretNumber) {
        message.innerHTML = 'Congratulations! You guessed the correct number!';
        message.style.color = 'green';
        disableInputAndButton();
    } else {
        attempts--;
        if (attempts === 0) {
            message.innerHTML = `Sorry, you're out of attempts. The correct number was ${secretNumber}.`;
            message.style.color = 'red';
            disableInputAndButton();
        } else {
            message.innerHTML = `Wrong guess. You have ${attempts} attempts left.`;
            message.style.color = 'orange';
        }
    }
}

function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}