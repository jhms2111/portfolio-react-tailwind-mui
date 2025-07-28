import  { useState } from "react";
import axios from "axios";
import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Olá! Como posso ajudar você hoje?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Faz a requisição para o backend
      const response = await axios.post("http://localhost:3000/chat", {
        message: input,
      });

      // Adiciona a resposta do bot
      const botMessage = { sender: "bot", text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage = {
        sender: "bot",
        text: "Desculpe, ocorreu um erro ao processar sua mensagem.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput(""); // Limpa o campo de entrada
  };

  return (
    <section
      id="chat"
      className="flex flex-col h-[85vh] max-w-4xl mx-auto px-4 py-2 bg-blue-900 text-white border-l-4 border-r-4 border-t-4 border-gray-400"
      style={{ marginTop: ".05rem" }}
    >
      {/* Chat Header */}
      <header className="flex items-center justify-between py-4 border-b border-lime-300">
        <h1 className="text-2xl font-bold">Chat</h1>
        <p className="text-lime-300 text-sm">Conectado</p>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4" style={{ transform: "translateY(1cm)" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-xs text-sm shadow-md ${
                message.sender === "user"
                  ? "bg-lime-300 text-blue-900"
                  : "bg-blue-800 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <footer className="mt-4">
        <form className="flex items-center space-x-4" onSubmit={sendMessage}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            InputProps={{
              style: { backgroundColor: "#fff", borderRadius: "8px" },
            }}
          />
          <IconButton
            type="submit"
            className="bg-lime-300 text-blue-900 hover:bg-lime-400"
          >
            <SendIcon />
          </IconButton>
        </form>
      </footer>
    </section>
  );
};

export default Chat;
