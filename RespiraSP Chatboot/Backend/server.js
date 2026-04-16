const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Groq = require('groq-sdk');

const app = express();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.use(cors());
app.use(express.json());

app.post('/gerar-roteiro', async (req, res) => {
  const { dias, pessoas, orcamento, preferencia, acessibilidade } = req.body;

  // Valida se os campos chegaram
  if (!dias || !pessoas || !orcamento) {
    return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios.' });
  }

  const prompt = `
Você é um guia turístico especializado em São Paulo, Brasil.
Crie um roteiro de passeio completo e detalhado com base nas informações abaixo:

- Dias de passeio: ${dias}
- Número de pessoas: ${pessoas}
- Orçamento: ${orcamento} (baixo = gratuito/barato, médio = até R$100/dia por pessoa, alto = sem restrição)
- Preferência de local: ${preferencia || 'sem preferência'}
- Necessidade de acessibilidade: ${acessibilidade ? 'Sim — inclua apenas locais acessíveis para cadeirantes' : 'Não'}

Formate o roteiro dia a dia, com:
- Nome dos locais com endereço
- Horário sugerido para cada atividade
- Dica de transporte (metrô, ônibus, app)
- Estimativa de custo por pessoa
- Dica especial do guia

Responda em português brasileiro, de forma amigável e prática.
`;

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile', // modelo gratuito do Groq
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
    });

    const roteiro = completion.choices[0].message.content;
    res.json({ roteiro });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao gerar roteiro. Tente novamente.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));