'use strict';
const max = 20;
document.querySelector(
  '.between'
).textContent = `Guessing a number between 1 and ${max}`;
document.querySelector('.score').textContent = max;
let randomNumber = Math.ceil(Math.random() * max);
let score = max;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = guess;
  if (randomNumber === guess) {
    document.querySelector(
      '.message'
    ).textContent = `🧠 Correct Number the number was ${randomNumber} and you guess ${guess} ☑️ `;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '100%';
    document.querySelector('.number').style.backgroundColor = '#ffa500';
    document.querySelector('.number').style.fontSize = '100px';
    let currentHighScore = Number(
      document.querySelector('.highscore').textContent
    );
    if (score > currentHighScore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (!guess) {
    document.querySelector('.message').textContent =
      '❌ Invalid, Enter a number first';
  } else if (guess > max) {
    document.querySelector(
      '.message'
    ).textContent = `${guess} is out of range guess from 1-${max}! 😆`;
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost! 😓';
    }
    let howManyGuesses = Number(document.querySelector('.count').textContent);
    howManyGuesses++;
    document.querySelector('.count').textContent = howManyGuesses;

    if (randomNumber > guess && randomNumber - guess > 5) {
      document.querySelector('.message').textContent =
        '🤣 Not even close [Higher]';
    } else if (randomNumber > guess && randomNumber - guess === 1) {
      document.querySelector('.message').textContent =
        'Very very hot 🔥 [Higher]';
    } else if (randomNumber > guess && randomNumber - guess < 5) {
      document.querySelector('.message').textContent = '🙈 Closer [Higher]';
    } else if (randomNumber < guess && guess - randomNumber > 5) {
      document.querySelector('.message').textContent =
        'You are so bad at this you know 😴 [Lower]';
    } else if (randomNumber < guess && guess - randomNumber === 1) {
      document.querySelector('.message').textContent = '🤐 [Lower]';
    } else if (randomNumber < guess && guess - randomNumber < 5) {
      document.querySelector('.message').textContent = 'Not bad 🤔 [Lower]';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * max);

  score = max;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = '';
  document.querySelector('.number').style.fontSize = '3rem';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  document.querySelector('.count').textContent = '0';

  document.querySelector(
    '.between'
  ).textContent = `Guessing a number between 1 and ${max}`;
});
