import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div id="about" style={{ height: '100vh', top: "80vh" }}>About Section</div>
      <div id="experience" style={{ height: '100vh' }}>Experience Section</div>
      <div id="education" style={{ height: '100vh' }}>Education Section</div>
      <div id="skills" style={{ height: '100vh' }}>Skills Section</div>
      <div id="projects" style={{ height: '100vh' }}>Projects Section</div>
      <div id="achievements" style={{ height: '100vh' }}>Achievements Section</div>
      <div id="youtube" style={{ height: '100vh' }}>YouTube Section</div>
      <div id="topmate" style={{ height: '100vh' }}>Topmate Section</div>
      <div id="contact" style={{ height: '100vh' }}>Contact Section</div>
      <Footer/>
    </div>
  );
}

export default App;
