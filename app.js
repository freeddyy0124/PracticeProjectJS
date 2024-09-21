function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:");
    return choice.toLowerCase();
}

console.log(getHumanChoice());

// Continue with step 3