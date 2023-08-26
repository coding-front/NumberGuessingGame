let bestScore = document.getElementById("best-score"),
    attemptsLeft = document.getElementById("attempts-left"),
    resultMessage = document.getElementById("result-message"),
    guessInput = document.getElementById("guess-input"),
    guessButton = document.getElementById("guess-button"),
    restartButton = document.getElementById("restart-button"),
    isGameover = false;

let score = localStorage.getItem("Score"),
    guess = 10;

if (score != null) {
    bestScore.innerText = score;
}

let targetNumber = Math.floor(Math.random() * 100) + 1;

restartButton.addEventListener("click", () => {
    location.reload();
});

guessButton.addEventListener("click", () => {
    if (isGameover) {
        return;
    }
    
    guess --;
    
    if (targetNumber == guessInput.value) {
        guess++
        resultMessage.innerText = `You Win Your score is ${guess}`;
        isGameover = true;
        if (guess > score) {
            localStorage.setItem("Score", guess);
            bestScore.innerText = guess;
        }
    }
    else if (guessInput.value == ""){
        resultMessage.innerText = `Plese Enter a Number`;
        guess ++;
    }
    else if (targetNumber > guessInput.value){
        resultMessage.innerText = `Your guess is low`;
    }
    else if (targetNumber < guessInput.value){
        resultMessage.innerText = `Your guess is hitgh`;
    }
    
    if (guess == 0){
        resultMessage.innerText = `You loss Number is ${targetNumber}`;
        isGameover = true;
    }
    
    attemptsLeft.innerText = guess;
});
