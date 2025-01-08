
import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div>
      <main className="pt-16"> {/* Adiciona padding para compensar o header fixo */}
        <Home />
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
};

export default App;
