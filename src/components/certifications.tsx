"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // Add more certifications as needed
  const certifications = [
  
    {
      id: 1,
      title: "Full Stack Web Development ",
      issuer: "Apna College",
      description: "Completed a comprehensive web development Course covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
      date: "Feb 2024",
      icon:"/certifications/apnacollege.jpg",
      buttons: [
        { label: "View Certificate", link: "#" } // Replace # with actual link if available
      ],
      category: "Web Development"
    },
    {
      id: 2,
      title: "Postman Student Expert",
      issuer: "Postman",
      description: "Learned API fundamentals, testing, and documentation using Postman. Earned Student Expert badge.",
      date: "Mar 2024",
      icon:"/certifications/postmanlogo.png",
      buttons: [
        { label: "View Certificate", link: "#" }
      ],
      category: "Web Development"
    },
    {
      id: 3,
      title: "Python Micro-Course",
      issuer: "Kaggle",
      description: "Completed hands-on Python course covering core programming concepts, data types, and control structures.",
      date: "Jan 2024",
      icon:"/certifications/kagglelogo.png",
      buttons: [
        { label: "View Certificate", link: "#" }
      ],
      category: "Programming"
    }
  ];
  
    
  

  return (
    <section id="certifications" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Dark background with grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-blue-500/10 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: "1.7s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section title */}
        <div className="text-center mb-16 opacity transform translate-y-8" ref={addToRefs}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Achievements & Certifications <span className="inline-block animate-pulse-slow">🏆</span>
            </span>
          </h2>
        
        </div>
        
        {/* Certification Cards - Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="certification-card opacity-0 transform scale-95 rounded-xl overflow-hidden"
              ref={addToRefs}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              <div className="p-6 bg-[#0c1024]/90 backdrop-blur-md border border-purple-500/20 rounded-b-xl">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo/Image */}
                  <div className="flex-shrink-0">
                    <div className="w-36 h-36 bg-gradient-to-br from-purple-500/10 to-purple-700/10 border border-purple-500/30 rounded-xl flex items-center justify-center p-3 transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                    <Image
                          src={cert.icon}
                          alt={cert.title}
                          width={140}
                          height={140}
                          className="w-full h-full object-contain"
                        />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                        {cert.title}
                      </h3>
                      
                      <div className="mt-2 md:mt-0 py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">
                        {cert.date}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{cert.description}</p>
                    
                    <div className="mb-4">
                      <span className="inline-block py-1 px-3 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {cert.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cert.buttons.map((button, idx) => (
                        <a 
                          key={idx} 
                          href={button.link} 
                          className="text-sm px-4 py-2 rounded-md bg-purple-600/20 text-purple-300 border border-purple-500/40 transition-all hover:bg-purple-600/30 hover:scale-105"
                        >
                          {button.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certification Cards - Mobile Layout */}
        <div className="md:hidden space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="certification-card opacity-0 transform scale-95 rounded-xl overflow-hidden"
              ref={addToRefs}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              <div className="p-5 bg-[#0c1024]/90 backdrop-blur-md border border-purple-500/20 rounded-b-xl">
                <div className="flex items-center gap-4 mb-4">
                  {/* Logo/Image */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-700/10 border border-purple-500/30 rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                      <div className="w-10 h-10">
                        <Image
                          src={cert.icon}
                          alt={cert.title}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                      {cert.title}
                    </h3>
                    <div className="mt-1 py-1 px-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs inline-block">
                      {cert.date}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                
                <div className="mb-3">
                  <span className="inline-block py-1 px-2 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {cert.category}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cert.buttons.map((button, idx) => (
                    <a 
                      key={idx} 
                      href={button.link} 
                      className="text-xs px-3 py-1.5 rounded-md bg-purple-600/20 text-purple-300 border border-purple-500/40 transition-all hover:bg-purple-600/30"
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 rounded-full"></div>
        </div>
      </div>
      
      <style jsx>{`
        .certification-card {
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
          transition: all 0.5s ease-out;
        }
        
        .certification-card.appear {
          opacity: 1;
          transform: scale(1);
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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