/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

const word1 = "Lukasz";
const word2 = "Moose";

function isIsogram(str) {
	const words = str.toLowerCase().split("");

	for (const word of words) {
		if (words.indexOf(word) !== words.lastIndexOf(word)) {
			return false;
		}
	}

	return true;
}

// console.log(isIsogram(word2));
