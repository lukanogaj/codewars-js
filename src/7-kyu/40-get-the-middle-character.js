/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.

Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

// const strin = "Lukasz";
// const strin1 = "Karol";

function getMiddle(s) {
	//Code goes here!
	const len = s.length; // Checking the length
	const mid = Math.floor(len / 2); // Found the middle of string
	return len % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(mid, mid + 1);
}

// console.log(getMiddle(strin1));
