function carregarMedicamentos() {
  const container = document.getElementById("medicamentos-container");
  if (!container) return; 

  let medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

  container.innerHTML = "";

  if (medicamentos.length === 0) {
    container.innerHTML = "<p id='mensagem-vazio'>Nenhum medicamento cadastrado</p>";
    return;
  }

  medicamentos.forEach((med) => {
    const card = document.createElement("div");
    card.classList.add("medicamento-card");
    card.innerHTML = `
      <h3>${med.nome}</h3>
      <p><strong>Detalhes:</strong> ${med.detalhes}</p>
      <p><strong>Localização:</strong> ${med.localizacao}</p>
    `;
    container.appendChild(card);
  });
}


function cadastrarMedicamento() {
  const nome = document.getElementById("nome").value.trim();
  const detalhes = document.getElementById("detalhes").value.trim();
  const localizacao = document.getElementById("localizacao").value.trim();

  if (!nome || !detalhes || !localizacao) {
    alert("Preencha todos os campos!");
    return;
  }

  let medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

  medicamentos.push({ nome, detalhes, localizacao });

  localStorage.setItem("medicamentos", JSON.stringify(medicamentos));

  alert("Medicamento cadastrado com sucesso!");
  window.location.href = "index.html"; 
}


const btnCadastrar = document.getElementById("btnCadastrar");
if (btnCadastrar) {
  btnCadastrar.addEventListener("click", cadastrarMedicamento);
}


window.onload = carregarMedicamentos;
