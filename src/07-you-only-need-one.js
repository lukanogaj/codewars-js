/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/

const a = [4, 6, 8, 9, 10, "Love", "Peace"];

function check(a, x) {
	// your code here
	return a.includes(x);
}

console.log(check(a, "Honey"));
