'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const dispMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const btnCheck = function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // NO INPUT
  if (!guess) {
    dispMsg('⛔ No number!');
    // GUESS CORRECT
  } else if (guess === secretNumber) {
    dispMsg('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // GUESS INCORRECT
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // GUESS TOO HIGH or LOW
      dispMsg(guess > secretNumber ? '🔼 Too High!' : '🔽 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
      // GAME OVER
    } else {
      dispMsg('💥 Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', btnCheck);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') {
    // console.log('Esc was pressed');
    btnCheck();
  }
});

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     console.log(e.key);
//     btnCheck();
//   }
// });
const playAgain = function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = secretNumber;
  console.log(secretNumber);
  console.log(document.querySelector('.number').value);
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  dispMsg('Start Guessing...');
};

document.querySelector('.again').addEventListener('click', playAgain);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    playAgain();
  }
});
