const str1 = "world";
const str2 = "word";

function solution(str) {
	const reversed = str.split("").reverse().join("");
	return reversed;
}

console.log(solution(str1));
