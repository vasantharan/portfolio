import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
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
    <div className="relative">
      <Navbar/>
      <Hero/> 
      <About/> 
      <Experience/> 
      <Education/> 
      <Skills/>  
      <Projects/> 
      <Achievements/>  
      <Youtube/> 
      <Topmate/> 
      <Contact/> 
      <Footer/>
      <Analytics/>
      <SpeedInsights/>
    </div>
  );
}

export default App;
