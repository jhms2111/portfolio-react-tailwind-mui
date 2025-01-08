import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      

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
              href="#skills"
              className="block px-4 py-2 hover:bg-blue-100 transition"
            >
              Skills
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
    </header>
  );
};

export default Header;
