const changeBGColourBtn = document.querySelector(".change-color");
const newColourSpan = document.querySelector(".color");
const body = document.querySelector("body");

changeBGColourBtn.addEventListener("click", handleBGColourChange);

function handleBGColourChange() {
  const newColourGenerated = getRandomHexColor();
  body.setAttribute("style", `background-color: ${newColourGenerated}`);
  newColourSpan.textContent = newColourGenerated;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
