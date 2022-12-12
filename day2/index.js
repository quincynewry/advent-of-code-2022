const fs = require('fs');
const path = require('path');

const ranks = {
	X: 1,
	Y: 2,
	Z: 3,
};

const key = {
	A: 'rock',
	B: 'paper',
	C: 'scissors',
	X: 'rock',
	Y: 'paper',
	Z: 'scissors',
};

function part1(input) {
	let total = 0;
	for (const game of input) {
		const turns = game.split(' ');

		const outcome = getOutcome(key[turns[0]], key[turns[1]], 1);

		total += outcome + ranks[turns[1]];
	}

	console.log('Part 1: ', total);
}

function part2(input) {
	let total = 0;
	for (const game of input) {
		const turns = game.split(' ');

		const outcome = getOutcome(key[turns[0]], key[turns[1]], 2);

		total += outcome;
	}

	console.log('Part 2: ', total);
}

function getOutcome(player1, player2, part) {
	if (player1 === 'rock') {
		switch (player2) {
			case 'rock':
				return part === 1 ? 3 : 3;
			case 'paper':
				return part === 1 ? 6 : 4;
			case 'scissors':
				return part === 1 ? 0 : 8;
		}
	} else if (player1 === 'paper') {
		switch (player2) {
			case 'rock':
				return part === 1 ? 0 : 1;
			case 'paper':
				return part === 1 ? 3 : 5;
			case 'scissors':
				return part === 1 ? 6 : 9;
		}
	} else {
		switch (player2) {
			case 'rock':
				return part === 1 ? 6 : 2;
			case 'paper':
				return part === 1 ? 0 : 6;
			case 'scissors':
				return part === 1 ? 3 : 7;
		}
	}
}

function run() {
	const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8').split('\n');
	part1(input);
	part2(input);
}

run();
