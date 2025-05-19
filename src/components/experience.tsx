"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (cardRef.current) {
              cardRef.current.classList.add('appear');
            }
            
            const items = document.querySelectorAll('.responsibility-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, 100 * (index + 1));
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experience = {
    title: "Technical Co-Head",
    organization: "Data Science Association (DASCA)",
    location: "RAMDEOBABA UNIVERSITY",
    period: "SEPTEMPBER, 2024 – PRESENT",
    icon: "/Dasca.jpeg",
    responsibilities: [
      "Led and managed technical events and workshops",
      "Coordinated with team members for project planning",
      "Oversaw technical aspects of committee initiatives"
    ]
  };

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Dark background with grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-blue-500/10 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: "1.7s" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Leadership & Experience
            </span>
          </h2>
        </div>
        
        {/* Main content - Showcase */}
        <div 
          ref={cardRef} 
          className="experience-card opacity-0 transform scale-95 max-w-4xl mx-auto rounded-2xl overflow-hidden"
        >
          {/* Top Banner with Gradient */}
          <div className="h-8 bg-gradient-to-r from-purple-500 to-purple-700 relative">
            <div className="absolute top-0 right-0 h-full w-1/2 bg-white opacity-10 skew-x-[-20deg] translate-x-[20%]"></div>
          </div>
          
          {/* Content Container */}
          <div className="p-8 md:p-12 bg-[#0c1024]/90 backdrop-blur-md border border-purple-500/20 rounded-b-2xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Left side - Icon */}
              <div className="flex justify-center items-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-500/40 backdrop-blur-md flex items-center justify-center text-5xl transform hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                 <Image
                 src={experience.icon}
                 width={140}
                 height={140}
                 alt="DASCA Logo"
                 className="w-full h-full object-contain rounded-full bg-white"
                 
                 />
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                      {experience.title}
                    </h3>
                    
                    <div className="mt-1">
                      <span className="text-xl text-white">{experience.organization}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-0 py-1 px-4 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">
                    {experience.period}
                  </div>
                </div>
                
                <div className="flex items-center mb-6 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{experience.location}</span>
                </div>
                
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-6"></div>
                
                <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
                
                <ul className="space-y-4">
                  {experience.responsibilities.map((resp, index) => (
                    <li 
                      key={index} 
                      className="responsibility-item opacity-0 flex items-start text-gray-300 transform translate-x-4"
                    >
                      <div className="min-w-[28px] h-6 mr-3 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-glow"></div>
                      </div>
                      <span className="text-lg">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 rounded-full"></div>
        </div>
      </div>
      
      <style jsx>{`
        .experience-card {
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
          transition: all 0.5s ease-out;
        }
        
        .experience-card.appear {
          opacity: 1;
          transform: scale(1);
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .responsibility-item {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .responsibility-item.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .shadow-glow {
          box-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
        }
        
        .bg-grid {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite;
        }
      `}</style>
    </section>
  );
} 