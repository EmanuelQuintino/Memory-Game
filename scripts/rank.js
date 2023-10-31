const backButton = document.querySelector(".backButton");
const tableRank = document.querySelector(".tableRank");

function backPage() {
  window.history.back();
}

const storageRank = JSON.parse(localStorage.getItem("@memory_game:rank"));

const rankSorted = storageRank
  .sort((a, b) => {
    if (a.time > b.time) return 1;
    if (a.time < b.time) return -1;
    return 0;
  })
  .filter((rank, index) => index < 10);

tableRank.innerHTML = `
  <tr>
    <th>N°</th>
    <th>Nome</th>
    <th>Tempo</th>
  </tr>
`;

for (let i = 0; i < rankSorted.length; i++) {
  tableRank.innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${rankSorted[i].name}</td>
      <td>${rankSorted[i].time}</td>
    </tr>
  `;
}

backButton.addEventListener("click", backPage);
