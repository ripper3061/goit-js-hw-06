const validationInput = document.querySelector("input");
const inputValueAmount = document.querySelector('input[data-length="6"]');

validationInput.addEventListener("blur", onInputValueChecks);
validationInput.addEventListener("focus", () => {
  validationInput.classList.remove("valid");
  validationInput.classList.remove("invalid");
});

function onInputValueChecks(event) {
  if (
    event.currentTarget.value.length !== Number(validationInput.dataset.length)
  ) {
    // validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  } else {
    // validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
}
