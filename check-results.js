
export function didUserWin (userThrow, computerThrow){

    const rps = ["rock", "paper", "scissors"];

    if (userThrow === computerThrow) {
        return 'draw';
    }

    if ((rps.indexOf(userThrow) === (rps.indexOf(computerThrow)+1) %3)) {
        console.log((rps.indexOf(computerThrow)+1) %3);
        return 'win';
    }
    else {
        return 'lose';
    }



}