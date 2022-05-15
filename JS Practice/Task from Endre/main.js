// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array

// need to cycle the array (loop or forEach?)

// need to check each individual character of the array's element, not just the element as a whole

// if statement (or turnary?) to seperate the two types of results

// boom1 = [1, 2, 3, 4, 5, 6, 7];
// boom2 = [8, 6, 33, 100];
// boom3 = [2, 55, 60, 97, 86];

// function boomCheck(arr) {
//   return arr.toString().includes("7") ? "boom" : "no boom";

// }
//   if (arr.toString().includes("7")) {
//     return "boom";
//   } else {
//     return "no boom";
//   }
// }
// console.log(boomCheck(boom1));

// let boomerang = 0;
// arr = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];
// for (let i = 0; i < arr.length - 2; i++) {
//   let check = arr.slice(i, i + 3);
//   console.log(check);

//   let dig1 = check[0];
//   let dig2 = check[1];
//   let dig3 = check[2];
//   if (dig1 === dig3 && dig2 !== dig1) {
//     boomerang + 2;
//     console.log(boomerang);
// }
// }

// function countBoomerangs(arr) {
//   return arr.reduce(
//     (acc, e, index) => acc + (e === arr[index + 2] && e != arr[index + 1]),
//     0
//   );
// }

// Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// function countTrue(arr) {
// 	arr.forEach(() =>{
//     if arr[i] === true
//   })
// }

//fullfør .map method funksjonen:
//hvis tallet er over 50, return tallet ganget med 5,
//hvis tallet er under 50, return tallet ganget med 10

// const numArray = [32, 11, 4, 67, 97, 61, 52, 12, 26, 8, 70, 23];

// const mappedArray = numArray.map(modify);
// function modify(e) {
//   return e >= 50 ? e * 5 : e * 10;
// }

// console.log(mappedArray);

// const numArray = [32, 11, 4, 67, 97, 61, 52, 12, 26, 8, 70, 23];

// const mappedArray = numArray.map((e) => (e >= 50 ? e * 5 : e * 10));

// console.log(mappedArray);

// Map task 2

const fruits = [
  "Banana",
  "Apple",
  "Pear",
  "Mango",
  "Melon",
  "Pineapple",
  "Grapes",
  "Peach",
];

// Complete the .map method to return 1 random character from each element in uppercase

const mappedFruits = fruits.map((e) => {
  const random = Math.floor(Math.random() * e.length);
  console.log(Math.random() * e.length);
  return e[random].toUpperCase();
});

console.log(mappedFruits);

// This should log something like this:
// (8) ['A', 'P', 'E', 'M', 'E', 'E', 'R', 'H']

// Scrimba forEach/array task

// let myCourses = [
//   "Learn CSS Animations",
//   "UI Design Fundamentals",
//   "Intro to Clean Code",
// ];
// function logArray(arr) {
//   arr.forEach((e) => {
//     console.log(e);
//   });
// }

// logArray(myCourses);

// Map task 3

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
];

// Complete the .map method on the people array to return the following sentence for each element:
// "Thomas is a 23 year old man, and he likes pool among other things"
// For females, it should read: "..year old woman, and she likes.."
// the hobby in the sentence should be a randomly chosen one from the hobby array.
// HINT: Use Template Literals (Google it if unsure)

const mappedPeople = people.map((e, i) => {
  let gender = "";
  let sheHe = "";
  //   e.male === true ? (gender = "man") : (gender = "woman");
  //   e.male === true ? (sheHe = "he") : (sheHe = "she");

  if (e.male === true) {
    (gender = "man"), (sheHe = "he");
  } else {
    (gender = "woman"), (sheHe = "she");
  }

  return `${e.name} is a ${e.age} year old ${gender}, and ${sheHe} likes ${
    e.hobbies[Math.floor(Math.random() * e.hobbies.length)]
  } among other things.`;
});

console.log(mappedPeople);

// This should log something like this:

// (5)[
//   ("Thomas is a 23 year old man, and he likes football among other things",
//   "Susan is a 26 year old woman, and she likes dancing among other things",
//   "Monica is a 21 year old woman, and she likes skateboarding among other things",
//   "Avery is a 28 year old man, and he likes coding among other things",
//   "Phillip is a 24 year old man, and he likes mma among other things")
// ];

// return `${e.name} is a ${e.age} year old ${
//   e.male ? "man, and he" : "woman, and she"
// } likes ${
//   e.hobbies[Math.floor(Math.random() * e.hobbies.length)]
// } among other things`;
