import AboutSection from "./Components/About";
import ContactSection from "./Components/Contact";
import QualificationSection from "./Components/Experience";
import HeroSection from "./Components/Hero";
import ProjectsSection from "./Components/Projects";
import SkillsSection from "./Components/Skills";

export default function Home() {
  return (
    <div className="">
     <HeroSection/>
     <AboutSection/>
     <SkillsSection/>
     <QualificationSection/>
     <ProjectsSection/>
     <ContactSection/>
    </div>
  );
}
