// rps-ui
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let compPick = ['rock', 'paper', 'scissors'];
    let compPick2 = Math.floor(Math.random() * compPick.length);
    return compPick[compPick2];
}

function playRound(playerSelection) {
    // let player = prompt('What do you choose?').toLowerCase();
    let computerSelection = computerPlay();
    let result = '';

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = `COMPUTER WON THIS ROUND ${computerScore += 1} PTS!`;

    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = `PLAYER WON THIS ROUND ${playerScore += 1} PTS!`;

    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = `PLAYER WON THIS ROUND ${playerScore += 1} PTS!`;

    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = `COMPUTER WON THIS ROUND ${computerScore += 1} PTS!`;

    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = `COMPUTER WON THIS ROUND ${computerScore += 1} PTS!`;

    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = `PLAYER WON THIS ROUND ${playerScore += 1} PTS!`;
    }

    if (playerScore >= 3) {
        alert('HUMAN PLAYER HAS WON THE GAME!!!');
    }else if (computerScore >= 3) {
        alert('COMPUTER HAS WON THE GAME!!!');
    }
    document.getElementById('result').innerHTML = result;
    return

}

// function game() {
//     for (i = 1; playerScore < 3 && computerScore < 3; i++) {
//         playRound();
//  }
// }

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})