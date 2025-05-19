"use client";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left column - Text content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
  Hi all, I&apos;m <span className="text-purple-500">Kunal</span> 
  <span className="inline-block ml-2 animate-wave">👋</span>
</h1>

          
          <h2 className="text-2xl md:text-3xl text-purple-400 font-medium">
          Full-stack developer and problem solver
          </h2>
          
         <p className="text-lg text-gray-300 max-w-xl">
  <span className="inline-block animate-float">🚀</span> I&apos;m Kunal Choure, a Computer Science (Data Science) student at Ramdeobaba University, Nagpur. I&apos;m passionate about building efficient, scalable applications and solving complex problems through code. With a strong foundation in DSA and full-stack development, I thrive in collaborative environments and continuously seek to learn and innovate.
</p>


          <div className="flex flex-wrap gap-3 pt-4">
            <Link href="https://github.com/KUNALCHOURE" target="_blank" rel="noopener noreferrer"
              className="h-12 w-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all">
              <IconBrandGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/kunal-choure-904713270/" target="_blank" rel="noopener noreferrer"
              className="h-12 w-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all">
              <IconBrandLinkedin size={24} />
            </Link>
            
            
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a href="#contact"  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium transition-all">
              CONTACT ME
            </a>
            <Link href="/resume.pdf" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium transition-all"
             //download
             target="_blank"
             rel="noopener noreferrer"
            >
              MY RESUME
            </Link>
          </div>
        </div>
        
        {/* Right column - Profile Image */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg flex items-center justify-center">
            {/* Decorative elements */}

           
            <div className="relative z-10">
              <div className="w-80 h-80 rounded-full border-4 border-purple-500 p-1 overflow-hidden backdrop-blur-sm bg-white">
                
                <div className="w-full h-full rounded-full flex items-center ">
                
                 
                  
                
                  <Image 
                    src="/profile2.jpg" 
                    alt="Kunal Choure"
                    width={500}
                    height={300}
                    className="rounded-full object-cover bg-white relative right-2 top-3"
                    priority
                  /> 
                </div>
              </div>
              
              {/* Glowing ring effect */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur-md -z-10"></div>
              
              {/* Circle outer ring with gradient */}
              <div className="absolute -inset-3 rounded-full border border-purple-500/30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}