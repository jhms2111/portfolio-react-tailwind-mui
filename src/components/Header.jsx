import PropTypes from "prop-types"; // Para validação de props (opcional)

const Header = ({ toggleMenu, menuOpen }) => {
  return (
    <header className="relative w-full flex items-center justify-between px-6 py-4 text-white z-20">
      {/* Background Wrapper */}
      <div className="absolute top-0 left-0 w-full h-full flex">
        <div className="bg-lime-500 w-[30%]"></div> {/* 30% Verde-limão */}
        <div className="bg-blue-600 w-[70%]"></div> {/* 70% Azul */}
      </div>

      {/* Conteúdo do Header */}
      <div className="relative z-10 w-full flex items-center justify-between">
        {/* Logo ou Título */}
        <a href="/" aria-label="Logo" className="text-lime-300 font-bold text-2xl">
          JH
        </a>

        {/* Menu Sanduíche */}
        <div className="relative">
          {/* Ícone do Sanduíche */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="w-full h-1 bg-white rounded-sm"></span>
            <span className="w-full h-1 bg-white rounded-sm"></span>
            <span className="w-full h-1 bg-white rounded-sm"></span>
          </button>

          {/* Menu Suspenso */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-white text-blue-900 rounded-md shadow-lg w-48">
              <a
                href="#about"
                className="block px-4 py-2 hover:bg-blue-100 transition"
              >
                About Me
              </a>
              <a
                href="#projects"
                className="block px-4 py-2 hover:bg-blue-100 transition"
              >
                Projects
              </a>
              <a
                href="#chat"
                className="block px-4 py-2 hover:bg-blue-100 transition"
              >
                Chat
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 hover:bg-blue-100 transition"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// Validação das props (opcional, mas é bom para evitar erros)
Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default Header;

;
