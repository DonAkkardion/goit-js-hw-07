const itemsInCategory = document.querySelectorAll("li.item");

console.log(`Number of categories: ${itemsInCategory.length}`);

itemsInCategory.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
