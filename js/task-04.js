const decrementValue = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementValue = document.querySelector(
  'button[data-action="increment"]'
);
const value = document.querySelector("#value");
let count = 0;

function onDecrementValue(e) {
  count -= 1;
  value.textContent = count;
}
function onIncrementValue(e) {
  count += 1;
  value.textContent = count;
}

decrementValue.addEventListener("click", onDecrementValue);
incrementValue.addEventListener("click", onIncrementValue);
