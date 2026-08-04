/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

const array = [5, 2, 5, 7, 89, 4];
function findAverage(array) {
	// your code here
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i] / array.length;
	}
	return sum;
}

// console.log(findAverage(array));
