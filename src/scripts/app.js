(function() {
	'use strict'

	// Variables
	const computerChoices = ['rock', 'paper', 'scissors'];
	const userChoices     = document.querySelector('.choices');
	const rock            = userChoices.querySelector('.rock');
	const paper           = userChoices.querySelector('.paper');
	const scissors        = userChoices.querySelector('.scissors');
	const scoreUser       = document.querySelector('.score__number.score--user');
	const scoreComputer   = document.querySelector('.score__number.score--computer');
	const gameMessage     = document.querySelector('.game-message');

	// Object that contains all application
	const app = {};

	// Start the application
	app.init = () => {
		rock.addEventListener('click', function() {
			app.play('rock');
		});

		paper.addEventListener('click', function() {
			app.play('paper');
		});

		scissors.addEventListener('click', function() {
			app.play('scissors');
		});
	};

	// Play
	app.play = (userChoice) => {
		let computerChoice = app.computerChoice();

		switch (userChoice + computerChoice) {
			case 'paperrock':
			case 'rockscissors':
			case 'scissorspaper':
				app.updateMessage('victory', userChoice, computerChoice);
				app.updateScore(scoreUser);
				break;
			case 'rockpaper':
			case 'scissorsrock':
			case 'paperscissors':
				app.updateMessage('defeat', userChoice, computerChoice);
				app.updateScore(scoreComputer);
				break;
			case 'rockrock':
			case 'scissorsscissors':
			case 'paperpaper':
				app.updateMessage('draw', userChoice, computerChoice);
			break;
		}
	};

	// Computer
	app.computerChoice = () => {
		let ramdomNumber = Math.floor(Math.random() * computerChoices.length);
		let computerChoice = computerChoices[ramdomNumber];

		return computerChoice;
	};

	// Update message
	app.updateMessage = (type, userChoice, computerChoice) => {
		let text = '';

		if (type === 'victory') {
			text = 'You win!';
		}
		else if (type === 'defeat') {
			text = 'You lose!';
		}
		else if (type === 'draw') {
			text = 'It\'s a draw!';
		}

		let message = `
			You chose <strong>${userChoice}</strong> and the
			computer chose <strong>${computerChoice}</strong>.
			<br/>
			<strong class="text">${text}</strong>
		`;
		gameMessage.innerHTML = message;
	};

	// Update score
	app.updateScore = (player) => {
		player.textContent ++;
		player.classList.add('animate');

		setTimeout(() => {
			player.classList.remove('animate');
		}, 500);
	};

	// Init
	app.init();
})();
