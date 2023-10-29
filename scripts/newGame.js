const inputName = document.querySelector(".inputName");
const newGameForm = document.querySelector(".newGameForm");
const newGameButton = document.querySelector(".newGameButton");

function validateInput(event) {
  if (event.target.value.length > 2) {
    newGameButton.removeAttribute("disabled");
  } else {
    newGameButton.setAttribute("disabled", "true");
  }
}

inputName.addEventListener("input", validateInput);
