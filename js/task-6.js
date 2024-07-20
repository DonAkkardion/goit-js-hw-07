const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createElementsBtn = controls.querySelector("[data-create]");
const destroyElementsBtn = controls.querySelector("[data-destroy]");
const newElementsContainer = document.querySelector("#boxes");

createElementsBtn.addEventListener("click", () => {
  if ((input.value >= 1) & (input.value <= 100)) {
    createBoxes(input.value);
  }
});

destroyElementsBtn.addEventListener("click", () => {
  destroyBoxes();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  newElementsContainer.innerHTML = "";
  let dimensions = 30;
  for (let index = 0; index < amount; index++) {
    newElementsContainer.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color: ${getRandomHexColor()}; width: ${dimensions}px; height: ${dimensions}px;"></div>`
    );
    dimensions += 10;
  }
}
function destroyBoxes() {
  newElementsContainer.innerHTML = "";
}
