const backButton = document.querySelector(".backButton");
const tableRank = document.querySelector(".tableRank");

function backPage() {
  window.history.back();
}

const storageRank = JSON.parse(localStorage.getItem("@memory_game:rank"));

if (storageRank) {
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

  for (let i = 0; i < 10; i++) {
    tableRank.innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${rankSorted[i] ? rankSorted[i].name : ""}</td>
      <td>${rankSorted[i] ? rankSorted[i].time : ""}</td>
    </tr>
  `;
  }
}

backButton.addEventListener("click", backPage);
