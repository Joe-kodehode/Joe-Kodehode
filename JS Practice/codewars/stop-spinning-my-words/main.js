// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const spinWords = (string) =>
  string
    .split(" ")
    .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
    .join(" ");
// console.log(spinWords("Hey wollef sroirraw"));

const isPangram = (string) => {
  let alphabet = [];
  for (let i = 97; i < 123; i++) alphabet.push(String.fromCharCode(i));

  for (const char of [...string])
    alphabet = alphabet.filter((c) => c !== char.toLowerCase());

  return alphabet.length === 0;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
