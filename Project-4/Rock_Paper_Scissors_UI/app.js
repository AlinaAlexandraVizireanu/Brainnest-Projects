const buttonPaper = document.querySelector('.paper');
const buttonRock = document.querySelector('.rock');
const buttonScissors = document.querySelector('.scissors');

function computerPlay() {
    const value = ['rock', 'paper', 'scissors'];
    const randomValue = value[Math.floor(Math.random() * value.length)];
    return randomValue;
}

function isInputValid(playerSelection) {
    return /rock|paper|scissors/g.test(playerSelection);
}

let playerScore = 0;
let computerScore = 0;
let playerSelection = buttonPaper.value;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log(`Your selection is : ${playerSelection}`);
    console.log(`PC selection is : ${computerSelection}`);
    if (isInputValid(playerSelection)) {
        if (playerSelection == computerSelection) {
            console.log('Draw!');
            playerScore += 1;
            computerScore += 1;
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
            playerScore += 1;
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
            playerScore += 1;
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
            playerScore += 1;
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore += 1;
        }
        console.log(`Player: ${playerScore} & Computer ${computerScore}`);
        if (playerScore > computerScore) {
            console.log("You win the game!");
        } else if (playerScore < computerScore) {
            console.log("You lose the game!");
        } else {
            console.log("It's draw!");
        }
    } else {
        console.log('Please enter a valid input!');
    }
}

buttonPaper.addEventListener('click', playRound);
buttonRock.addEventListener('click', playRound);
buttonScissors.addEventListener('click', playRound);
