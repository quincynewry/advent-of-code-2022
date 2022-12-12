const fs = require('fs');
const path = require('path');

const steps = [
	{
		index: 1,
		value: 1,
	},
	{
		index: 5,
		value: 2,
	},
	{
		index: 9,
		value: 3,
	},
	{
		index: 13,
		value: 4,
	},
	{
		index: 17,
		value: 5,
	},
	{
		index: 21,
		value: 6,
	},
	{
		index: 25,
		value: 7,
	},
	{
		index: 29,
		value: 8,
	},
	{
		index: 33,
		value: 9,
	},
];

const COLUMN_COUNT = 9;
const ROW_COUNT = 8;

function main(input, runFnc) {
	const setup = {};

	for (let i = 0; i < ROW_COUNT; i++) {
		const str = input[i];

		for (let i = 0; i < COLUMN_COUNT; i++) {
			const step = steps[i];
			const val = str[step.index];

			if (val.match(/[A-Z]/i)) {
				setup[step.value] =
					setup[step.value]?.length > 0 ? setup[step.value].concat(val) : [val];
			}
		}
	}

	for (let i = ROW_COUNT + 2; i < input.length; i++) {
		var actions = input[i].replace(/[a-z]/gi, '').split(/\s+/);
		actions.shift();

		runFnc(actions, setup);
	}

	let answer = '';

	for (const property in setup) {
		answer += setup[property][0];
	}

	console.log('Part 1: ', answer);
}

function run1(actions, setup) {
	for (let i = 0; i < actions[0]; i++) {
		const mover = setup[actions[1]].shift();

		setup[actions[2]].unshift(mover);
	}
}

function run2(actions, setup) {
	const toMove = setup[actions[1]].splice(0, actions[0]);

	for (const block of toMove.reverse()) {
		setup[actions[2]].unshift(block);
	}
}

function run() {
	const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8').split('\n');
	main(input, run1);
	main(input, run2);
}

run();
