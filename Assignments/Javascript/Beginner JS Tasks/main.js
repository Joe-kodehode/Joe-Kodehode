// 1. Finn en tekst på nettet (den kan enten være på norsk eller engelsk). Velg en wordcount og se til at teksten er innfor den

let text =
  "Why a re-introduction? Because JavaScript is notorious for being misunderstood. It is often derided as being a toy, but beneath its layer of deceptive simplicity, powerful language features await. JavaScript is now used by an incredible number of high-profile applications, showing that deeper knowledge of this technology is an important skill for any web or mobile developer. if its useful to start with an overview of the languages history. JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape. JavaScript was first released with Netscape 2 early in 1996. It was originally going to be called LiveScript, but it was renamed in an ill-fated marketing decision that attempted to capitalize on the popularity of Sun Microsystems Java language — despite the two having very little in common. This has been a source of confusion ever since. Several months later, Microsoft released JScript with Internet Explorer 3. It was a mostly-compatible JavaScript work-alike. Several months after that, Netscape submitted JavaScript to Ecma International, a European standards organization, which resulted in the first edition of the ECMAScript standard that year. The standard received a significant update as ECMAScript edition 3 in 1999, and it has stayed pretty much stable ever since. The fourth edition was abandoned, due to political differences concerning language complexity. Many parts of the fourth edition formed the basis for ECMAScript edition 5, published in December of 2009, and for the 6th major edition of the standard, published in June of 2015";

function wordCount(str) {
  return str.split(" ").length;
}

console.log(wordCount(text));

if (wordCount(text) > 76) {
  console.log("Your document is too long");
} else {
  console.log("Your document is under the max length");
}

// 2. lag en loop som teller til 10

for (let i = 0; i <= 10; i++) {}

// 3. finn ordene "if"/"hvis", "as"/"som", "and"/"og"  i teksten du valgte. Kutt ut disse ordene pluss 5 tegn på hver side av ordene i teksten. Husk at mellomrom er også et tegn. Det trengs bare første instance av ordene. Husk å lagre det du kutter ut i en egen variabel.

let findIf = text.indexOf(" if ");
let findAs = text.indexOf(" as ");
let findAnd = text.indexOf(" and ");

let ifArray = text.slice(findIf - 4, findIf + 8);
console.log(ifArray);
let asArray = text.slice(findAs - 4, findAs + 8);
console.log(asArray);
let andArray = text.slice(findAnd - 4, findAnd + 9);
console.log(andArray);

// Better way of doing it using a function, array and for loop, less repetition. Shown by a classmate, understand mostly but don't think I could replicate on my own yet.

// function slice(search) {
//   index = text.indexOf(` ${search} `);
//   return text.slice(index - 4, index + search.length + 6);
// }

// let array = ["if", "as", "and"];
// for (let i = 0; i < array.length; i++) {
//   console.log(slice(array[i]));
// }

// 4. sett sammen de nye settningene fra variablene dine
let newText = ifArray.concat(asArray, andArray);
console.log(newText);

// 5. bytt ut ordene ("if"/"hvis", "as"/"som", "and"/"og") med norkse/engelske ord i den nye teksten din.

newArray = newText.split("");
newArray.splice(5, 2, "hvis");
newArray.splice(16, 2, "som");
newArray.splice(27, 3, "og");

console.log(newArray);

// Del 2:
// 6. lag et lite spill hvor spilleren har 3 liv. Hint: while loops

let livesEl = document.getElementById("life");
let lives = 3;

function result() {
  let randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber == 0) {
    lives--;
    livesEl.textContent = lives;
  } else {
    lives++;
    livesEl.textContent = lives;
  }
}

while (lives > 0) {
  result();
  console.log(lives);
}

// Del 3:
// 7. lag en array med 10 ord og en med 10 tall.

let wordArray = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Del 4:
// 8. sett alle tallene utenom det første og siste til å være det samme tallet et tall om gangen

for (i = 1; i < numberArray.length - 1; i++) {
  numberArray.splice(i, 1, 5);
  console.log(numberArray);
}
