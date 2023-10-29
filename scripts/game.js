const gridCards = document.querySelector(".gridCards");
gridCards.innerHTML = "";

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

let firstCard = "";
let secondCard = "";

function checkMatchCards() {
  if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
    setTimeout(() => {
      firstCard.children[0].classList.add("disabledCard");
      secondCard.children[0].classList.add("disabledCard");
      firstCard = "";
      secondCard = "";
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

console.log(cardNames);
console.log(sortedCards);
