const choices = ["rock", "paper", "scissors"];
const winners = [];



function game() {
   for(i = 1; i <= 5; i++){
     playRound(i);
    }
    logWins();
     
}


function playRound(round) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    roundWinner(playerSelection, computerSelection, winner, round);
}



function getPlayerChoice() {
    let input = prompt("Please choose Rock, Paper or Scissors");
    
    while(input==null) {
        input = prompt("Please choose Rock, Paper or Scissors");
    }
    input = input.toLowerCase();

    let check = validateInput(input);

    while(check==false) {
        input = prompt("Please choose Rock, Paper or Scissors. Spelling must be exact");

    while(input==null) {
        input = prompt("Please choose Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){

    if (choiceP == choiceC) {
        return "It\'s a tie"
    } else if ((choiceP == "rock" && choiceC == "scissors") || 
               (choiceP == "paper" && choiceC == "rock") ||
               (choiceP == "scissors" && choiceC == "paper")) {
                return "Player";
               } else {
                return "Computer"; }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter ((item) => item == "It\'s a tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function roundWinner(playerSelection, computerSelection, winner, round) {
    console.log("Round Number:", round)
    console.log("Player chose:", playerSelection);
    console.log("Computer chose:", computerSelection);
    console.log(winner, "Won this Round");
    console.log("-------------------------");
}

game();