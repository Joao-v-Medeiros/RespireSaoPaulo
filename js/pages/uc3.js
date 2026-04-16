// ── FILTROS INTERATIVOS ──
const botoesFiltro = document.querySelectorAll('.filtros__botao');
const temas = document.querySelectorAll('.tema');

botoesFiltro.forEach(botao => {
  botao.addEventListener('click', () => {

    // atualiza botão ativo
    botoesFiltro.forEach(b => b.classList.remove('filtros__botao--ativo'));
    botao.classList.add('filtros__botao--ativo');

    const temaSelecionado = botao.dataset.tema;

    temas.forEach(tema => {
      if (temaSelecionado === 'todos' || tema.dataset.tema === temaSelecionado) {
        tema.classList.remove('tema--oculto');
      } else {
        tema.classList.add('tema--oculto');
      }
    });

    // scroll suave até o tema filtrado
    if (temaSelecionado !== 'todos') {
      const temaAlvo = document.getElementById(temaSelecionado);
      if (temaAlvo) {
        setTimeout(() => {
          temaAlvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  });
});

// ── ANIMAÇÃO DE ENTRADA DOS CARTÕES AO ROLAR ──
const cartoes = document.querySelectorAll('.cartao');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada, i) => {
    if (entrada.isIntersecting) {
      setTimeout(() => {
        entrada.target.style.opacity = '1';
        entrada.target.style.transform = 'translateY(0)';
      }, i * 80);
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.1 });

cartoes.forEach(cartao => {
  cartao.style.opacity = '0';
  cartao.style.transform = 'translateY(30px)';
  cartao.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease';
  observador.observe(cartao);
});