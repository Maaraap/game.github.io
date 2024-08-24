let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');
let attempts = 5;

function resetGame() {
    attempts = 5;
    document.getElementById('attempts').textContent = attempts;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    message.textContent = '';
    guessInput.value = '';
}

submitGuess.addEventListener('click', () => {
    if (attempts > 0) {
        const userGuess = parseInt(guessInput.value);
        attempts--;
        document.getElementById('attempts').textContent = attempts;

        if (userGuess === randomNumber) {
            message.textContent = 'Selamat! Tebakkan kamu benar!';
            message.style.color = 'green';
            resetGame();
        } else if (userGuess < randomNumber) {
            message.textContent = 'Terlalu rendah! NT Coba lagi.';
            message.style.color = 'orange';
        } else if (userGuess > randomNumber) {
            message.textContent = 'Terlalu tinggi! NT Coba lagi.';
            message.style.color = 'orange';
        }

        if (attempts === 0) {
            message.textContent = 'Kamu kalah cupu! Jawabannya ' + randomNumber + '.';
            message.style.color = 'red';
        }
        
    }
});

document.getElementById('resetGame').addEventListener('click', resetGame);
