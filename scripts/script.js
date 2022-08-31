// Create variables to change Player image
const playerPic = document.querySelector(".player-choice-pic");
const cpuPic = document.querySelector(".cpu-choice-pic");
const btn = document.querySelectorAll("button");
const results = document.querySelector('.result-message');
const player = document.querySelector(".player-score");
const cpu = document.querySelector(".cpu-score");
const winnerMessage = document.querySelector(".final-winner");
let playerScore = 0;
let cpuScore = 0;
let playerChoice = "";


// Set pictures to default
playerPic.src = "./images/rock.jpg";
cpuPic.src = "./images/random.svg";


// Get cpu's choice to compare with user
// Get random number from 0-2
// cpu image will change with choice
function changeCpuChoice() {

    let cpuChoice = Math.floor(Math.random() * 3);
    let choice = ["Rock", "Paper", "Scissors"];

    if (choice[cpuChoice] == "Rock") {
        cpuPic.src = "./images/rock.jpg";
        return choice = "Rock";
    }
    else if (choice[cpuChoice] == "Paper") {
        cpuPic.src = "./images/paper.svg";
        return choice = "Paper";

    }
    else if (choice[cpuChoice] == "Scissors") {
        cpuPic.src = "./images/scissors.svg";
        return choice = "Scissors";
    }
}

function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true
    })
}

// Who ever gets 5 points is winner
function scoreKeep() {
    if (playerScore == 5) {
        disableButtons(); 
        return winnerMessage.textContent = `You won! ${playerScore} - ${cpuScore}`;
    }
    else if (cpuScore == 5) {
        disableButtons(); 
        return winnerMessage.textContent = `Cpu wins! ${playerScore} - ${cpuScore}`;
    }
}


// Decide whos choice wins and reward point to winner
// Round of game will be simulated when user selects choice
function playRound(playerSelection, computerSelection) {
    // If player chooses Rock
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore += 1;
        player.textContent = playerScore;
        results.textContent = "You Win! Rock beats Scissors!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        cpuScore += 1;
        cpu.textContent = cpuScore;
        results.textContent = "You Lose! Paper beats Rock!";
    }

    // If Player chooses Paper
    else if (playerSelection == "Paper" && computerSelection == "Rock") { 
        
        playerScore += 1;
        player.textContent = playerScore;
        results.textContent = "You Win! Paper beats Rock!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        cpuScore += 1;
        cpu.textContent = cpuScore;
        results.textContent = "You Lose! Scissors beats Paper!";
    }


    // If player chooses Scissors
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore += 1;
        player.textContent = playerScore;
        results.textContent = "You Win! Scissors beats Paper!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        cpuScore += 1;
        cpu.textContent = cpuScore;
        results.textContent = "You Lose! Rock beats Scissors!";
    }

    // If game is a tie
    else if (playerSelection == computerSelection) {
        results.textContent = "You Tied"
    }

    scoreKeep();
        
}


// btn will change player image on click
 btn.forEach(button => {
    button.addEventListener('click', function () {
        
        
        if (button.textContent == "Rock") {
            playerPic.src = "./images/rock.jpg"
            playerChoice = "Rock";
            return playRound(playerChoice, changeCpuChoice());
        }
        else if (button.textContent == "Paper") {
            playerPic.src = "./images/paper.svg";
            playerChoice = "Paper";
            return playRound(playerChoice, changeCpuChoice());
        }
        else if (button.textContent == "Scissors") {
            playerPic.src = "./images/scissors.svg";
            playerChoice = "Scissors";
            return playRound(playerChoice, changeCpuChoice());
        };

    });
     
})
