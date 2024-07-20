const inputUserName = document.querySelector("#name-input");
const outputUserName = document.querySelector("#name-output");
console.log(inputUserName);

inputUserName.addEventListener("input", handleInput);

function handleInput() {
  if (this.value.trim() === "") {
    outputUserName.textContent = "Anonymous";
  } else {
    outputUserName.textContent = this.value.trim();
  }
}
