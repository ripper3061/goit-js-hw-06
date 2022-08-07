const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addElementsUl = document.querySelector("#ingredients");
// let mass = [];
// const elementsUl = ingredients.forEach((ingredient) => {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add("item");
//   mass.push(liEl);
// });

// addElementsUl.append(...mass);

const makeLiItemsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("item");
    return liEl;
  });
};

const elements = makeLiItemsList(ingredients);
addElementsUl.append(...elements);
