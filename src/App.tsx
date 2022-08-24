import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
