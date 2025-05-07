import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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
      <Hero/> {/* animated */}
      <About/>
      <Experience/> {/* animated */}
      <Education/> {/* animated */}
      <Skills/>  {/* animated */}
      <Projects/> {/* animated */}
      <Achievements/>  {/* animated */}
      <Youtube/> {/* animated */}
      <Topmate/> {/* animated */}
      <Contact/> {/* animated */}
      <Footer/> {/* animated */}
    </div>
  );
}

export default App;
