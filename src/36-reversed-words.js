/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):


*/

const stri = "The greatest victory is that which requires no battle";
function reverseWords(str) {
	// reverse those words
	const reverse = str.split(" ").reverse().join(" ");
	return reverse;
}

// console.log(reverseWords(stri));
