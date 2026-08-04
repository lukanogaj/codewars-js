/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/
const vowelLetters = "a,e,i,o,u";
const string1 = "Lukasz";

function getCount(str) {
	let count = 0;

	for (const element of str) {
		if (vowelLetters.includes(element)) {
			count++;
		}
	}
	return count;
}

console.log(getCount(string1));
