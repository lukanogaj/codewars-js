/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


///////////
Mehod
split
toUpperCase
join

*/

const str12 = "Lukasz Nogaj";
const words = str12.split();
// console.log(words);
function abbrevName(name) {
	// code away
	const splitted = name
		.split(" ")
		.map((word) => word[0])
		.join(".")
		.toUpperCase();

	return splitted;
}

// console.log(abbrevName(str12));
