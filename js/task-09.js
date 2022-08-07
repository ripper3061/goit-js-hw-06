function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const bcgColorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", onchangeColorBtn);

function onchangeColorBtn(event) {
  const RandomHexColor = getRandomHexColor();
  body.style.backgroundColor = RandomHexColor;
  bcgColorValue.textContent = RandomHexColor;
}
