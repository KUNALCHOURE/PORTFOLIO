"use client";
import React, { useEffect, useRef } from "react";

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skills = document.querySelectorAll('.skill-item');
            skills.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add('appear');
              }, 80 * index);
            });

            const categories = document.querySelectorAll('.category-container');
            categories.forEach((category, index) => {
              setTimeout(() => {
                category.classList.add('appear');
              }, 300 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Store the current value of the ref
    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Tech stacks for the four categories
  const categories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "HTML", icon: "5", color: "#E34F26" },
        { name: "CSS", icon: "3", color: "#1572B6" },
        { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
        { name: "TypeScript", icon: "TS", color: "#3178C6" },
        { name: "React JS", icon: "⚛️", color: "#61DAFB" },
        { name: "Redux", icon: "", color: "#764ABC" },
        { name: "Next JS", icon: "", color: "#000000" },
        { name: "Tailwind CSS", icon: "", color: "#06B6D4" },
        { name: "Material UI", icon: "", color: "#0081CB" },
        { name: "Bootstrap", icon: "", color: "#7952B3" },
        { name: "Framer Motion", icon: "", color: "#0055FF" },
        { name: "Styled Components", icon: "", color: "#DB7093" },
      ]
    },
    {
      title: "Backend",
      icon: "🔧",
      skills: [
        { name: "Node.js", icon: "", color: "#339933" },
        { name: "Express JS", icon: "ex", color: "#000000" },
        { name: "Flask", icon: "", color: "#000000" },
        { name: "FastAPI", icon: "", color: "#009688" },
        { name: "REST API", icon: "", color: "#FF5733" },
        { name: "MySQL", icon: "", color: "#4479A1" },
        { name: "MongoDB", icon: "", color: "#47A248" },
        { name: "EJS", icon: "", color: "#47A248" },
        { name: "JWT", icon: "", color: "#47A248" },
        { name: "Socket.io", icon: "", color: "#47A248" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "🚀",
      skills: [
        { name: "Git", icon: "", color: "#F05032" },
        { name: "GitHub", icon: "", color: "#181717" },
        { name: "GitLab", icon: "", color: "#FCA121" },
        { name: "Docker", icon: "🐳", color: "#2496ED" },
        { name: "Vercel", icon: "", color: "#000000" },
        { name: "Netlify", icon: "", color: "#00C7B7" },
        { name: "Cloudinary", icon: "", color: "#00C7B7" },
      ]
    },
    {
      title: "Languages & Tools",
      icon: "🔨",
      skills: [
        { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
        { name: "TypeScript", icon: "", color: "#3178C6" },
        { name: "Python", icon: "Py", color: "#3776AB" },
        { name: "Java", icon: "", color: "#007396" },
        { name: "C++", icon: "", color: "#00599C" },
        { name: "VS Code", icon: "", color: "#007ACC" },
        { name: "IntelliJ", icon: "", color: "#000000" },
        { name: "Postman", icon: "", color: "#FF6C37" },
        { name: "Vite", icon: "", color: "#646CFF" },
        { name: "npm", icon: "", color: "#CB3837" },
        { name: "Eclipse", icon: "", color: "#2C3E50" },
      ]
    }    
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Dark background with grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Skills & Technologies
            </span>
          </h2>
        </div>
        
        {/* Category boxes like second reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {categories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="category-container opacity-0 transform translate-y-6 transition-all duration-700 p-8 rounded-xl border border-purple-500/20 bg-[#0c1024]/80 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] "
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{category.title}</h3>
              </div>
              
              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform -translate-y-1/2"></div>
              </div>
              
              <div className="skills-grid flex flex-wrap gap-3 justify-center mt-8">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-item opacity-0 px-4 py-2 rounded-full border border-purple-500/30 bg-[#0c1024]/90 flex items-center gap-2 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    {skill.icon && (
                      <span 
                        className="text-sm font-bold"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-gray-300">{skill.name}</span>
                    <div 
                      className="w-2 h-2 rounded-full ml-1" 
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .skill-item {
          transform: translateY(20px);
        }
        
        .skill-item.appear {
          animation: fadeIn 0.5s forwards ease-out;
        }
        
        .category-container.appear {
          opacity: 1;
          transform: translateY(0);
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