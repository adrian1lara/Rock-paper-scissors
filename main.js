console.log("hello");



function game() {
    let computerScore = 0
    let playerScore = 0
    let rounds = 0

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

    function updateScoreboard(resultText) {
        const resultDiv =  document.getElementById('result');
        const finalScoreDiv = document.getElementById('final-score');
        resultDiv.textContent = resultText;
        finalScoreDiv.textContent = playerScore + " - " + computerScore;
    }

    function onButtonClick(event) {
        if(rounds === 5) {
            updateScoreboard("Game over!");
            return;
        }

        rounds++;
        const playerSelection = event.target.id
        const computerSelection = getComputerChoice();
        const resultText = playRound(playerSelection, computerSelection);
        updateScoreboard(resultText);
    }


    // adding event listeners to each button
    document.getElementById('rock').addEventListener('click', onButtonClick)
    document.getElementById('paper').addEventListener('click', onButtonClick)
    document.getElementById('scissors').addEventListener('click', onButtonClick)

}


game();


