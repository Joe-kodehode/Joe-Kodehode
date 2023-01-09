const wordArr = [
  " deTTe",
  "er  ",
  " tekST ",
  "som",
  "må",
  "rydDES   ",
  "Opp",
  "   i   ",
];

const cleanedArr = [];

const wordCleaner = (word) => {
  return word.trim().toLowerCase();
};

wordArr.forEach((word) => {
  cleanedArr.push(wordCleaner(word));
});

const result = cleanedArr.join(" ");

console.log(result);

/*
    .trim()  .tolowercase()
  - Skriv en funksjon som heter wordCleaner, som tar i mot en string, og returnerer stringen med whitespace
  fjernet fra begynnelse og slutten, og gjør alt om til små bokstaver.
   
  - Skriv en loop som looper gjennom wordArr og kjører wordCleaner på hvert ord, og pusher
  dette ordet inn i cleanedArr
   
  - Tilslutt, kombiner cleanedArr sammen til en string, og konsoll logg denne.
   
  Konsoll loggen skal se sånn ut:
   
  "dette er tekst som må ryddes opp i"
   
  */
