import OpenAI from "openai";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

// Configuração do middleware
app.use(express.json());

// Configurar a API do OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Armazene a chave em .env para segurança
});

// Rota de teste para o servidor
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
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Trocar para um modelo mais econômico
        messages: [{ role: "user", content: message }],
      });
  
      const reply = completion.choices[0].message.content;
      res.json({ reply });
    } catch (error) {
      console.error("Erro na API OpenAI:", error);
  
      // Verificar se é um erro de quota
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
