import Project1 from "../components/projects/Project1";
import Project2 from "../components/projects/Project2";
import Project3 from "../components/projects/Project3";
import Project4 from "../components/projects/Project4";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-blue-900 text-white py-20 px-4"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </div>
    </section>
  );
};

export default Projects;
