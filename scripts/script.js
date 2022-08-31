let playerScore = 0;
let cpuScore = 0;

// Get cpu's choice to compare with user
// Get random number from 1-3
function getComputerChoice() {
    cpuChoice = Math.floor(Math.random() * 3);
    choices = ["Rock", "Paper", "Scissors"];
    return choices[cpuChoice];
};

function playRound(playerSelection, computerSelection) {
    // If player chooses Rock
    if ((playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "r") && computerSelection == "Scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors!";
    }
    else if ((playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "r") && computerSelection == "Paper") {
        cpuScore++;
        return "You Lose! Paper beats Rock!";
    }


    // If Player chooses Paper
    else if ((playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "p") && computerSelection == "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock!";
    }
    else if ((playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "p") && computerSelection == "Scissors") {
        cpuScore++;
        return "You Lose! Scissors beats Paper!";
    }


    // If player chooses Scissors
    if ((playerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "s") && computerSelection == "Paper") {
        playerScore++;
        return "You Win! Scissors beats Paper!";
    }
    else if ((playerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "s") && computerSelection == "Rock") {
        cpuScore++;
        return "You Lose! Rock beats Scissors!";
    }

    // If game is a tie
    else if (playerSelection.toLowerCase()[0] == computerSelection.toLowerCase()[0]) {
        return "You Tied"
    }

}

// Decide whos choice wins and reward point to winner
// Who ever gets best out of 5 is winner
function scoreKeep() {
    if (playerScore > cpuScore) {
        return `You won! ${playerScore} - ${cpuScore}`;
    }
    else {
        return `Cpu wins! ${playerScore} - ${cpuScore}`;
    }
}
// Have a total of 5 rounds
function game() {

    for (let i = 0; i < 5; i++) {

        // Get user input for choice in game 
        // const userChoice = prompt("(R)ock, (P)aper, or (S)cissors?");
        const userChoice = prompt("(R)ock, (P)aper, or (S)cissors?");
        const computerChoice = getComputerChoice();
        console.log(playRound(userChoice, computerChoice));
    }
    return scoreKeep();

}

console.log(game());
