const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');

submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (userGuess === randomNumber) {
        message.textContent = 'Selamat! Tebakkan kamu benar!';
        message.style.color = 'green';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Terlalu rendah! NT Coba lagi.';
        message.style.color = 'orange';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Terlalu tinggi! NT Coba lagi.';
        message.style.color = 'orange';
    }
});
