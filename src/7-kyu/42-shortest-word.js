/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

const string = "The quick brown fox";
console.log(string.split(" "));
function findShort(s) {
	let minLength = s.length;
	const words = s.split(" ");
	for (const word of words) {
		if (word.length < minLength) {
			minLength = word.length;
		}
	}
	return minLength;
}

// console.log(findShort(string));
