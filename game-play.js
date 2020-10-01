import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './check-results.js';
import { toggleComputerCard, gameEnd, updateCounters } from './display-controls.js';


export function gamePlay(score) {

    let userThrow = document.querySelector(':checked').value;
    let computerThrow = getRandomThrow();
    displayComputerThrow(computerThrow);
    let result = didUserWin(userThrow, computerThrow);
    gameEnd(result, score);
}

function displayComputerThrow(computerThrow){

    if (computerThrow === 'rock'){
        toggleComputerCard(0);
        setTimeout(toggleComputerCard, 1000, 0);

    } else if (computerThrow === 'paper') {
        toggleComputerCard(1);
        setTimeout(toggleComputerCard, 1000, 1);

    } else {
        toggleComputerCard(2);
        setTimeout(toggleComputerCard, 1000, 2);

    }
}


export function resetGame(score) {

    score.win = 0;
    score.loss = 0;                              
    score.draw = 0;
    score.reset++;
    updateCounters(score);
    return `reset (${score.reset})`;
}