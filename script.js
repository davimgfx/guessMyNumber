'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document
  .querySelector('.check')
  .addEventListener('click', () => checkTheNumber());

document
  .querySelector('.again')
  .addEventListener('click', () => resetTheGame());

let checkTheNumber = () => {
  const guess = Number(document.querySelector('.guess').value);
  if (guess > 20 || guess <= 0) {
     displayMessage('Between 1 and 20');
  } else {
    if (guess === secretNumber) {
      funcWinner();
    } else {
      displayMessage(guess < secretNumber ? '↑ Try higher numbers' : '↓ Try lower numbers');
      calcScore();
    }
  }
};

let displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

let resetTheGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').innerHTML = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.display = 'inline';
  document.querySelector('.guess').value = '';
};

let funcWinner = () => {
  let number = document.querySelector('.number');
  number.innerHTML = secretNumber;
  displayMessage('Right!!! You are the best 🎉🎉🎉');
  document.querySelector('.check').style.display = 'none';
  document.querySelector('body').style.background = '#5cad44';
  document.querySelector('.number').style.width = '30rem';
  calcHighScore();
};

let calcScore = () => {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    score = 0;
    displayMessage('You lose the Game!');
    document.querySelector('body').style.background = 'red';
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.number').textContent = '😭';
  }
};

let calcHighScore = () => {
  if (score >= highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};
