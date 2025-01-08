
const Skills = () => {
  const skills = ["React", "JavaScript", "Tailwind CSS", "Material-UI", "Node.js"];

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6">Habilidades</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-800 text-center py-3 px-4 rounded shadow-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
