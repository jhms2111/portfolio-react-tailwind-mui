
const Projects = () => {
  const projects = [
    { title: "Projeto 1", description: "Descrição breve do projeto 1", link: "#" },
    { title: "Projeto 2", description: "Descrição breve do projeto 2", link: "#" },
    // Adicione mais projetos aqui
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} className="text-blue-500 mt-2 inline-block">
              Ver Mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
