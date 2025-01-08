
import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <main className="pt-16"> {/* Adiciona padding para compensar o header fixo */}
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
};

export default App;
