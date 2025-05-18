import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import { HeroSection } from "@/components/hero";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { ExperienceSection } from "@/components/experience";
import { CertificationsSection } from "@/components/certifications";
import { Education } from "@/components/education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed grid background that will apply to all sections */}
      <GridBackgroundDemo />
      
      {/* Content sections with z-index to appear above the background */}
      <div className="relative z-10 min-h-screen bg-transparent scroll-smooth">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <Education />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
