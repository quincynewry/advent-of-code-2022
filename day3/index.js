const fs = require('fs');
const path = require('path');

const key = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function part1(input) {
	let total = 0;
	for (const rucksack of input) {
		const compartments = rucksack.match(new RegExp('.{1,' + rucksack.length / 2 + '}', 'g'));
		let match;

		for (const item of compartments[0].split('')) {
			if (compartments[1].includes(item) && !match) {
				match = item;
			}
		}

		total += key.indexOf(match);
	}

	console.log('Part 1: ', total);
}

function part2(input) {
	let total = 0;
	let match;

	for (let i in input) {
		if (i % 3 == 0) {
			i = parseInt(i);
			for (const item of input[i].split('')) {
				if (input[i + 1]?.includes(item) && input[i + 2]?.includes(item) && !match) {
					match = item;
				}
			}

			total += key.indexOf(match);
			match = null;
		}
	}

	console.log('Part 2: ', total);
}

function run() {
	const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8').split('\n');
	part1(input);
	part2(input);
}

run();
