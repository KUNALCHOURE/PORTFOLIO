import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import { HeroSection } from "@/components/hero";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { ExperienceSection } from "@/components/experience";
import { CertificationsSection } from "@/components/certifications";
import { Education } from "@/components/education";
import { Contact } from "@/components/Contact";

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
        <ExperienceSection />
        <CertificationsSection />
        <Education />
        <Contact />
        
        {/* Simple footer */}
        <footer className="py-6 border-t border-purple-500/20 bg-[#0c1024]/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Kunal Choure. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6">
                <a 
                  href="https://github.com/KUNALCHOURE" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/kunal-choure-904713270/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
