let playerChoice = "";



// Create variables to change Player image
const playerPic = document.querySelector(".player-choice-pic");
const cpuPic = document.querySelector(".cpu-choice-pic");
const btn = document.querySelectorAll("button");
const results = document.querySelector('.result-message');
const player = document.querySelector(".player-score");
const cpu = document.querySelector(".cpu-score");
let playerScore = 0;
let cpuScore = 0;

// Set pictures to default
playerPic.src = "./images/rock.jpg";
cpuPic.src = "./images/random.svg";


// Get cpu's choice to compare with user
// Get random number from 1-3
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

// btn will change player image on click
Array.from(btn).forEach(function (btn) {
    btn.addEventListener('click', function () {
        console.log(btn.textContent);
        ;

        if (btn.textContent == "Rock") {
            playerPic.src = "./images/rock.jpg"
            playerChoice = "Rock";
            return game();
        }
        else if (btn.textContent == "Paper") {
            playerPic.src = "./images/paper.svg";
            playerChoice = "Paper";
            return game();
        }
        else if (btn.textContent == "Scissors") {
            playerPic.src = "./images/scissors.svg";
            playerChoice = "Scissors";
            return game();
        };

    })

        ;
})


// Round of game will be simulated when user selects choice
function playRound(playerSelection, computerSelection) {
    // If player chooses Rock
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        player.textContent = playerScore;
        return "You Win! Rock beats Scissors!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        cpuScore++;
        cpu.textContent = cpuScore;
        return "You Lose! Paper beats Rock!";
    }

    // If Player chooses Paper
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        player.textContent = playerScore;
        return "You Win! Paper beats Rock!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        cpuScore++;
        cpu.textContent = cpuScore;
        return "You Lose! Scissors beats Paper!";
    }


    // If player chooses Scissors
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        player.textContent = playerScore;
        return "You Win! Scissors beats Paper!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        cpuScore++;
        cpu.textContent = cpuScore;
        return "You Lose! Rock beats Scissors!";
    }

    // If game is a tie
    else if (playerSelection == computerSelection) {
        return "You Tied"
    }

}

// Game will be simulated
function game() {
    ;
    return results.textContent = playRound(playerChoice, changeCpuChoice())
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


// console.log(game()); */
