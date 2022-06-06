// COLLATZ CONJECTURE

// The Collatz conjecture in mathematics asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.

// It works like this:

// - Start with any positive number
// - If the number is odd, multiply it by 3 and add 1
// - If the number is even, divide it by 2
// - Repeat the above process on the resulting number

// The Collatz conjecture has shown that any positive number
// will eventually reach 1, which will result in a loop where
// no further progress can be made

// Use Javascript to test the Collatz conjecture:

// Write a function that takes in a number, and run the collatz operation on every number from 1 to the number received as a parameter.

// Include code that finds which number took the most amount of steps to reach 1, and how many steps it took.

// Include code that finds which number that reached the highest number in its sequence, and what that peak value was.

// Output the following console.log from your function:

// “Running the Collatz procedure on all numbers from 1 to (number received):”

// “The integer with most steps was (number), with (number of steps) total steps”

// “The integer with the highest peak was (number), with a peak of (highest peak value)”

let results = [];
let peak = 0;
let peakInput = 0;

let mostSteps = 0;
let stepsInput = 0;
let totalSteps = 0;
let input = 0;

document.querySelector(".goBtn").addEventListener("click", () => {
  input = parseInt(document.querySelector(".input").value);

  // For loop to generate numbers from 1 to input number

  for (i = 1; i < input + 1; i++) {
    let num = i;
    let steps = 0;
    while (num != 1) {
      if (num % 2 !== 0) {
        num = num * 3 + 1;
      } else {
        num /= 2;
      }
      steps++;
      if (num > peak) {
        peak = num;
        peakInput = i;
      }
      if (steps > mostSteps) {
        mostSteps = steps;
        stepsInput = i;
      }
    }
    totalSteps += steps;
  }
  console.log(totalSteps);
  results.push(
    `Running the Collatz procedure on all numbers from 1 to ${input}`,
    `The integer with most steps was ${stepsInput}, with ${mostSteps} total steps`,
    `The integer with the highest peak was ${peakInput}, with a peak of ${peak}`,
    `The total number of steps was ${totalSteps}.`
  );
  console.log(...results);
  document.querySelector(".result").textContent = results.join(". ");
  results = [];
});
