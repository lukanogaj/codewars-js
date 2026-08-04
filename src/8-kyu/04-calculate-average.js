/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.


*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

function findAverage(array) {
	// your code here
	if (array.length === 0) {
		return 0;
	}
	const sum = array.reduce((acc, current) => acc + current, 0);
	const average = sum / array.length;
	return average;
}
