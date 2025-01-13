const Introduction = () => {
    return (
      <div className="flex flex-col items-start justify-start pt-10 p-8 bg-white border-r-0 md:border-r-4 md:border-blue-900">
        {/* Contêiner para título e parágrafo */}
        <div className="mt-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            <span className="text-lime-500">Creative Technologist</span>
          </h1>
          <p className="text-lg text-blue-900 leading-relaxed">
            A dedicated and skilled developer with a passion for designing and implementing cutting-edge digital solutions. With a strong foundation in modern web technologies, I specialize in creating applications that are both visually stunning and highly functional. My expertise spans across frontend and backend development, and I thrive on solving complex problems with innovative approaches.
            <br />
            <br />
            Committed to continuous learning and improvement, I ensure that my work not only meets but exceeds expectations. Whether collaborating with teams or working independently, I focus on delivering impactful results that align with business goals and user needs.
          </p>
        </div>
      </div>
    );
  };
  
  export default Introduction;
  