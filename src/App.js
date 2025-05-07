import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Youtube from "./components/Youtube";
import Topmate from "./components/Topmate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div id="about" style={{ height: '100vh' }}>1. About Section</div>
      <Experience/> {/* animated */}
      <Education/> {/* animated */}
      <Skills/>  {/* animated */}
      <Projects/> {/* animated */}
      <Achievements/>  {/* animated */}
      <Youtube/> {/* animated */}
      <Topmate/> {/* animated */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
