"use strict";

let inputEl = document.getElementById("input");

let lengthEl = document.getElementById("lengthOutput");
let volumeEl = document.getElementById("volumeOutput");
let massEl = document.getElementById("massOutput");

inputEl.addEventListener("change", conversion);

function conversion() {
  let inputNumber = inputEl.value;

  // Length

  let feetToMeter = inputNumber / 3.28084;

  lengthEl.textContent =
    inputNumber +
    " Meters = " +
    (inputNumber * 3.28084).toFixed(3) +
    " Feet | " +
    inputNumber +
    " Feet = " +
    feetToMeter.toFixed(3) +
    " Meters";

  // Volume
  let literToGallon = inputNumber / 3.785411784;
  let gallonToLiter = inputNumber * 3.785411784;
  volumeEl.textContent =
    inputNumber +
    " Liters = " +
    literToGallon.toFixed(3) +
    " Gallons | " +
    inputNumber +
    " Gallons = " +
    gallonToLiter.toFixed(3) +
    " Liters";

  // Mass
  let kiloToPound = inputNumber * 2.20462262185;
  let poundToKilo = inputNumber / 2.20462262185;
  massEl.textContent =
    inputNumber +
    " Kilos = " +
    kiloToPound.toFixed(3) +
    " Pounds | " +
    inputNumber +
    " Pounds = " +
    poundToKilo.toFixed(3) +
    " Kilos";
}
