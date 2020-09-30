// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

// grabbing HTML elements
const computerDisplay = document.getElementById('computer-display');
const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('losses');
const drawDisplay = document.getElementById('draws');
const infoDisplay = document.getElementById('info-display')
const playButton = document.getElementById('play-button');
// initialize state
// establishing state
let userWins = 0;
let userLoss = 0;
let userDraws = 0;
let computerThrow = '';
let userThrow = '';

playButton.addEventListener('click', () => {
    console.log(document.querySelector(':checked'));
    computerThrow = getRandomThrow();
    console.log(computerThrow);
})


//const checkedRadioButton = document.querySelector(':checked')
// set event listeners to update state and DOM
