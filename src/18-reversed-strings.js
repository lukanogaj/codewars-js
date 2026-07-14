/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// Methods
split()
reverse()
join()
*/

const stringReversed = "The greatest victory is that which requires no battle";

// console.log(stringReversed.split(" ").reverse().join(" "));
function reverseWords(str) {
	const reverseWord = str.split(" ").reverse().join(" ");
	return reverseWord; // reverse those words
}

// console.log(reverseWords(stringReversed));
