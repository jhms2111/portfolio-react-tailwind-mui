import Introduction from "./Introduction";
import Description from "./Description";

const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white w-full min-h-screen"
    >
      {/* Lado esquerdo */}
      <Introduction />

      {/* Lado direito */}
      <Description />
    </section>
  );
};

export default About;
