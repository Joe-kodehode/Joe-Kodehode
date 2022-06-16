// conditionals oppgave

const userName = "Tom";
const userAge = 18;

let userIsAdmin = false;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

// Lag en conditional som sjekker om userName eksisterer, at brukeren er over 18, og at user ikke er blocked.
// Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
// Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
// Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".

// console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.

// endre på verdiene i variablene for å se at din conditional kan håndtere alle cases

// if (userName === true && userAge > 18 && userIsBlocked === false) {
//   if (userIsAdmin === true) {
//     goToPage = "/admin";
//   }
//   userIsLoggedIn = true;
//   goToPage = "/home";
// } else {
//   console.log("User is blocked");
// }

let message = "";

userName && userAge >= 18 && !userIsBlocked && !userIsAdmin
  ? (userIsLoggedIn = true) &&
    (goToPage = "/home") &&
    console.log("Welcome, user")
  : userIsAdmin
  ? (goToPage = "/admin") &&
    (userIsLoggedIn = true) &&
    console.log("Welcome, admin")
  : console.log("User is blocked");

console.log(userIsLoggedIn);
console.log(goToPage);
