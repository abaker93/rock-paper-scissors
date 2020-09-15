const playerScoreContainer = document.getElementById('player-score')
const computerScoreContainer = document.getElementById('computer-score');
const playerSelectContainer = document.getElementById('player-select');
const computerSelectContainer = document.getElementById('computer-select');
const results = document.getElementById('results');
const winResults = document.getElementById('win-results');

let playerScore = 0;
let computerScore = 0;

playerScoreContainer.innerHTML = playerScore;
computerScoreContainer.innerHTML = computerScore;

function computerPlay() {
	const computerSelections = ['rock', 'paper', 'scissors']
	const randomNum = Math.round(Math.random()*2);
	return computerSelections[randomNum];
}

function playRound(playerSelect) {
	const computerSelect = computerPlay();
	
	// tie
	if (playerSelect === computerSelect) {
		playerSelectContainer.innerHTML = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
		computerSelectContainer.innerHTML = computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1);
		results.innerHTML = 'It\'s a tie!';
	}
	
	// playerSelect = rock
	else if (playerSelect === 'rock') {
		playerSelectContainer.innerHTML = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
		if (computerSelect === 'scissors') {
			playerScore++;
			computerSelectContainer.innerHTML = computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1);
			results.innerHTML = 'You Win! Rock beats Scissors';
		} else if (computerSelect === 'paper') {
			computerScore++;
			computerSelectContainer.innerHTML = computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1);
			results.innerHTML = 'You Loose! Paper beats Rock'
		}
	}
	
	// playerSelect = scissors
	else if (playerSelect === 'scissors') {
		playerSelectContainer.innerHTML = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
		if (computerSelect === 'paper') {
			playerScore++;
			computerSelectContainer.innerHTML = computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1);
			results.innerHTML = 'You Win! Scissors beats Paper'
		} else if (computerSelect === 'rock') {
			computerScore++;
			computerSelectContainer.innerHTML = computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1);
			results.innerHTML = 'You Loose! Rock beats Scissors'
		}
	}
	
	// playerSelect = paper
	else if (playerSelect === 'paper') {
		playerSelectContainer.innerHTML = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
		if (computerSelect === 'rock') {
			playerScore++;
			computerSelectContainer.innerHTML = computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1);
			results.innerHTML = 'You Win! Paper beats Rock'
		} else if (computerSelect === 'scissors') {
			computerScore++;
			computerSelectContainer.innerHTML = computerSelect.charAt(0).toUpperCase() + computerSelect.slice(1);
			results.innerHTML = 'You Loose! Scissors beats Paper'
		}
	}

	playerScoreContainer.innerHTML = playerScore;
	computerScoreContainer.innerHTML = computerScore;

	// if player wins 5 games
	if (playerScore === 5) {
		winResults.innerHTML = `
			<h2>Player Wins!</h2>
			<h3>Final Score</h3>
			<p>Player: ${playerScore}</p>
			<p>Computer: ${computerScore}</p>
			<button onclick="reset()">Reset Game</button>
		`;
	}

	// if computer wins 5 games
	if (computerScore === 5) {
		winResults.innerHTML = `
			<h2>Computer Wins!</h2>
			<h3>Final Score</h3>
			<p>Player: ${playerScore}</p>
			<p>Computer: ${computerScore}</p>
			<button onclick="reset()">Reset Game</button>
		`;
	}
}

function reset() {
	playerScore = 0;
	computerScore = 0;

	playerScoreContainer.innerHTML = playerScore;
	computerScoreContainer.innerHTML = computerScore;
	playerSelectContainer.innerHTML = '';
	computerSelectContainer.innerHTML = '';
	results.innerHTML = '';
	winResults.innerHTML = '';
}