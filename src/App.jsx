import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Chat from "./pages/Chat";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // <-- importa aqui

const App = () => {
  return (
    <Router>
      <main className="pt-16">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Projects />
              <Chat />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
