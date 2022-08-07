const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const itemElms = document.querySelectorAll(".item");
itemElms.forEach((itemEl) => {
  console.log(`Category: ${itemEl.querySelector("h2").textContent}`);
  console.log(`Elements: ${itemEl.querySelectorAll("li").length}
    `);
});
