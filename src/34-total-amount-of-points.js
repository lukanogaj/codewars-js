/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/
const games = [
	"3:1",
	"2:2",
	"0:1",
	"4:2",
	"2:3",
	"1:1",
	"2:1",
	"3:4",
	"3:3",
	"3:0",
];
console.log(games[0].split(" "));
console.log(parseInt(games, 10));
function points(games) {
	let x = 0;
	const splitResult = games.map((item) => item.split(":"));
	for (let i = 0; i < splitResult.length; i++) {
		if (splitResult[i][0] > splitResult[i][1]) {
			x += 3;
		}

		if (splitResult[i][0] === splitResult[i][1]) {
			x += 1;
		}
	}
	return x;
}

console.log(points(games));

// Example tih strings change to number

/*
function points(games) {
	let x = 0;

	const splitResult = games.map((item) => item.split(":"));

	for (let i = 0; i < splitResult.length; i++) {
		const home = Number(splitResult[i][0]);
		const away = Number(splitResult[i][1]);

		if (home > away) {
			x += 3;
		}

		if (home === away) {
			x += 1;
		}
	}

	return x;
}

*/
