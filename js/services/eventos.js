const botoes = document.querySelectorAll(".filtro-btn");
const cards = document.querySelectorAll(".card");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {

    // ativa botão
    botoes.forEach(b => b.classList.remove("active"));
    botao.classList.add("active");

    const filtro = botao.getAttribute("data-filtro");

    cards.forEach(card => {
      const categoria = card.getAttribute("data-categoria");

      if (filtro === "todos" || categoria === filtro) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});