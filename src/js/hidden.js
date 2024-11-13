// Variaveis para as tabs
const tabFerramentas = document.getElementById("tab-ferramentas");
const tabTcm = document.getElementById("tab-tcm");

// Variaveis para as divs
const divFerramentas = document.getElementById("h-ferramentas");
const divTcm = document.getElementById("h-tcm");

// Função para esconder todas as divs e mostrar apenas a selecionada
function showTab(tab) {
  divFerramentas.classList.add("hidden");
  divTcm.classList.add("hidden");

  // Função que remove a class
  if (tab == "h-ferramentas") {
    divFerramentas.classList.remove("hidden");
  } else if (tab === "h-tcm") {
    divTcm.classList.remove("hidden");
  }
}

// Event listeners para cada botão
tabFerramentas.addEventListener("click", () => showTab("h-ferramentas"));
tabTcm.addEventListener("click", () => showTab("h-tcm"));

// Exibe a primeira aba por padrão
showTab("h-ferramentas");
