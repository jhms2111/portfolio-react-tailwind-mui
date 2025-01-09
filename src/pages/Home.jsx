import { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-blue-900 text-white z-20">
  {/* Fundo Dividido (Somente no Desktop) */}
  <div className="hidden md:flex absolute top-0 left-0 w-full h-full">
    <div className="bg-blue-900 w-[70%]"></div> {/* 70% Azul */}
    <div className="bg-lime-300 w-[30%]"></div> {/* 30% Verde-limão */}
  </div>

  {/* Conteúdo do Header */}
  <div className="relative z-10 w-full flex items-center justify-between">
    {/* Logo */}
    <a href="/" aria-label="Logo" className="text-lime-300 font-bold text-2xl">
      JHMS
    </a>

    {/* Botão Hambúrguer */}
   {/* Botão Hambúrguer */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="relative flex flex-col items-center justify-center w-10 h-10 bg-transparent focus:outline-none z-30"
  aria-label="Toggle menu"
>
  <span className="block w-8 h-1 bg-white rounded-full transform transition-transform duration-300 ease-in-out origin-center" style={{ transform: menuOpen ? 'rotate(45deg)' : 'rotate(0)' }}></span>
  <span className={`block w-8 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'} my-1`}></span>
  <span className="block w-8 h-1 bg-white rounded-full transform transition-transform duration-300 ease-in-out origin-center" style={{ transform: menuOpen ? 'rotate(-45deg)' : 'rotate(0)' }}></span>
</button>


{/* Menu */}
{menuOpen && (
  <nav
    className={`absolute top-0 right-0 w-64 h-screen flex flex-col items-start py-6 px-4 z-20 
      ${menuOpen ? "bg-white md:bg-transparent md:backdrop-blur-md" : ""}
    `}
  >
    <a
      href="#home"
      className="text-blue-900 md:text-white py-2 hover:text-lime-300 text-sm sm:text-base"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </a>
    <a
      href="#about"
      className="text-blue-900 md:text-white py-2 hover:text-lime-300 text-sm sm:text-base"
      onClick={() => setMenuOpen(false)}
    >
      About
    </a>
    <a
      href="#projects"
      className="text-blue-900 md:text-white py-2 hover:text-lime-300 text-sm sm:text-base"
      onClick={() => setMenuOpen(false)}
    >
      Projects
    </a>
    <a
      href="#contact"
      className="text-blue-900 md:text-white py-2 hover:text-lime-300 text-sm sm:text-base"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </a>
  </nav>
)}

  </div>
</header>


      {/* Main Content */}
      <main className="relative h-full w-full bg-blue-900 text-white flex items-center justify-center">
        {/* Fundo Dividido em 2 Cores */}
        <div className="absolute inset-0 flex flex-col sm:flex-row z-10">
          {/* Para Desktop: Azul 70% e Verde Limão 30% */}
          <div className="w-full sm:w-[70%] bg-blue-900 h-[60%] sm:h-full"></div> {/* Azul escuro */}
          <div className="w-full sm:w-[30%] bg-lime-300 h-[40%] sm:h-full"></div> {/* Verde limão */}
        </div>

        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center px-6 sm:px-12 gap-8 -mt-40 z-20">
          {/* Left Content */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold text-lime-300">
              FULL STACK <br /> DEVELOPER.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white">
              I like to craft solid and scalable frontend products with great user
              experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <p className="text-sm sm:text-base text-lime-300">
                Highly skilled at progressive enhancement, design systems & UI
                Engineering.
              </p>
              <p className="text-sm sm:text-base text-lime-300">
                Proven experience building successful products for clients across
                several countries.
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          {/* Right Content - Image */}
<div className="flex-1 flex justify-center items-center relative">
  <div className="relative">
    <img
      src="/src/assets/foto-curriculum.webp"
      alt="Profile"
      className="w-44 h-44 sm:w-[358px] sm:h-[358px] rounded-lg shadow-lg object-cover" // Correção dos tamanhos
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
