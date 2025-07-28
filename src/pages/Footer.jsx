const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Marca */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-lime-300">ENKI BOT</h2>
          <p className="text-sm text-blue-200">
            Soluções inteligentes de atendimento e automação via WhatsApp.
          </p>
        </div>

        {/* Navegação rápida */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#about" className="hover:text-lime-300 transition">Sobre</a>
          <a href="#projects" className="hover:text-lime-300 transition">Funcionalidades</a>
          <a href="#chat" className="hover:text-lime-300 transition">Demonstração</a>
          <a href="#contact" className="hover:text-lime-300 transition">Contato</a>
        </div>

        {/* Contato */}
        <div className="text-center sm:text-right text-sm text-blue-200">
          <p>Email: <span className="text-white">jhms@enkibot.com.br</span></p>
          <p>WhatsApp: <span className="text-white">+34 674 458 434</span></p>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-blue-800 mt-6 pt-4 text-center text-xs text-blue-400">
        &copy; {new Date().getFullYear()} ENKI BOT. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
