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

      {/* Linha separadora no mobile */}
      <div className="block md:hidden w-full flex justify-center">
        <hr className="w-3/4 border-t-4 border-blue-900 my-4" />
      </div>

      {/* Lado direito */}
      <Description />
    </section>
  );
};

export default About;
