'use strict';

const max = 20;
let score = max;
let highscore = 0;
let randomNumber = Math.ceil(Math.random() * max);

const body = document.querySelector('body');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const highscoreEl = document.querySelector('.highscore');
const countEl = document.querySelector('.count');
const betweenEl = document.querySelector('.between');

scoreEl.textContent = score;
betweenEl.textContent = `Guessing a number between 1 and ${max}`;

function displayMessage(msg) {
  messageEl.textContent = msg;
}

function resetGame() {
  randomNumber = Math.ceil(Math.random() * max);
  score = max;
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
  numberEl.style.backgroundColor = '';
  numberEl.style.fontSize = '3rem';
  body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  guessEl.value = '';
  countEl.textContent = '0';
  betweenEl.textContent = `Guessing a number between 1 and ${max}`;
}

function updateFeedback(guess) {
  const diff = Math.abs(randomNumber - guess);

  if (diff > 5) {
    displayMessage(
      guess < randomNumber
        ? '🤣 Not even close [Higher]'
        : 'You are so bad at this you know 😴 [Lower]'
    );
  } else if (diff === 1) {
    displayMessage(
      guess < randomNumber ? 'Very very hot 🔥 [Higher]' : '🤐 [Lower]'
    );
  } else {
    displayMessage(
      guess < randomNumber ? '🙈 Closer [Higher]' : 'Not bad 🤔 [Lower]'
    );
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);
  numberEl.textContent = guess;

  if (!guess) {
    displayMessage('❌ Invalid, Enter a number first');
    return;
  }

  if (guess > max) {
    displayMessage(`${guess} is out of range. Guess from 1 to ${max}! 😆`);
    return;
  }

  if (guess === randomNumber) {
    displayMessage(
      `🧠 Correct Number! It was ${randomNumber}, and you guessed ${guess} ☑️`
    );
    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '100%';
    numberEl.style.backgroundColor = '#ffa500';
    numberEl.style.fontSize = '100px';

    if (score > Number(highscoreEl.textContent)) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else {
    score--;
    scoreEl.textContent = score;
    countEl.textContent = Number(countEl.textContent) + 1;

    if (score === 0) {
      displayMessage('You lost! 😓');
    } else {
      updateFeedback(guess);
    }
  }
});

document.querySelector('.again').addEventListener('click', resetGame);
