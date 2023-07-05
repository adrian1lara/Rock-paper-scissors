console.log("hello");



function game() {
    let computerScore = 0
    let playerScore = 0

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                playerScore++;
                return "You win! " + playerScore + " - " + computerScore + " - " + "Computer";
            } else {
                computerScore++;
                return "You lose! " + playerScore + " - " + computerScore + " - " + "Computer";
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerScore++;
                return "You win! " + playerScore + " - " + computerScore + " - " + "Computer";
            } else {
                computerScore++;
                return "You lose! " + playerScore + " - " + computerScore + " - " + "Computer";
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                playerScore++;
                return "You win! " + playerScore + " - " + computerScore + " - " + "Computer";
            } else {
                computerScore++;
                return "You lose! " + playerScore + " - " + computerScore + " - " + "Computer";
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Pick rock, paper, or scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log("Final score: " + playerScore + " - " + computerScore);
}


game();


