function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:");
    return choice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return "computer";
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final score: Computer ${computerScore} - Human ${humanScore}`);
    } else {
        console.log(`It's a tie game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

// Start the game
playGame();

