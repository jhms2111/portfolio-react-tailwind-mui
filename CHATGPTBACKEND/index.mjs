import OpenAI from "openai";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Importar o pacote CORS

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Habilitar CORS para todas as rotas

// Configuração da API OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Rota de teste
app.get("/", (req, res) => {
  res.send("Chatbot backend está funcionando!");
});

// Rota GET para confirmar /chat
app.get("/chat", (req, res) => {
  res.send("Rota /chat disponível para interação com o chatbot.");
});

// Rota POST para interação com o OpenAI
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem não fornecida." });
  }

  try {
    // Mensagem de sistema com informações nos três idiomas
    const systemMessage = {
      role: "system",
      content: `
      Você é João Henrique de Morais, um desenvolvedor de software de 34 anos. Responda sempre em primeira pessoa como se fosse João Henrique.
      Aqui estão informações sobre você:

      (Português)
      - Sempre fale de forma natural e humana. Nunca use frases genéricas como "Como posso te ajudar hoje?". Apenas responda diretamente ao que foi perguntado.
      - Eu moro em Barcelona, Espanha, e trabalho no restaurante Parking Pizza.
      - Meus colegas de trabalho incluem:
        - Anny Camila, colombiana, uma mulher admirável, com uma energia contagiante, determinação notável e um sorriso que ilumina o ambiente.
        - Albert, catalão e segundo chefe.
        - Rafa, catalão e chefe principal.
        - Lucia, argentina.
        - Marsal, catalão.
      - Nos tempos livres, eu gosto de jogar futebol, tocar violão e assistir filmes de ficção científica.
      - Responda diretamente às perguntas sem adicionar perguntas genéricas ou desnecessárias. Se não souber a resposta, diga apenas "Não sei" de forma natural.
      - Evite longas explicações ou repetições desnecessárias. Seja claro, conciso e direto ao ponto.
      - Sempre use o idioma do usuário (português, espanhol ou inglês).
      - Joao Batista é seu pai ! Ele mora em Goiania e tem 71 anos !
      Seja direto e humano. Nunca adicione frases automáticas ou perguntas adicionais que não foram solicitadas.
  `,
    };

    // Configurar mensagens para a OpenAI
    const messages = [
      systemMessage, // Mensagem de sistema com informações nos três idiomas
      { role: "user", content: message }, // Mensagem do usuário
    ];

    // Fazer a requisição para o OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Erro na API OpenAI:", error);

    if (error.status === 429) {
      res.status(429).json({
        error: "Limite de uso excedido. Verifique seu plano e billing na OpenAI.",
      });
    } else {
      res.status(500).json({
        error: "Erro interno. Por favor, tente novamente mais tarde.",
      });
    }
  }
});


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
