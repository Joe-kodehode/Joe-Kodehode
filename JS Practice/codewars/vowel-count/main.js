// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// With includes
function getCount(str) {
  const letter = str.split("");
  console.log(letter);
  let count = 0;

  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < letter.length; i++) {
    if (vowels.includes(letter[i])) count++;
  }
  return count;
}

// With spread operator & filter for less code
const getCount = (str) =>
  [...str].filter((char) => ["a", "e", "i", "o", "u"].includes(char)).length;

// With regex for even less code
const getCount = (str) => str.match(/a|e|i|o|u/g);

console.log(getCount("aeiou ae io u qwrt plkmn"));
