// const fizzbuzz = (num) => {
//   const fbArray = [];

//   for (let i = 1; i < num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       fbArray.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       fbArray.push("Fizz");
//     } else if (i % 5 === 0) {
//       fbArray.push("Buzz");
//     } else fbArray.push(i);
//   }

//   return fbArray;
// };

// --- with not ---
// const fizzbuzz = (n) =>
//   [...Array(n).keys()].map((n) =>
//     !(++n % 15) ? "FizzBuzz" : !(n % 3) ? "Fizz" : !(n % 5) ? "Buzz" : n
//   );

// --- without not ---
// const fizzbuzz = (n) =>
//   [...Array(n).keys()].map((n) =>
//     ++n % 15 ? (n % 3 ? (n % 5 ? n : "Buzz") : "Fizz") : "FizzBuzz"
//   );

// --- String.repeat() ---
// const fizzbuzz = (n) =>
//   [...Array(n).keys()].map(
//     (n) => "Fizz".repeat(!(++n % 3)) + "Buzz".repeat(!(n % 5)) || n
//   );

// --- recursive ---
// const fizzbuzz = (n) => n ? [ ...fizzbuzz(n - 1), "Fizz".repeat(!(n % 3)) + "Buzz".repeat(!(n % 5)) || n, ] : [];

// --- reduce ---
// const fizzbuzz = (n) =>
//   [...Array(n).keys()].reduce(
//     (result, curr) => [
//       ...result,
//       "Fizz".repeat(!(++curr % 3)) + "Buzz".repeat(!(curr % 5)) || curr,
//     ],
//     []
//   );

// --- multiple for loops ---
// const fizzbuzz = n => {
//   const result = Array( ++n );

//   let i;

//   for( i = 0; i < n; i +=  1 ) result[i] = i;
//   for( i = 0; i < n; i +=  3 ) result[i] = "Fizz";
//   for( i = 0; i < n; i +=  5 ) result[i] = "Buzz";
//   for( i = 0; i < n; i += 15 ) result[i] = "FizzBuzz";

//   result.shift();
//   return result;
// }

// ---- Endre's ---
// const fizzbuzz = (num) =>
//   [...Array(num).keys()].map((n) =>
//     !(++n % 15) ? "FizzBuzz" : !(n % 3) ? "Fizz" : !(n % 5) ? "Buzz" : n
//   );

const fizzbuzz = (n) =>
  [...Array(n).keys()].map((n) =>
    ++n % 15 ? (n % 3 ? (n % 5 ? n : "Buzz") : "Fizz") : "FizzBuzz"
  );
console.log(fizzbuzz(15));
