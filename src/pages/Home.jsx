
import { useHistory } from "react-router-dom";


const technologies = [
  { name: "JavaScript", color: "bg-yellow-500", position: { x: 0, y: -120 }, route: "/javascript" },
  { name: "GitHub", color: "bg-gray-800", position: { x: 80, y: -80 }, route: "/github" },
  { name: "Docker", color: "bg-teal-500", position: { x: -80, y: -80 }, route: "/docker" },
  { name: "HTML", color: "bg-yellow-300", position: { x: -120, y: 0 }, route: "/html" },
  { name: "CSS", color: "bg-blue-500", position: { x: 120, y: 0 }, route: "/css" },
  { name: "TypeScript", color: "bg-blue-600", position: { x: 0, y: 120 }, route: "/typescript" },
  { name: "React", color: "bg-blue-400", position: { x: -80, y: 80 }, route: "/react" },
  { name: "Node.js", color: "bg-green-500", position: { x: 80, y: 80 }, route: "/node" },
];

const Home = () => {
  const navigate =  useHistory (); // Hook para navegação

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center relative">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-12">
        My Technology Stack
      </h1>
      {/* Círculo com Tecnologias */}
      <div className="relative w-96 h-96 flex items-center justify-center animate-sway">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`absolute w-20 h-20 flex items-center justify-center rounded-full text-white font-bold shadow-lg transition-transform hover:scale-125 cursor-pointer ${tech.color}`}
            style={{
              transform: `translate(${tech.position.x}px, ${tech.position.y}px)`,
            }}
            onClick={() => navigate(tech.route)} // Navegação ao clicar
          >
            <div className="group relative">
              <span>{tech.name}</span>
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-14 bg-black text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animação CSS */}
      <style >{`
        @keyframes sway {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-sway {
          animation: sway 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
