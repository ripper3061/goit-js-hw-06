const decrementValue = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementValue = document.querySelector(
  'button[data-action="increment"]'
);
const value = document.querySelector("#value");

function onDecrementValue(e) {
  value.textContent -= 1;
}
function onIncrementValue(e) {
  value.textContent = Number(value.textContent) + 1;
}

decrementValue.addEventListener("click", onDecrementValue);
incrementValue.addEventListener("click", onIncrementValue);
