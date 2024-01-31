// import logo from './logo.svg';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import About from "./components/About";
import Profile from "./components/profiles";
import Project from "./components/projects";
import Home from "./components/home";
import Contact from "./components/contact";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Profile/>
      <Skills/>
      <Project/>
      <Contact/>
      <SpeedInsights/>
      <Footer/>
    </div>
  );
}

export default App;
