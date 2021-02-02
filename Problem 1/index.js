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

// Explanation

// This problem was reminiscent of FizzBuzz.  In the original solution, I begin by declaring an outside array to push my answer into.  Then I iterate from zero until n, specifically excluding n as the problem says *below* 1000.  At each i, I check to make sure it's a multiple of 5 or 3 using the modulus operator.  If this is truthy, I push the i into the answer array.  With the problem asking for a single sum, I can easily .reduce() the array into a single value.

// In the one liner, the best way I could think to begin the chain with an array was using Array() to instantiate an empty array with n indexes.  I had to fill them with *something*, and so calling .fill() gave me the result I sought.  I could have fed it anything here, as we will overwrite it with the index
