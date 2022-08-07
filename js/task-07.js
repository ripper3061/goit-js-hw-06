const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

input.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
