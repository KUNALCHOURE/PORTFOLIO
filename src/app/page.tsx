import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import { HeroSection } from "@/components/hero";

export default function Home() {
  return (
    <>
    
     
      <GridBackgroundDemo />
      
   
      <div className="relative z-10 min-h-screen bg-transparent">
        <HeroSection />
       
      </div>
    </>
  );
}
