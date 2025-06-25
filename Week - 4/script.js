let count = 0;
const countDisplay = document.getElementById("count");

function increment() {
  count++;
  countDisplay.textContent = count;
}

function resetCount() {
  count = 0;
  countDisplay.textContent = count;
}
