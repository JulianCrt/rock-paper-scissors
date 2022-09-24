/* --- Set up the variables --- */

let playerScore = 0;
let ties = 0;
let computerScore = 0;

/* --- Constants created along the process --- */

const choices = ['rock', 'paper', 'scissors']
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const roundWinner = document.querySelector('round-winner')
const p = document.createElement('p')
const buttons = document.querySelectorAll('#buttons')

/* --- Create function to disable the buttons after 5 rounds, thus stopping the game --- */

function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

/* --- Random input for the computerChoice --- */

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

/* --- Executes game logic, conditions for TIES and playerChoice to win versus computerChoice's random input. Score is incrementing after each round. ---*/

const playRound = (computerChoice, playerChoice) => {
  if(computerChoice === playerChoice) {
    ties ++
    
    p.innerText = 'It\'s a tie'
    document.querySelector('.ties').innerText = 'Ties: ' +ties
    outcomeDiv.appendChild(p)
    
} else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
           (playerChoice == 'paper' && computerChoice == 'rock') ||
           (playerChoice == 'scissors' && computerChoice == 'paper')) {
               playerScore ++
               
    p.innerText = `You win!  ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}  beats  ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
    document.querySelector('.player-wins').innerText = 'Player Score: ' +playerScore
    outcomeDiv.appendChild(p)
               
                                
}  else {computerScore ++
  
    p.innerText = `You lost!  ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}  beats  ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}` 
    document.querySelector('.computer-wins').innerText = 'Computer Score: ' +computerScore
    outcomeDiv.appendChild(p)
}};

/* --- Function that checks if computer won 'else if' player. Function called for disabling the buttons after winner has been announced (disableButtons()). --- */

  const checkWinner = (computerScore, playerScore) => {
    if(computerScore === 5) {
      disableButtons()
      outcomeDiv.removeChild(p)
      const h2 = document.createElement('h2')
      h2.innerText = `You lost! ${computerScore} to ${playerScore} for the computer. Better luck next time!`
      outcomeDiv.appendChild(h2)
      
    } else if (playerScore === 5) {
      disableButtons()
      outcomeDiv.removeChild(p)
      const h2 = document.createElement('h2')
      h2.innerText = 'You won! Not bad rookie, see you next time!'
      outcomeDiv.appendChild(h2)
    }
  }
  
  /* --- Event Listener functions for each button (playerChoice) + the functions needed to run the game called within them. ---*/

  rockButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = 'rock';
  playRound(computerChoice, playerChoice);
  checkWinner(computerScore, playerScore);
})

  paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = 'paper';
  playRound(computerChoice, playerChoice);
  checkWinner(computerScore, playerScore);
})

  scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = 'scissors';
  playRound(computerChoice, playerChoice);
  checkWinner(computerScore, playerScore);
})