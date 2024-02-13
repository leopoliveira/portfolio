function atualizaAnoRodape() {
  // Automaticamente atualiza o ano no rodapé do site com o ano atual.
  document.querySelector("#ano-atual").textContent =
    new Date().getFullYear();
}

function atualizaSaudacao() {
  // Automaticamente atualiza a saudação no cabeçalho do site com base no horário do dia.
  const saudacaoElement = document.querySelector("#saudacao h1");
  const olaString = "Olá, seja bem-vindo(a).";

  const data = new Date();
  const hora = data.getHours();
  if (hora >= 0 && hora < 12) {
    saudacaoElement.textContent = `${olaString} Bom dia!`;
  } else if (hora >= 12 && hora < 18) {
    saudacaoElement.textContent = `${olaString} Boa tarde!`;
  } else {
    saudacaoElement.textContent = `${olaString} Boa noite!`;
  }
}

function atualizaIdade() {
  // Automaticamente atualiza a minha idade.
  const dataNascimento = new Date("1995-04-10").getFullYear();
  const dataAtual = new Date().getFullYear();

  const idadeSpan = document.querySelector("#idade");
  idadeSpan.textContent = dataAtual - dataNascimento;
}

function hamburguerMenu() {
  const menu = document.querySelector(".navbar ul");
  const hamburguerMenu = document.querySelector(".hamburguer");

  hamburguerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

function hideHambuguerMenu() {
  const menuItems = document.querySelectorAll(".navbar ul li");
  const hamburguerMenu = document.querySelector(".hamburguer");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        hamburguerMenu.click();
    });
  });
}

atualizaAnoRodape();
atualizaSaudacao();
atualizaIdade();
hamburguerMenu();
hideHambuguerMenu();
