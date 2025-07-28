import Introduction from "./Introduction";
import Description from "./Description";

const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen"
    >
      <Introduction />
      <Description />
    </section>
  );
};

export default About;
