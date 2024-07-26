const form = document.querySelector(".login-form");

form.elements.email.setAttribute("placeholder", `Type area`);

form.addEventListener("submit", handlerLogin);

function handlerLogin(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const inputValues = {
    [form.elements.email.name]: email.trim(),
    [form.elements.password.name]: password.trim(),
  };

  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  } else {
    console.log(inputValues);
    form.reset();
  }
}
