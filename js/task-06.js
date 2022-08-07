const validationInput = document.querySelector("input");
const inputValueAmount = document.querySelector('input[data-length="6"]');

validationInput.addEventListener("blur", onInputValueChecks);

function onInputValueChecks(event) {
  event.currentTarget.value.length !== Number(validationInput.dataset.length)
    ? validationInput.classList.add("invalid")
    : validationInput.classList.remove("invalid");
  validationInput.classList.add("valid");
}
