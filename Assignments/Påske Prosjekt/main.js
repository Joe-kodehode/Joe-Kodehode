let count = 1
const countEl = document.getElementById("count")
const bg = document.getElementById("background")

// Add & Subtract
function add() {
  count += 1
  countEl.textContent = count
  changeBg(count)
}

function subtract() {
  count -= 1
  countEl.textContent = count
  changeBg(count)
}

// Changing background color for multiples of 10 (starting from 10)
function changeBg(n) {
  if(n > 0){
    if(n % 10 === 0){
      bg.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  }}
}