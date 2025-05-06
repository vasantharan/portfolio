import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div id="about" style={{ height: '100vh' }}>1. About Section</div>
      <Experience/>
      <Education/>
      <Skills/> 
      <Projects/>
      <Achievements/>
      <div id="youtube" style={{ height: '100vh' }}>7. YouTube Section</div>
      <div id="topmate" style={{ height: '100vh' }}>8. Topmate Section</div>
      <div id="contact" style={{ height: '100vh' }}>9. Contact Section</div>
      <Footer/>
    </div>
  );
}

export default App;
