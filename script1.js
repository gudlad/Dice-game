'use strict';

// NOTES:
// adding the hold functionality

// represents main score board
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');

// represent current score of player
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

// dice image
const diceEL = document.querySelector('.dice');

// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const mainScore = [0, 0];

let currentScore = 0;

// represents the player elements player 0 and player 1
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

let activePlayer = 0; // only two values either 0 or 1
let isPlaying = true;
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

// ******** roll dice button ****************************************
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
// ********************************************************************
// *******function to switch player************************************
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
// *********************************************************************

// ************ hold button ********************************************
// code:
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    mainScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      mainScore[activePlayer];
    // check score is already is 100  then finish game
    if (mainScore[activePlayer] >= 20) {
      // player wins and now we are no longer playing so
      isPlaying = false;
      // and the dice should disappear when player wins
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
    // if not switch to next player
  }
});
