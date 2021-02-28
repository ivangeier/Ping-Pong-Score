const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const winningScoreSelector = document.querySelector('#playTo');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;


winningScoreSelector.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

// PLAYER 1 SCORE UPDATE
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('win');
            p2Display.classList.add('lose');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        updateScore();
    }
});

//PLAYER 2 SCORE UPDATE
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('win');
            p1Display.classList.add('lose');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        updateScore();
    }
})

//RESET BUTTON
resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove('win', 'lose');
    p2Display.classList.remove('win', 'lose');
    p1Button.disabled = false;
    p2Button.disabled = false;
    updateScore();
}

//UPDATE SCORE DISPLAY
function updateScore() {
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}