import NavBar from "../components/navbar";
import Hero from "../components/hero";
import AboutMe from "../components/aboutme";
import Services from "../components/services";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
