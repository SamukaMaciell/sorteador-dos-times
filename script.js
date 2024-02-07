function sortearTimes() {
  // Jogadores disponíveis
  const jogadores = [
    "Maico",
    "Mano",
    "Willian",
    "Giel",
    "Samuel",
    "Beloto",
    "Vitor",
    "Diara",
    "Jogador 11",
    "Jogador 12",
  ];

  // Embaralhar os jogadores
  jogadores.sort(() => Math.random() - 0.5);

  // Dividir em duas equipes
  const equipe1 = jogadores.slice(0, 5);
  const equipe2 = jogadores.slice(5, 10);

  // Exibir os resultados
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `
        <p><strong>Equipe <span>Alan</span>:</strong> ${equipe1.join(", ")}</p>
        <p><strong>Equipe <span>Marada</span>:</strong> ${equipe2.join(
          ", "
        )}</p>
    `;
}
