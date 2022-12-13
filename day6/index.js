const fs = require('fs');
const path = require('path');

function main(input, length) {
	for (const line of input) {
		const chars = [];
		for (const i in line) {
			const char = line[i];

			if (chars.length === length) {
				chars.shift();
			}

			chars.push(char);

			if (chars.length === length && chars.length === new Set(chars).size) {
				return parseInt(i) + 1;
			}
		}
	}
}

function run() {
	const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8').split('\n');
	console.log('Part 1: ', main(input, 4));
	console.log('Part 1: ', main(input, 14));
}

run();
