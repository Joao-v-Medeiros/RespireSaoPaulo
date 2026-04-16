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

// ── LÓGICA DO MODO ESCURO ──

const gerenciarTema = () => {
  const corpoPagina = document.body;

  // Função para aplicar o modo escuro
  const alternarTema = (e) => {
    if (e) e.preventDefault();
    corpoPagina.classList.toggle('dark-mode');
    
    const estaEscuro = corpoPagina.classList.contains('dark-mode');
    localStorage.setItem('tema', estaEscuro ? 'escuro' : 'claro');
  };

  // 1. Tenta encontrar o botão pelo atributo data-luna (que está no seu HTML)
  const botaoLua = document.querySelector('[data-luna]');

  if (botaoLua) {
    botaoLua.addEventListener('click', alternarTema);
  }

  // 2. Caso o ícone esteja dentro do Web Component <main-header>
  const headerComponent = document.querySelector('main-header');
  if (headerComponent && headerComponent.shadowRoot) {
    // Procura por um botão ou classe .lua dentro do shadowRoot
    const iconeShadow = headerComponent.shadowRoot.querySelector('button') || 
                        headerComponent.shadowRoot.querySelector('.lua');
    if (iconeShadow) {
      iconeShadow.addEventListener('click', alternarTema);
    }
  }
};

// Aplica o tema salvo imediatamente para evitar o flash branco
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('dark-mode');
}

// Inicia a lógica após o carregamento
window.addEventListener('DOMContentLoaded', gerenciarTema);