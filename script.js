'use strict';
// selecting elements::
// there are also alternative methods for querySelector like getElementById
// which takes the id value not need to specify the '#' and also it faster than the QS

// represents main score board
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');

// dice image
const diceEL = document.querySelector('.dice');

// represent current score of player
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const mainScore = [0, 0]; // value at index 0 is the score of player0  and at index 1 is the score of player1

let currentScore = 0;
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

let activePlayer = 0;
// it is used to identify who is the current player
// at the beginning player0 is the active player
// it later used to build classes using template string

// starting conditions
// IMPORTANT: don't include '.' inside add function call only include the class name
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
diceEL.classList.remove('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    // console.log(currentScore);
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // using the turnery operator to switch the player it activePlayer is 0 player0 is active then switch the player to 1 otherwise switch player to 0
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
    // the toggle method adds the class to the element if it is not there, and if it is there it will remove it..
  }
});
