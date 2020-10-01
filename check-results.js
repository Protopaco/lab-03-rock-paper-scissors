
export function didUserWin(player, computer){

    const rps = ['rock', 'paper', 'scissors'];

    if (player === computer) {
        return 'draw';
    }

    if ((rps.indexOf(player) === (rps.indexOf(computer) + 1) % 3)) {
        return 'win';
    }
    
    else {
        return 'lose';
    }



}