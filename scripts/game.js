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
    clearInterval(finishTimer);

    const userData = {
      name: playerName.textContent,
      time: timer.textContent,
    };

    const storageRank = JSON.parse(localStorage.getItem("@memory_game:rank"));
    console.log(storageRank);

    if (storageRank) {
      const rankData = [...storageRank, userData];
      const sortedRankData = rankData.sort((a, b) => {
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
      });

      localStorage.setItem("@memory_game:rank", JSON.stringify(sortedRankData));
    } else {
      localStorage.setItem("@memory_game:rank", JSON.stringify([userData]));
    }

    alert(`Parabéns, você venceu com tempo de ${userData.time}!`);
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
    }, 500);
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipCard");
      secondCard.classList.remove("flipCard");
      firstCard = "";
      secondCard = "";
    }, 500);
  }
}

function clickFlipCard() {
  const arrayCards = document.querySelectorAll(".card");
  arrayCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("flipCard")) return;

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
  finishTimer = setInterval(() => {
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
const storageRank = localStorage.getItem("@memory_game:rank");

console.log(storageRank);

console.log(
  JSON.parse(storageRank).sort((a, b) => {
    if (a.time > b.time) return 1;
    if (a.time < b.time) return -1;
    return 0;
  })
);

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
let finishTimer;
setStartTimer();
