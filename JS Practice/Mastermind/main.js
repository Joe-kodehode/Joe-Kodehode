let answer = ["red", "red", "yellow", "pink"];

let guess = ["yellow", "yellow", "red", "red"];

let whiteCount = 0;

let redCount = 0;

let notIncluded = 0;

guess.forEach((e, i) => {
  if (e === answer[i]) {
    redCount++;
  } else if (answer.includes(e)) {
    // && eAmmount < whiteCount
    whiteCount++;
  } else {
    notIncluded++;
  }
});
// }

getAnswer();

console.log(redCount);

console.log(whiteCount);

console.log(notIncluded);






// function getAnswer(arr, value) {
//   let eAmmount = guess.forEach((v) => {
//     v === value && eAmmount++;
//   });