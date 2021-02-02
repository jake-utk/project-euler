console.log("Problem 1");

// https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// PSEUDOCODE
// Iterate from i = 0; i < 100; i++
// if i is a multiple of 3 or 5, push into sum array
// add sum array together
// return value

// Solution
const euler = (n) => {
	let answer = [];
	for (let i = 0; i < n; i++) {
		if (i % 5 === 0 || i % 3 === 0) {
			answer.push(i);
		}
	}
	return answer.reduce((a, b) => a + b);
};
console.log(euler(1000));

// One Liner
const eulerGolf = (n) =>
	Array(n)
		.fill()
		.map((e, i) => i)
		.filter((e) => e % 3 === 0 || e % 5 === 0)
		.reduce((a, b) => a + b);
console.log(eulerGolf(1000));
