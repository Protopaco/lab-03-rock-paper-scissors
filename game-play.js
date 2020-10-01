import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './check-results.js';
import { displayComputerThrow, gameEnd, updateCounters } from './display-controls.js';

export function gamePlay(score) {

    let userThrow = document.querySelector(':checked').value;
    let computerThrow = getRandomThrow();
    displayComputerThrow(computerThrow);
    let result = didUserWin(userThrow, computerThrow);
    gameEnd(result, score);
}



export function resetGame(score) {

    score.win = 0;
    score.loss = 0;                              
    score.draw = 0;
    score.reset++;
    updateCounters(score);
    return `reset (${score.reset})`;
}