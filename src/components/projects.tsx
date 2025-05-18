"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const projects = document.querySelectorAll('.project-card');
            projects.forEach((project, index) => {
              setTimeout(() => {
                project.classList.add('appear');
              }, 120 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      title: "Campus Connect",
      description:
        "Campus Connect is a private platform for students, faculty, and alumni to connect, collaborate, and share resources. It features a roadmap generator, interactive chatbot, and secure access with protected routes.",
      image: "https://via.placeholder.com/800x600/6D28D9/FFFFFF?text=Campus+Connect",
      technologies: ["React", "React Router", "Context API", "CSS"],
      demoLink: "https://campus-connect-eight-gray.vercel.app/",
      codeLink: "https://github.com/KUNALCHOURE/Campus-Connect.git"
    },
    {
      title: "PrimeStays",
      description:
        "A full-stack luxury property listing platform with authentication, filtering, image uploads via Cloudinary, user reviews, and a fully responsive UI. Built using the MERN stack.",
      image: "https://via.placeholder.com/800x600/1E40AF/FFFFFF?text=PrimeStays",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Express", "Node.js", "Cloudinary"],
      demoLink: "https://prime-stays.vercel.app/",
      codeLink: "https://github.com/KUNALCHOURE/PrimeStays.git"
    },
    {
      title: "Medisen",
      description:
        "Medisen predicts the top 5 possible diseases based on user symptoms using a Random Forest Classifier. It provides relevant symptom information for each prediction.",
      image: "https://via.placeholder.com/800x600/059669/FFFFFF?text=Medisen",
      technologies: ["React", "CSS", "Axios", "Random Forest", "Flask", "Python"],
      demoLink: "",
      codeLink: "https://github.com/KUNALCHOURE/Medisen.git"
    },
    {
      title: "MeloMaster 🎵",
      description:
        "MeloMaster is a responsive and visually appealing website for a music school. It features course listings, instructor bios, webinars, and testimonials. Built with Next.js and Tailwind CSS.",
      image: "https://via.placeholder.com/800x600/9333EA/FFFFFF?text=MeloMaster",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      demoLink: "https://music-teal-seven.vercel.app/",
      codeLink: "https://github.com/KUNALCHOURE/MeloMaster.git"
    },
    {
      title: "Weather App",
      description:
        "A responsive React weather application using the OpenWeatherMap API. Displays real-time weather data with dynamic backgrounds based on weather conditions.",
      image: "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=Weather+App",
      technologies: ["React", "Material-UI", "OpenWeatherMap API"],
      demoLink: "",
      codeLink: "https://github.com/KUNALCHOURE/WHEATHER_APP.git"
    },
    {
      title: "Expense Tracker",
      description:
        "A web-based application that helps users manage personal finances by tracking income and expenses. Includes a real-time balance, income, and expense summary.",
      image: "https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Expense+Tracker",
      technologies: ["React", "JavaScript", "CSS"],
      demoLink: "https://kunalchoure.github.io/EXPENSE-TRACKER/",
      codeLink: "https://github.com/KUNALCHOURE/EXPENSE-TRACKER.git"
    },
    {
      title: "Pattern Memory Game",
      description:
        "A memory-enhancing game that challenges users to replicate increasingly complex color sequences. High scores are tracked using local storage.",
      image: "https://via.placeholder.com/800x600/10B981/FFFFFF?text=Pattern+Memory+Game",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://kunalchoure.github.io/PATTERN-MEMORY-GAME/",
      codeLink: "https://github.com/KUNALCHOURE/PATTERN-MEMORY-GAME.git"
    }
  
 
  ];
  
  
  

 

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
    
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Projects
            </span>
          </h2>
        </div>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card opacity-0 transform translate-y-8 group rounded-xl overflow-hidden border border-purple-500/20 bg-[#0c1024]/80 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                {project.image && (
                  <div className="w-full h-full relative overflow-hidden">
                    {/* <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] to-transparent opacity-80"></div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-2 text-sm rounded-full border border-purple-500/30 bg-[#0c1024]/90 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-4 ">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
                  >
                    <span className="mr-2">Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="flex items-center justify-center px-4 py-2 rounded-full border border-purple-500 text-purple-400 font-medium hover:bg-purple-500/10 transition-all duration-300"
                  >
                    <span className="mr-2">Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
    
      </div>
      
       <style jsx>{`
        .project-card {
          transform: translateY(20px);
        }
        
        .project-card.appear {
          animation: fadeIn 0.6s forwards ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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