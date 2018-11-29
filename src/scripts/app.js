(function() {
	'use strict'

	// Variables
	const userChoices = document.querySelector('.choices');
	const rock = userChoices.querySelector('.rock');
	const paper = userChoices.querySelector('.paper');
	const scissors = userChoices.querySelector('.scissors');
	const computerChoices = ['rock', 'paper', 'scissors'];

	// Object that contains all application
	const app = {};

	// Start the application
	app.init = () => {
		console.log('Initing...');

		rock.addEventListener('click', function() {
			app.userChoice('rock');
		});

		paper.addEventListener('click', function() {
			app.userChoice('paper');
		});

		scissors.addEventListener('click', function() {
			app.userChoice('scissors');
		});
	};

	// Computer
	app.computerChoice = () => {
		let ramdomNumber = Math.floor(Math.random() * computerChoices.length);
		let computerChoice = computerChoices[ramdomNumber];

		return computerChoice;
	};

	// User
	app.userChoice = (choice) => {
		console.log('#User: ', choice);
		console.log('#PC: ', app.computerChoice());

		return choice;
	};

	// Init
	app.init();
})();
