let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let compPick = ['rock', 'paper', 'scissors'];
    let compPick2 = Math.floor(Math.random() * compPick.length);
    return compPick[compPick2];
}

function playRound() {
    let player = prompt('What do you choose?').toLowerCase();
    let computer = computerPlay();

    if (player === 'rock' && computer === 'paper') {
        console.log('COMPUTER WINS!');
        console.log(`Computer has ${computerScore += 1} PTS`);
    }else if (player === 'paper' && computer === 'rock') {
        console.log('PLAYER WINS!');
        console.log(`Human player has ${playerScore += 1} PTS!`);

    }else if (player === 'rock' && computer === 'scissors') {
        console.log('PLAYER WINS!');
        console.log(`Human player has ${playerScore += 1} PTS!`);

    }else if (player === 'scissors' && computer === 'rock') {
        console.log('COMPUTER WINS!');
        console.log(`Computer has ${computerScore += 1} PTS!`);

    }else if (player === 'paper' && computer === 'scissors') {
        console.log('COMPUTER WINS!');
        console.log(`Computer has ${computerScore += 1} PTS!`);

    }else if (player === 'scissors' && computer === 'paper') {
        console.log('PLAYER WINS!');
        console.log(`Human player has ${playerScore += 1} PTS!`);
    }

    if (playerScore >= 3) {
        alert('HUMAN PLAYER HAS WON THE GAME!!!');
    }else if (computerScore >= 3) {
        alert('COMPUTER HAS WON THE GAME!!!');
    }
    

}

function game() {
    for (i = 1; playerScore < 3 && computerScore < 3; i++) {
        playRound();
}
}