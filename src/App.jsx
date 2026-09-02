import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Interests from "./components/Interests";
import DefenceGoal from "./components/DefenceGoal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <Skills />
        <Projects />
        <Certifications />
        <Interests />
        <DefenceGoal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
