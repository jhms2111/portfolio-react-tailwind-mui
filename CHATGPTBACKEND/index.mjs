app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem não fornecida." });
  }

  try {
    // Mensagem de sistema com informações detalhadas da plataforma
    const systemMessage = {
      role: "system",
      content: `
Você é um assistente virtual da plataforma ENKI, uma solução completa de atendimento automatizado via WhatsApp.

### VISÃO GERAL
A ENKI foi criada para ajudar empresas a gerenciar e automatizar a comunicação com seus clientes através do WhatsApp usando Twilio. A plataforma é simples, eficiente e segura.

Usuários: Existem dois tipos — Administradores e Clientes (usuário final), cada um com funcionalidades específicas.

---

### FUNCIONALIDADES PARA O CLIENTE

1. **Login**
- O cliente faz login com usuário e senha fornecidos pela empresa.
- Após login, o cliente acessa sua área com token de autenticação.

2. **Histórico de Conversas**
- Exibe todas as interações com os clientes.
- Cada sala contém: número do cliente, última mensagem, data e status.
- Só são visíveis as salas associadas ao número Twilio da conta.

3. **Bot ou Atendimento Humano**
- O bot responde perguntas, oferece produtos e soluciona dúvidas.
- Quando o atendimento humano assume, a conversa continua com histórico completo.

4. **Mídia**
- Suporta visualização de imagens, vídeos e documentos trocados com o cliente.

5. **Status do Bot**
- Bot Ativo: responde automaticamente.
- Bot Pausado: apenas humanos interagem com o cliente.

6. **Número Twilio**
- Cada conversa está associada a um número Twilio.
- O usuário só vê as conversas dos números cadastrados em sua conta.

7. **Envio de Mensagens**
- Pode ser manual (humano envia) ou automático (bot responde).

---

### FUNCIONALIDADES PARA O ADMINISTRADOR

1. **Cadastro de números Twilio**
- Associar diferentes números a usuários ou departamentos.

2. **Gerenciamento de Bots**
- Criar, configurar, ativar e pausar bots, ajustar scripts automáticos.

3. **Controle de Usuários**
- Ver todos os usuários da plataforma e garantir permissões adequadas.

---

### RESUMO

- Acesso seguro com login/token.
- Histórico completo de conversas com filtragem.
- Atendimento humano e automatizado.
- Visualização e download de mídia.
- Total controle sobre bots e fluxos de atendimento.
- Operação multiusuário com privacidade garantida.
- Tudo em uma interface simples e profissional.

Se perguntarem algo sobre funcionalidades, processos ou dúvidas frequentes, responda com base nessas informações.
      `,
    };

    // Mensagens enviadas ao modelo
    const messages = [
      systemMessage,
      { role: "user", content: message },
    ];

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
