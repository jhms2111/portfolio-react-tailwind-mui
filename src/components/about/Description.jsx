const Description = () => {
    const technologies = [
      { name: "HTML", size: "w-20 h-20", bg: "bg-orange-500" },
      { name: "CSS", size: "w-20 h-20", bg: "bg-blue-500" },
      { name: "JAVASCRIPT", size: "w-20 h-20", bg: "bg-yellow-500" },
      { name: "REACT", size: "w-20 h-20", bg: "bg-blue-400" },
      { name: "NODE", size: "w-20 h-20", bg: "bg-green-600" },
      { name: "TYPESCRIPT", size: "w-20 h-20", bg: "bg-blue-700" },
      { name: "NEXT.JS", size: "w-20 h-20", bg: "bg-black" },
      { name: "DOCKER", size: "w-20 h-20", bg: "bg-blue-500" },
      { name: "NGROK", size: "w-20 h-20", bg: "bg-purple-600" },
      { name: "SOCKETS", size: "w-20 h-20", bg: "bg-green-500" },
      { name: "PHP", size: "w-20 h-20", bg: "bg-violet-500" },
      { name: "LARAVEL", size: "w-20 h-20", bg: "bg-red-600" },
      { name: "ANGULAR", size: "w-20 h-20", bg: "bg-red-500" },
      { name: "SOLID", size: "w-20 h-20", bg: "bg-purple-500" },
      { name: "GITHUB", size: "w-20 h-20", bg: "bg-gray-800" },
    ];
  
    return (
      <div className="relative flex flex-col justify-center p-8 bg-white min-h-screen">
        {/* Texto explicativo */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-blue-900 leading-relaxed">
            I am a programmer with experience in developing web applications,
            focusing on creating effective and elegant solutions for real-world
            problems. Skilled in modern technologies like React, TailwindCSS,
            Material UI, and more, I aim to build functional and visually appealing
            systems. I am constantly striving to evolve and deliver the best results
            for my clients and projects.
          </p>
        </div>
  
        {/* Decoração com círculos */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 w-full">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${tech.size} ${tech.bg} text-white font-bold rounded-full shadow-lg`}
            >
              <span
                className="text-xs md:text-[65%] lg:text-[65%] text-center"
                style={{
                  lineHeight: "1.25rem", // Centraliza verticalmente
                  padding: "0 0.5rem", // Garante espaço em nomes maiores
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Description;
  