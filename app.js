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
    // Example game logic
    let result = ''; // Create a variable for the result message.
    
    if (humanChoice === computerChoice) {
        result = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Display the result in the DOM
    document.getElementById('results').innerText = result;

    // Display the updated score
    document.getElementById('score').innerText = `Human: ${humanScore} - Computer: ${computerScore}`;
    
    // Announce the winner once someone reaches 5 points
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? 'You win the game!' : 'Computer wins the game!';
        document.getElementById('results').innerText = winner;
        resetGame(); // Optional reset function to start over
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

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));

