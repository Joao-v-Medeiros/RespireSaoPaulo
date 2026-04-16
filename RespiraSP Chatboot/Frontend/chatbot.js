const API_URL = 'http://localhost:3001/gerar-roteiro';

// Seleciona o orçamento via botões visuais
function selecionarOrcamento(btn) {
  document.querySelectorAll('.orc-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('orcamento').value = btn.dataset.valor;
}

async function gerarRoteiro() {
  const dias         = document.getElementById('dias').value;
  const pessoas      = document.getElementById('pessoas').value;
  const orcamento    = document.getElementById('orcamento').value;
  const preferencia  = document.getElementById('preferencia').value;
  const acessibilidade = document.getElementById('acessibilidade').checked;

  if (!dias || !pessoas || !orcamento) {
    mostrarErro('Preencha os campos obrigatórios: dias, pessoas e orçamento.');
    return;
  }

  esconderErro();
  document.getElementById('formulario').style.display = 'none';
  document.getElementById('loading').style.display = 'flex';

  try {
    const resposta = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dias, pessoas, orcamento, preferencia, acessibilidade })
    });

    const dados = await resposta.json();

    document.getElementById('loading').style.display = 'none';

    if (dados.erro) {
      mostrarErro(dados.erro);
      document.getElementById('formulario').style.display = 'block';
      return;
    }

    const textoFormatado = dados.roteiro
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    document.getElementById('texto-roteiro').innerHTML = textoFormatado;
    document.getElementById('resultado').style.display = 'flex';

  } catch (e) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
    mostrarErro('Não foi possível conectar ao servidor. Verifique se o backend está rodando na porta 3001.');
  }
}

function reiniciar() {
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('formulario').style.display = 'block';
  document.getElementById('dias').value = '';
  document.getElementById('pessoas').value = '';
  document.getElementById('preferencia').value = '';
  document.getElementById('acessibilidade').checked = false;
  document.getElementById('orcamento').value = '';
  document.querySelectorAll('.orc-btn').forEach(b => b.classList.remove('selected'));
  esconderErro();
}

function mostrarErro(msg) {
  const el = document.getElementById('erro-msg');
  el.textContent = msg;
  el.style.display = 'block';
}

function esconderErro() {
  document.getElementById('erro-msg').style.display = 'none';
}
