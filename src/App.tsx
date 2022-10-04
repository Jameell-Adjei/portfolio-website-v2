import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HamburgerMenu from "./components/HamburgerMenu";
import "./styles/app.scss";


function App() {
  return (
    <div className="App">
      <div id="outer-container">
        <Navbar />
        <HamburgerMenu />

        <div id="page-wrap">
          <Intro />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
