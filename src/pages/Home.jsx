const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fundo Dividido em 2 Cores */}
      <div className="absolute inset-0 flex">
        <div className="w-[70%] bg-blue-900"></div> {/* 70% azul escuro */}
        <div className="w-[30%] bg-lime-300"></div> {/* 30% verde limão */}
      </div>

      {/* Elementos Decorativos */}
      <div className="absolute inset-0">
        {/* Padrão de Pontos (Lado Esquerdo Superior da Foto) */}
        <div
          className="absolute grid grid-cols-12 gap-4 text-lime-300"
          style={{
            top: "28%", // Ajusta a altura (acima da foto)
            left: "65.5%", // Alinha ao lado esquerdo da foto
            transform: "translate(-100%, -50%)", // Posiciona os pontos mais perto do lado superior esquerdo
          }}
        >
          {[...Array(150)].map((_, i) => (
            <span key={i} className="w-0.5 h-0.5 bg-lime-300 rounded-full"></span>
          ))}
        </div>

        {/* Padrão de Pontos Espelhados (Direita Inferior da Foto) */}
        <div
          className="absolute grid grid-cols-12 gap-4 text-blue-900"
          style={{
            bottom: "30%", // Ajusta a altura (abaixo da foto)
            right: "25%", // Alinha à direita da foto
            transform: "translate(100%, 50%)", // Move os pontos espelhados para baixo e à direita
          }}
        >
          {[...Array(150)].map((_, i) => (
            <span key={i} className="w-0.5 h-0.5 bg-blue-900 rounded-full"></span>
          ))}
        </div>

        {/* Linha Decorativa */}
        <div className="absolute bottom-20 right-20 w-24 h-1 bg-lime-300"></div>
        {/* Zigue-zague */}
        <div className="absolute bottom-12 left-12">
          <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0" stroke="#D9F99D" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative flex flex-col md:flex-row items-center max-w-7xl w-full px-6 md:px-12">
        {/* Texto à Esquerda */}
        <div className="flex-1 text-left text-lime-300">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Frontend <br />
            <span className="text-white">Developer</span>.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            I like to craft solid and scalable frontend products with great user
            experiences.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-8">
            <p className="text-base text-lime-300">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </p>
            <p className="text-base text-lime-300">
              Proven experience building successful products for clients across
              several countries.
            </p>
          </div>
        </div>

        {/* Imagem à Direita */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Foto */}
            <img
              src="/mnt/data/foto%20foto.png"
              alt="Profile"
              className="w-72 h-72 rounded-lg shadow-lg object-cover"
            />
            {/* Decoração ao redor da foto */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-lime-300 rounded-lg -translate-x-3 -translate-y-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
