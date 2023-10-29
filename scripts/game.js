function createCards() {
  gridCards.innerHTML = "";
  sortedCards.forEach((card) => {
    gridCards.innerHTML += `
    <div class="card" name="${card}">
      <div class="flip front">
        <img src="../images/${card}.jpg" alt="" />
      </div>
      <div class="flip back">
        <img src="../images/logo-rj.png" alt="" />
      </div>
    </div>
  `;
  });
}

function checkGameWin() {
  const disabledCards = document.querySelectorAll(".disabledCard");
  if (disabledCards.length === 18) {
    alert(`Parabéns, você venceu com tempo de ${timer.textContent}`);
  }
}

function checkMatchCards() {
  if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
    setTimeout(() => {
      firstCard.children[0].classList.add("disabledCard");
      secondCard.children[0].classList.add("disabledCard");

      firstCard = "";
      secondCard = "";

      checkGameWin();
    }, 1000);
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipCard");
      secondCard.classList.remove("flipCard");
      firstCard = "";
      secondCard = "";
    }, 1000);
  }
}

function clickFlipCard() {
  const arrayCards = document.querySelectorAll(".card");
  arrayCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("flipCard")) return;

      console.log(firstCard);
      console.log(secondCard);

      if (firstCard === "") {
        card.classList.add("flipCard");
        firstCard = card;
      } else if (secondCard === "") {
        card.classList.add("flipCard");
        secondCard = card;

        checkMatchCards();
      }
    });
  });
}

function setStartTimer() {
  setInterval(() => {
    const dateNow = new Date();
    const dateDiff = new Date(dateNow - initialDateTimer);

    const minutes = String(dateDiff.getMinutes()).padStart(2, "0");
    const seconds = String(dateDiff.getSeconds()).padStart(2, "0");

    timer.innerHTML = `${minutes}:${seconds}`;
  }, 1000);
}

const gridCards = document.querySelector(".gridCards");
const playerName = document.querySelector(".playerName");
const timer = document.querySelector(".timer");

const storagePlayerName = localStorage.getItem("@memory_game:player_name");

playerName.innerHTML = storagePlayerName;

const cardNames = [
  "card_1",
  "card_2",
  "card_3",
  "card_4",
  "card_5",
  "card_6",
  "card_7",
  "card_8",
  "card_9",
  "card_10",
  "card_11",
  "card_12",
  "card_13",
  "card_14",
  "card_15",
];

const arrayCardNames = cardNames
  .sort(() => Math.random() - 0.5)
  .filter((value, index) => index < 9);

const sortedCards = [...arrayCardNames, ...arrayCardNames].sort(
  () => Math.random() - 0.5
);

createCards();

let firstCard = "";
let secondCard = "";
clickFlipCard();

const initialDateTimer = new Date();
setStartTimer();
