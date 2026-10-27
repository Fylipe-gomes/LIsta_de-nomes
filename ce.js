// Array começa com o nome do aluno
const nomes = ["Fylipe"];

const form = document.getElementById("formNome");
const input = document.getElementById("inputNome");
const lista = document.getElementById("listaNomes");

// Mostra todos os nomes do array na tela
function exibirNomes() {
  lista.innerHTML = "";

  for (let i = 0; i < nomes.length; i++) {
    const li = document.createElement("li");
    li.textContent = nomes[i];
    lista.appendChild(li);
  }
}

// Evento de envio do formulário
form.addEventListener("submit", function (evento) {
  // Impede o site de reiniciar (recarregar) ao enviar
  evento.preventDefault();

  const novoNome = input.value.trim();

  if (novoNome !== "") {
    nomes.push(novoNome);
    console.log(nomes);
    exibirNomes();
  }

  input.value = "";
});

// Mostra o nome inicial assim que a página abre
exibirNomes();