const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addElementsUl = document.querySelector("#ingredients");
let mass = [];
const elementsUl = ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  mass.push(liEl);
});

addElementsUl.append(...mass);
