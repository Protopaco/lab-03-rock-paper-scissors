// import functions and grab DOM elements
import { gamePlay, resetGame } from './game-play.js';

// grabbing HTML elements
const resetButton = document.getElementById('reset');
const playButton = document.getElementById('play-button');

// initialize state
const score = {win: 0, loss: 0, draw: 0, reset: 0}


playButton.addEventListener('click', () =>{
    gamePlay(score);
});

resetButton.addEventListener('click', () => {
    resetButton.textContent = resetGame(score);
});


