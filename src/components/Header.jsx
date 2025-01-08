
const Header = () => {
  return (
    <header className="bg-blue-500 text-white fixed top-0 w-full z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Joao De Morais</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Início</a></li>  
          <li><a href="#about" className="hover:underline">Sobre Mim</a></li>
          <li><a href="#projects" className="hover:underline">Projetos</a></li>
          <li><a href="#skills" className="hover:underline">Habilidades</a></li>
          <li><a href="#contact" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
