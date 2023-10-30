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

function handleSubmitNewGame(event) {
  event.preventDefault();
  localStorage.setItem("@memory_game:player_name", inputName.value);
  window.location.href = "../pages/game.html";
}

inputName.addEventListener("input", validateInput);
newGameForm.addEventListener("submit", handleSubmitNewGame);
