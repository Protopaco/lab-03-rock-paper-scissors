const computerOptions = document.getElementsByClassName('computer-options');
const resultDisplay = document.getElementById('result-display');
const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('losses');
const drawDisplay = document.getElementById('draws');



export function toggleComputerCard(index){
    computerOptions[index].classList.toggle('play-card');
}

export function gameEnd (result, score) {
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


export function updateCounters(score) {
    winDisplay.textContent = "win " + score.win;
    lossDisplay.textContent = "loss " + score.loss;
    drawDisplay.textContent = "draw " + score.draw;
}