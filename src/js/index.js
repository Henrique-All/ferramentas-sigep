function filtrarPorNome(criterio) {
  return (array) =>
    array.filter((item) =>
      item.nome.toLowerCase().includes(criterio.toLowerCase())
    );
}

// Função para renderizar
function renderLinks(filtro) {
  // Filtrar os dados
  const ferramentasFiltrados = filtrarPorNome(filtro)(ferramentas);

  // Renderizar ferramentas
  document.getElementById("ferramentas").innerHTML = ferramentasFiltrados
    .map((ferramentas) => {
      return `
        <a class="card" href="${ferramentas.url}" target="_blank">
          <div class="card-header">
            <img src="./src/images/logo.png" />
          </div>
          <p class="name">${ferramentas.nome}</p>
        </a>
      `;
    })
    .join("");
}

// Chamar renderLinks
renderLinks("");

// Adicionar evento de input
document.getElementById("buscar-nome").addEventListener("input", (e) => {
  renderLinks(e.target.value); // Atualiza a renderização
});
