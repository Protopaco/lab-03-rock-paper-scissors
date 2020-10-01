// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './check-results.js';

// grabbing HTML elements
const resetButton = document.getElementById('reset');
const computerImage = document.getElementById('computer-image');
const resultDisplay = document.getElementById('result-display');
const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('losses');
const drawDisplay = document.getElementById('draws');
const playButton = document.getElementById('play-button');
const computerOptions = document.getElementsByClassName('computer-options');
// initialize state

const score = {win: 0, loss: 0, draw: 0, reset: 0}
let computerThrow = '';
let userThrow = '';

updateCounters(score);

playButton.addEventListener('click', () => {
    userThrow = document.querySelector(':checked').value;
    computerThrow = getRandomThrow();
    displayComputerThrow(computerThrow);
    let result = didUserWin(userThrow, computerThrow);
    gameEnd(result, score);
})

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

function toggleComputerCard(index){
    computerOptions[index].classList.toggle('play-card');
}

function gameEnd (result, score) {
    console.log(result);
   if (result === 'win'){
       resultDisplay.textContent = 'YOU WIN!';
       score.win = score.win + 1;
   } else if (result === 'lose') {      
        resultDisplay.textContent = 'YOU LOST!';
        score.loss = score.loss + 1;
    } else {
        resultDisplay.textContent = 'DRAW!';
        score.draw++;
    }
    setTimeout(resetResultDisplay, 1000);
    updateCounters(score);
}

function resetResultDisplay(){
    resultDisplay.textContent = '';
}

function updateCounters(score) {
    winDisplay.textContent = "win " + score.win;
    lossDisplay.textContent = "loss " + score.loss;
    drawDisplay.textContent = "draw " + score.draw;
}

resetButton.addEventListener('click', () =>
{
    resetGame(score)
});

function resetGame(score) {
    console.log('in reset');
    score.win = 0;
    score.loss = 0;                              
    score.draw = 0;
    score.reset++;
    resetButton.textContent = `reset (${score.reset})`;
    updateCounters(score);
}