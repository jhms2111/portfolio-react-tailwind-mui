import { useState } from "react";
import roboImg from "../assets/robo.png"; // ajuste conforme a pasta real


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`relative h-screen w-full flex flex-col ${menuOpen ? "overflow-hidden" : ""}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-blue-900 text-white z-20">
        {/* Fundo Dividido */}
        <div className="hidden md:flex absolute top-0 left-0 w-full h-full">
          <div className="bg-blue-900 w-[70%]"></div>
          <div className="bg-lime-300 w-[30%]"></div>
        </div>

        {/* Conteúdo do Header */}
        <div className="relative z-10 w-full flex items-center justify-between">
          <a href="/" aria-label="Logo" className="text-lime-300 font-bold text-2xl">
            ENKI
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex flex-col items-center justify-center w-10 h-10 bg-transparent focus:outline-none z-30"
            aria-label="Toggle menu"
          >
            <span
              className="block w-8 h-1 bg-white rounded-full transform transition-transform duration-300 ease-in-out origin-center"
              style={{ transform: menuOpen ? "rotate(45deg)" : "rotate(0)" }}
            ></span>
            <span
              className={`block w-8 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              } my-1`}
            ></span>
            <span
              className="block w-8 h-1 bg-white rounded-full transform transition-transform duration-300 ease-in-out origin-center"
              style={{ transform: menuOpen ? "rotate(-45deg)" : "rotate(0)" }}
            ></span>
          </button>

          {menuOpen && (
            <nav className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-50">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full focus:outline-none"
                aria-label="Close menu"
              >
                X
              </button>

              <a href="#" className="text-blue-900 py-4 text-lg font-semibold hover:text-lime-300" onClick={() => setMenuOpen(false)}>Início</a>
              <a href="#about" className="text-blue-900 py-4 text-lg font-semibold hover:text-lime-300" onClick={() => setMenuOpen(false)}>Sobre</a>
              <a href="#projects" className="text-blue-900 py-4 text-lg font-semibold hover:text-lime-300" onClick={() => setMenuOpen(false)}>Funcionalidades</a>
              <a href="#chat" className="text-blue-900 py-4 text-lg font-semibold hover:text-lime-300" onClick={() => setMenuOpen(false)}>Demonstração</a>
              <a href="#contact" className="text-blue-900 py-4 text-lg font-semibold hover:text-lime-300" onClick={() => setMenuOpen(false)}>Contato</a>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main
        className={`relative h-full w-full bg-blue-900 text-white flex items-center justify-center transition-opacity duration-300 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Fundo Dividido */}
        <div className="absolute inset-0 flex flex-col sm:flex-row z-10">
          <div className="w-full sm:w-[70%] bg-blue-900 h-[60%] sm:h-full"></div>
          <div className="w-full sm:w-[30%] bg-lime-300 h-[40%] sm:h-full"></div>
        </div>

        {/* Conteúdo da Home */}
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center px-6 sm:px-12 gap-8 sm:-mt-40 mt-30.5 z-20">
          {/* Texto */}
          <div className="flex-1 text-center sm:text-left space-y-2 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-lime-300">
              Atendimento automatizado e vendas pelo WhatsApp
            </h1>
            <p className="text-base sm:text-lg text-white">
              Nossa plataforma permite que sua empresa se comunique com clientes de forma inteligente, automatizada e organizada — tudo através do WhatsApp.
            </p>
            <p className="text-sm sm:text-base text-lime-300">
              O bot inteligente responde dúvidas, apresenta produtos, faz vendas e direciona o atendimento.
            </p>
            <p className="text-sm sm:text-base text-lime-300">
              Quando necessário, sua equipe pode assumir a conversa com o cliente — sem perder histórico ou controle.
            </p>
          </div>

          {/* Imagem */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative">
              <img
  src={roboImg}
  alt="Plataforma ENKI"
  className="w-56 h-56 sm:w-[358px] sm:h-[358px] rounded-lg shadow-lg object-cover"
/>
              <div className="absolute top-0 left-0 w-full h-full border-1 border-lime-300 rounded-lg -translate-x-2 sm:-translate-x-3 -translate-y-2 sm:-translate-y-3"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
