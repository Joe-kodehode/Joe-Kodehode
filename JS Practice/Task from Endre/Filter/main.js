// const people = [
//   {
//     name: "Thomas",
//     male: true,
//     age: 23,
//     hobbies: ["cycling", "football", "pool"],
//   },
//   {
//     name: "Susan",
//     male: false,
//     age: 26,
//     hobbies: ["jogging", "travelling", "dancing", "movies", "coffee"],
//   },
//   {
//     name: "Monica",
//     male: false,
//     age: 21,
//     hobbies: ["skateboarding", "guitar", "concerts"],
//   },
//   {
//     name: "Avery",
//     male: true,
//     age: 28,
//     hobbies: ["coding", "games", "memes", "electronics"],
//   },
//   {
//     name: "Phillip",
//     male: true,
//     age: 24,
//     hobbies: ["boxing", "wrestling", "mma", "gym"],
//   },
//   {
//     name: "Chris",
//     male: true,
//     age: 20,
//     hobbies: ["cycling", "football", "pool", "tv"],
//   },
//   {
//     name: "Claire",
//     male: false,
//     age: 27,
//     hobbies: ["jogging", "travelling"],
//   },
//   {
//     name: "Stephanie",
//     male: false,
//     age: 26,
//     hobbies: ["writing", "piano", "books", "opera"],
//   },
//   {
//     name: "Herman",
//     male: true,
//     age: 31,
//     hobbies: ["gym", "weights"],
//   },
//   {
//     name: "Trevor",
//     male: true,
//     age: 19,
//     hobbies: ["parkour"],
//   },
// ];

// Complete the .filter method to filter out only the objects that have an age from
// (and including) 26 to (and including) 28 and at least 3 hobbies

// const filteredPeople = people.filter((n) => {
//   return n.age >= 26 && n.age <= 28;
// });

// console.log(filteredPeople);

//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}
// 1: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
// 2: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}
// length: 3

//////////////////////////////////////////////////////////////////////////////////

//Filter out the objects who are male and have a name of exactly 6 characters

// const filteredPeople2 = people.filter((e) => {
//   return e.male === true && e.name.length === 6;
// });

// console.log(filteredPeople2);

//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Thomas', male: true, age: 23, hobbies: Array(3)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// 2: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}
// length: 3

//////////////////////////////////////////////////////////////////////////////////

//Filter out the objects that have "gym" included in their hobbies

// const filteredPeople3 = people.filter((e) => {
//   return e.hobbies.includes("gym");
// });

// console.log(filteredPeople3);

//this should log:
// (2) [{…}, {…}]
// 0: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// length: 2

const names = [
  "Bradley",
  "Mae",
  "Oscar",
  "Isac",
  "Alexandra",
  "Margie",
  "Rob",
  "Clay",
  "Timothy",
  "Kennedy",
  "Rita",
  "Scott",
  "Sarah",
  "Felicia",
  "Gill",
  "Gavin",
  "Nellie",
  "Hope",
];

const hobbies = [
  "cycling",
  "football",
  "pool",
  "jogging",
  "travelling",
  "dancing",
  "movies",
  "coffee",
  "skateboarding",
  "guitar",
  "concerts",
  "Dancing",
  "movies",
  "coding",
  "games",
  "Books",
  "memes",
  "electronics",
  "dancing",
  "boxing",
  "wrestling",
  "mma",
  "gym",
  "cycling",
  "football",
  "pool",
  "tv",
  "writing",
  "piano",
  "books",
  "opera",
];

// Use whatever tools you deem necessary to accomplish the following:

// Generate an object for each name in the names array formatted as follows:
// {
//     name: (the name from the name array),
//     age: (generate a random age from 18-50),
//     hobbies: (randomly generate an array of 3 hobbies from the hobbies array. PS make
//               sure the hobbies are 3 unique ones)
// }

// example:

// {
//     name: "Scott"
//     age: 31
//     hobbies: ["books", "electronics", "guitar"]
// }

// Place these objects into an array.

// PS: The hobbies array has to be cleaned up! Write code to remove duplicates before using it.
// Beware the capitalized duplicates as well.

// Good luck!

let newHobbies = [];
hobbies.forEach((e) => {
  if (!newHobbies.includes(e)) {
    newHobbies.push(e.toLowerCase());
  }
});

console.log(newHobbies);
let objArray = [];

names.forEach((e) => {
  let personObj = {};
  personObj.name = e;
  personObj.age = Math.floor(Math.random() * 32 + 18);
  personObj.hobbies = [];
  while (personObj.hobbies.length < 3) {
    let randomHobby = newHobbies[Math.floor(Math.random() * newHobbies.length)];
    if (personObj.hobbies.includes(randomHobby)) continue;
    personObj.hobbies.push(randomHobby);
  }

  objArray.push(personObj);
});
console.log(objArray);

// Old way

// let newHobbies = [];
// hobbies.forEach((e) => {
//   e.toLowerCase;
//   if (!newHobbies.includes(e)) {
//     newHobbies.push(e);
//   }
// });

// let objArray = names.map((e) => {
//   return `{name: "${e}" age: ${Math.floor(Math.random() * 32 + 18)} hobbies: ${
//     newHobbies[Math.floor(Math.random() * 26)]
//   }, ${newHobbies[Math.floor(Math.random() * 26)]} ${
//     newHobbies[Math.floor(Math.random() * 26)]
//   }}`;
// });
