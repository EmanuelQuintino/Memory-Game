const backButton = document.querySelector(".backButton");
const tableRank = document.querySelector(".tableRank");

function backPage() {
  window.history.back();
}

backButton.addEventListener("click", backPage);

const storageRank = JSON.parse(localStorage.getItem("@memoryGame:rank"));

let rankSorted;
if (storageRank) {
  rankSorted = storageRank
    .sort((a, b) => {
      if (a.time > b.time) return 1;
      if (a.time < b.time) return -1;
      return 0;
    })
    .filter((rank, index) => index < 10);
}

tableRank.innerHTML = `
  <tr>
    <th>N°</th>
    <th>Nome</th>
    <th>Tempo</th>
  </tr>
`;

for (let i = 0; i < 10; i++) {
  tableRank.innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${rankSorted ? rankSorted[i]?.name || "" : ""}</td>
      <td>${rankSorted ? rankSorted[i]?.time || "" : ""}</td>
    </tr>
  `;
}
