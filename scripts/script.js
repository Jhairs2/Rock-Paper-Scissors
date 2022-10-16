// Create variables to change Player image
const playerPic = document.querySelector(".player-choice");
const cpuPic = document.querySelector(".cpu-choice");

// Create variables store different elements
const btn = document.querySelectorAll(".choices");
const results = document.querySelector(".results-message");
const player = document.querySelector(".player-score");
const cpu = document.querySelector(".cpu-score");
const winnerMessage = document.querySelector(".final-winner");
const resetBtn = document.querySelector(".reset-button");

// Variables for scoring and player choices
let playerScore = 0;
let cpuScore = 0;
let playerChoice = "";


// Set pictures to default
playerPic.src = "./images/katana.png";
cpuPic.src = "./images/shuriken.png";


// Get cpu's choice to compare with user
// Get random number from 0-2
// cpu image will change with choice
function changeCpuChoice() {

    let cpuChoice = Math.floor(Math.random() * 3);
    let choice = ["Katana", "Shuriken", "Armor"];

    if (choice[cpuChoice] == "Armor") {
        cpuPic.src = "./images/armor.png";
        return choice = "Armor";
    }
    else if (choice[cpuChoice] == "Shuriken") {
        cpuPic.src = "./images/shuriken.png";
        return choice = "Shuriken";

    }
    else if (choice[cpuChoice] == "Katana") {
        cpuPic.src = "./images/katana.png";
        return choice = "Katana";
    }
}

// Resets game
function resetButton() {
    resetBtn.addEventListener("click", function () {
        // Reset Everything back to start
        playerScore = 0;
        cpuScore = 0;
        player.textContent = 0;
        cpu.textContent = 0;
        winnerMessage.textContent = "";
        results.textContent = "";

        // Enable buttons back 
        btn.forEach(elem => {
                elem.addEventListener('click', addChoice);
        })
    })

}

// will disable buttons after winner is declared
function disableButtons() {
    btn.forEach(elem => {
        if (btn.textContent != "Reset") {
            elem.removeEventListener('click', addChoice);
        }
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
    if (playerSelection == "Armor" && computerSelection == "Katana") {
        playerScore += 1;
        player.textContent = playerScore;
        results.textContent = "You Win!\nArmor beats Katana!";
    }
    else if (playerSelection == "Armor" && computerSelection == "Shuriken") {
        cpuScore += 1;
        cpu.textContent = cpuScore;
        results.textContent = "You Lose!\nShuriken beats Armor!";
    }

    // If Player chooses Paper
    else if (playerSelection == "Shuriken" && computerSelection == "Armor") {

        playerScore += 1;
        player.textContent = playerScore;
        results.textContent = "You Win!\nShuriken beats Armor!";
    }
    else if (playerSelection == "Shuriken" && computerSelection == "Katana") {
        cpuScore += 1;
        cpu.textContent = cpuScore;
        results.textContent = "You Lose!\nKatana beats Shuriken!";
    }


    // If player chooses Scissors
    if (playerSelection == "Katana" && computerSelection == "Shuriken") {
        playerScore += 1;
        player.textContent = playerScore;
        results.textContent = "You Win!\nKatana beats Shuriken!";
    }
    else if (playerSelection == "Katana" && computerSelection == "Armor") {
        cpuScore += 1;
        cpu.textContent = cpuScore;
        results.textContent = "You Lose!\nArmor beats Katana!";
    }

    // If game is a tie
    else if (playerSelection == computerSelection) {
        results.textContent = "You Tied"
    }

    scoreKeep();

}


// btn will change player image on click
btn.forEach(button => {
    button.addEventListener('click', addChoice)

})

function addChoice() {

        if (this == btn[0]) {
            playerPic.src = "./images/armor.png"
            playerChoice = "Armor";
            return playRound(playerChoice, changeCpuChoice());
        }
        else if (this == btn[1]) {
            playerPic.src = "./images/shuriken.png";
            playerChoice = "Shuriken";
            return playRound(playerChoice, changeCpuChoice());
        }
        else if (this == btn[2]) {
            playerPic.src = "./images/katana.png";
            playerChoice = "Katana";
            return playRound(playerChoice, changeCpuChoice());
        };

    };


resetButton();
