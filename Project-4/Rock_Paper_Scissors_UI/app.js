const buttons = document.querySelectorAll("button");
const paper = document.querySelector("#paperHand");
const rock = document.querySelector("#rockHand");
const scissors = document.querySelector("#scissorsHand");
const round = document.querySelector("#roundText");
const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");

function computerPlay() {
    const value = ['rock', 'paper', 'scissors'];
    const randomValue = value[Math.floor(Math.random() * value.length)];
    return randomValue;
}

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
let computerSelection;
let resultGame;

function playRound(playerSelection) {
    roundCounter += 1;
    round.textContent = "ROUND " + roundCounter;
    computerChoice = computerPlay();
    computerSelection = computerOption();

    if (playerSelection == 'rock' && computerChoice == 'scissors') {
        playerScore += 1;
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        playerScore += 1;
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        playerScore += 1;
    } else {
        computerScore += 1;
    }

    computerScoreText.textContent = `Computer score is ${computerScore}`;
    playerScoreText.textContent = `Player score is ${playerScore}`;
    
    if (roundCounter == 5) {
        if (playerScore > computerScore) {
            resultGame = "You win the game!";
        } else if (playerScore < computerScore) {
            resultGame = "You lose the game!"
        } else {
            resultGame = "It's draw!";
        }
        playerScore = 0;
        computerScore = 0;
        roundCounter = 0;
        round.textContent = resultGame;
    }
}



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        playRound(buttons[i].textContent)
    })
}


function computerOption() {
    switch (computerChoice) {
        case 'paper':
            rock.style.visibility = 'hidden';
            scissors.style.visibility = 'hidden';
            paper.style.visibility = 'visible';
            break;
        case 'rock':
            rock.style.visibility = 'visible';
            scissors.style.visibility = 'hidden';
            paper.style.visibility = 'hidden';
            break;
        case 'scissors':
            rock.style.visibility = 'hidden';
            scissors.style.visibility = 'visible';
            paper.style.visibility = 'hidden';
            break;
    }
}