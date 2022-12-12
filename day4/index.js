const fs = require('fs');
const path = require('path');

const key = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function part1(input) {
	let count = 0;
	for (const line of input) {
		const pairs = line.split(',');
		const elf1 = genrateRange(pairs[0]);
		const elf2 = genrateRange(pairs[1]);

		const ordered = elf1.length < elf2.length ? [elf1, elf2] : [elf2, elf1];

		if (ordered[0].every((v) => ordered[1].includes(v))) {
			count++;
		}
	}

	console.log('Part 1: ', count);
}

function genrateRange(elf) {
	const boundaries = elf.split('-');
	const start = parseInt(boundaries[0]);
	const end = parseInt(boundaries[1]);

	return Array(end - start + 1)
		.fill()
		.map((_, idx) => start + idx);
}

function part2(input) {
	let count = 0;
	for (const line of input) {
		const pairs = line.split(',');
		const elf1 = genrateRange(pairs[0]);
		const elf2 = genrateRange(pairs[1]);

		const ordered = elf1.length < elf2.length ? [elf1, elf2] : [elf2, elf1];

		if (ordered[0].some((v) => ordered[1].includes(v))) {
			count++;
		}
	}

	console.log('Part 2: ', count);
}

function run() {
	const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8').split('\n');
	part1(input);
	part2(input);
}

run();
