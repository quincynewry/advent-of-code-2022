const fs = require('fs');
const path = require('path');

function part1(input) {
	let elves = [];
	let sum = 0;

	for (const line of input) {
		if (line === '') {
			elves.push(sum);
			sum = 0;
		} else {
			sum += parseInt(line);
		}
	}

	elves.push(sum);

	elves.sort(function (a, b) {
		return b - a;
	});

	console.log(`Part 1: ${elves[0]}`);

	return elves;
}

function part2(elves) {
	console.log(`Part 2: ${elves[0] + elves[1] + elves[2]}`);
}

function run() {
	const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8').split('\n');
	const sortedElves = part1(input);
	part2(sortedElves);
}

run();
