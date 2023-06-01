// Global variables
const playerText = document.querySelector(".playerText");
const compText = document.querySelector(".compText");
const resultText = document.querySelector(".resultText");
const buttons = document.querySelectorAll(".button");
let computerSelection;
let playerSelection;
let result;
let playerScore = document.querySelector(".score2");
let computerScore = document.querySelector(".score1");
const restart = document.querySelector(".restart")
let scoreBoard = {
    player: 0,
    computer: 0
};

restart.addEventListener("click", () => {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    playerText.textContent = `Player 1:`;
    compText.textContent = `Computer:`;
    resultText.textContent = "First to win 5 rounds, Wins!";
    computerScore.textContent = `${scoreBoard.computer}`;
    playerScore.textContent = `${scoreBoard.player}`;
});

function showRestart(){
    restart.style.visibility = "visible";
}

function getComputerChoice(){
    const CHOICESARRAY = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * CHOICESARRAY.length);
    let choice = CHOICESARRAY[randomIndex];
    return choice;
}


buttons.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent;
    showRestart();
    game();
}))

function playRound(){
    computerSelection = getComputerChoice();
    result = checkWinner(playerSelection, computerSelection);
    playerText.textContent = `Player 1: ${playerSelection}`;
    compText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = result;
    return result;
}


function checkWinner(playerSelection, computerSelection){
    let winStr, loseStr, rule1, rule2, rule3;
    winStr = "You Win! ";
    loseStr = "You Lose! ";
    rule1 = "Rock beats Scissors.";
    rule2 = "Scissors beats Paper.";
    rule3 = "Paper beats Rock.";
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tie!";
    }
    else if(computerSelection.toLowerCase() === "rock"){
        if (playerSelection.toLowerCase() === "paper"){
            return "You Win! Paper beats Rock.";
        }
        else if(playerSelection.toLowerCase() === "scissors"){
            return "You Lose! Rock beats Scissors."
        }
    }
    else if(computerSelection.toLowerCase() === "paper"){
        if (playerSelection.toLowerCase() === "rock"){
            return "You Lose! Paper beats Rock.";
        }
        else if(playerSelection.toLowerCase() === "scissors"){
            return "You Win! Scissors beats Paper.";
        }
    }
    else if(computerSelection.toLowerCase() === "scissors"){
        if (playerSelection.toLowerCase() === "rock"){
            return "You Win! Rock beats Scissors";
        }
        else if(playerSelection.toLowerCase() === "paper"){
            return "You Lose! Scissors beats Paper.";
        }
    }
}


function game(){
    let msg;
    playRound();
    msg = playRound();
    if(msg.includes("Win!")){
        scoreBoard.player++;
    }
    else if(msg.includes("Lose!")){
        scoreBoard.computer++;
    }
    computerScore.textContent = `${scoreBoard.computer}`;
    playerScore.textContent = `${scoreBoard.player}`;
    if(scoreBoard.player === 5){
        resultText.textContent = "Game Over, You Win!";
        scoreBoard.player = 0;
        scoreBoard.computer = 0;
        playerText.textContent = `Player 1:`;
        compText.textContent = `Computer:`;
        computerScore.textContent = `${scoreBoard.computer}`;
        playerScore.textContent = `${scoreBoard.player}`;
    }
    if(scoreBoard.computer === 5){
        resultText.textContent = "Game Over, You Lose!";
        scoreBoard.player = 0;
        scoreBoard.computer = 0;
        playerText.textContent = `Player 1:`;
        compText.textContent = `Computer:`;
        computerScore.textContent = `${scoreBoard.computer}`;
        playerScore.textContent = `${scoreBoard.player}`;
    }
}