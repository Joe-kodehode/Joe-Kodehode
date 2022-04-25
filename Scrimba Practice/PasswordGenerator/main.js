let passOne = document.getElementById("pass1");
let passTwo = document.getElementById("pass2");
let passThree = document.getElementById("pass3");
let passFour = document.getElementById("pass4");

let passLength = document.getElementById("pass-length");
let slider = document.getElementById("slider");

let characters = [
  1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","*","@","<",">","+","-","^","?","(",")"
];

function getRandomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function getRandomPassword(numberChar) {
  let randomPassword = "";
  for (let i = 0; i <= numberChar; i++) {
    randomPassword += getRandomChar();
  }
  return randomPassword;
}

function updatePassLength() {
  passLength.textContent = slider.value;
}

function generatePasswords() {
  const numberChar = slider.value;
  passOne.textContent = getRandomPassword(numberChar);
  passTwo.textContent = getRandomPassword(numberChar);
  passThree.textContent = getRandomPassword(numberChar);
  passFour.textContent = getRandomPassword(numberChar);
}

updatePassLength();

// Copy function

function copyToClipboard(clickedField) {
  navigator.clipboard.writeText(clickedField.textContent);
  clickedField.textContent = "copied";
}
