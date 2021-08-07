const choices = ["rock", 'paper', 'scissors'];
const randomNumber = Math.floor(Math.random()*3);
let randomChoice = choices[randomNumber];
let playerScore = 0;
let computerScore = 0;
let playerChoice = prompt("please choice: rock, paper, scissors");
let playerSelection = playerChoice.toLowerCase();
console.log("You selected to play the: "+playerSelection);
console.log("the random number chosen is: " +randomNumber);
console.log("the random choice is: " +randomChoice);

console.log("Your Score: " + playerScore);
console.log("ComputerScore: " + computerScore);

function computerPlay() {
	computerSelection = randomChoice;
	return computerSelection;
}
console.log(computerPlay());
function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock"){
		if(computerSelection === 'rock') {
			return "the game is a tie. No score";
		} else if (computerSelection === 'paper') {
			computerScore += 1
			return "You lose. Computer wins";
			
			console.log("the result of computerscore++ "+ computerScore);
		} else {
			playerScore += 1
			return "You win this round";
			
		}

	}
	if(playerSelection === "paper") {
		if(computerSelection === 'paper') {
			return "the game is a tie. No score";
		} else if (computerSelection === 'rock') {
			playerScore += 1
			return "You win. You win this round";
			
		}else  {
			computerScore += 1
			return "You lose. The computer wins this round";
			
		}
	}
	if (playerSelection === "scissors") {
		if(computerSelection === "scissors") {
			return "The game is a tie. No score";
		} else if (computerSelection === "rock") {
			computerScore += 1
			return "You lose. The computer wins this round";
			
		} else  {
			playerScore += 1
			return "You  win.";
			
	}
}
}

playRound();


console.log("the computer played: " + computerPlay());



computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log("Your Score: " + playerScore);
console.log("ComputerScore: " + computerScore);