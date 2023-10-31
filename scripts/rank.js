const backButton = document.querySelector(".backButton");

function backPage() {
  window.history.back();
}

backButton.addEventListener("click", backPage);
