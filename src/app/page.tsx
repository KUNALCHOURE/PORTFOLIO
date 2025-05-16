import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import { HeroSection } from "@/components/hero";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";

export default function Home() {
  return (
    <>
      {/* Fixed grid background that will apply to all sections */}
      <GridBackgroundDemo />
      
      {/* Content sections with z-index to appear above the background */}
      <div className="relative z-10 min-h-screen bg-transparent">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        {/* Additional sections can be added here */}
      </div>
    </>
  );
}
