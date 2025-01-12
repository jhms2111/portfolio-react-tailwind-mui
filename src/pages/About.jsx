import Introduction from "../components/about/Introduction";
import Description from "../components/about/Description";

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
