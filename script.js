function getComputerChoice() {
    const weapon = ["Rock", "Paper", "Scissors"];
    let randomWeapon = weapon[Math.floor(Math.random() * weapon.length)];
    return randomWeapon;
}

function playRound() {
const playerSelection = "Rock" || "Paper" || "Scissors";
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

if (playerSelection === computerSelection) {
alert("It is a Tie!");
} else if (playerSelection === "Rock" && computerSelection === "Paper" 
        || playerSelection === "Paper" && computerSelection === "Scissors"
        || playerSelection === "Scissors" && computerSelection === "Rock"){
alert(`You lost, ${computerSelection} beats ${playerSelection}`); 
} else {
    alert(`You won! ${playerSelection} beats ${computerSelection}`);
}
return playRound();
}

