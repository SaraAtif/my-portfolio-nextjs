import Image from "next/image";
import HeroPage from "./components/hero";
import ContactPage from "./components/contact";
import ProjectPage from "./components/project";
import AboutPage from "./components/about";
import SkillsPage from "./components/skills";

export default function Home() {
  return (
    <div>
      <HeroPage/>
      <AboutPage/>
      <SkillsPage/>
      <ProjectPage/>
      <ContactPage/>
    </div>
  );
}
