const Introduction = () => {
    return (
      <div className="flex flex-col items-start justify-start pt-10 p-8 bg-white border-r-0 md:border-r-4 md:border-blue-900">
        {/* Contêiner para título e parágrafo */}
        <div className="mt-16">
          {/* Título criativo */}
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            <span className="text-lime-500">Creative Technologist</span>
          </h1>
          {/* Texto descritivo */}
          <p className="text-sm text-blue-900 leading-relaxed">
            As a developer, I have a strong foundation in essential web technologies that serve as the backbone of modern digital solutions.
            <br />
            <br />
            I prioritize working with <span className="text-orange-500 font-bold">HTML</span> and <span className="text-blue-500 font-bold">CSS</span> to craft pixel-perfect layouts and ensure responsive, user-friendly designs.
            <span className="text-yellow-500 font-bold"> JavaScript</span> empowers me to add interactivity and dynamic features to web applications, while <span className="text-blue-700 font-bold">TypeScript</span> enhances my coding efficiency with static typing, making my projects more reliable and maintainable.
            <br />
            <br />
            Beyond these foundational skills, I have hands-on experience with tools like <span className="text-gray-800 font-bold">GitHub</span> and <span className="text-orange-600 font-bold">GitLab</span> for version control and collaboration, ensuring seamless teamwork and project management.
            <span className="text-blue-500 font-bold"> Docker</span> helps me containerize applications for consistent deployment, and <span className="text-purple-600 font-bold">NGROK</span> simplifies testing by securely exposing local servers.
            <br />
            <br />
            I also build real-time features using <span className="text-green-500 font-bold">Sockets</span> and scalable backends with <span className="text-green-600 font-bold">Node.js</span>.
            My frontend development expertise extends to frameworks like <span className="text-blue-400 font-bold">React</span> and <span className="text-red-500 font-bold">Angular</span>, allowing me to create modern, interactive interfaces.
            <span className="text-violet-500 font-bold"> PHP</span> and <span className="text-red-600 font-bold">Laravel</span> form the basis of my backend solutions, providing robust, scalable APIs.
            <br />
            <br />
            I follow best practices like <span className="text-purple-500 font-bold">SOLID principles</span> and implement <span className="text-teal-500 font-bold">Hexagonal Architecture</span> to ensure clean, maintainable codebases.
            With <span className="text-black font-bold">Next.js</span>, I take advantage of server-side rendering and static site generation to deliver high-performance, SEO-friendly applications.
            <br />
            <br />
            My journey with these technologies reflects both experience and enthusiasm for continuous learning. While I’ve built a strong foundation, I’m always excited to embrace new challenges and refine my craft further.
          </p>
        </div>
      </div>
    );
  };
  
  export default Introduction;
  