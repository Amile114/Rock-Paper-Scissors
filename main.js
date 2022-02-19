function computerPlay() {
    let compPick = ['rock', 'paper', 'scissor'];
    let compPick2 = Math.floor(Math.random() * compPick.length);
    return compPick[compPick2];
}

function singleRound() {
    let player = prompt('What do you choose?').toLowerCase();
    let computer = computerPlay();

    if (player === 'rock' && computer === 'paper') {
        console.log('COMPUTER WINS!');
    }
}
// when you run the code and it gives undefined, thats because of computerPlay()
// its playing until it finds paper

