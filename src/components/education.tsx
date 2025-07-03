"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
export  function Education() {
  const cardRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  const currentCard = cardRef.current;

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

  if (currentCard) {
    observer.observe(currentCard);
  }

  return () => {
    if (currentCard) {
      observer.unobserve(currentCard);
    }
  };
}, []);

  return (
    <div id="education" className='min-h-screen py-24'>
      <div className="flex flex-col justify-center items-center gap-12">
        <span className='text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold'> Education </span>

        <div className="w-full max-w-3xl opacity-0 transform translate-y-10" ref={cardRef}>
          <div className="p-8 bg-[#0c1024]/90 backdrop-blur-md border border-purple-500/20 rounded-xl hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left side - College Logo/Icon */}
              <div className="flex-shrink-0 flex justify-center">
                <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 border-2 border-purple-500/30">
                  <Image 
                    src="/rbulogo.jpg" 
                    alt="RUB Logo"
                    width={144}
                    height={144}
                    className="w-full h-full object-contain rounded-full bg-white"
                    priority
                  />
                </div>
              </div>
              
              {/* Right side - College Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    Ramdeobaba University
                  </h3>
                  
                  <div className="mt-2 md:mt-0 py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">
                    2022-Present
                  </div>
                </div>
                
                <h4 className="text-2xl text-white mb-3">
                  Bachelor of Technology in Computer Science and Engineering (Data Science)
                </h4>
                
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg">Nagpur, India</span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block py-1.5 px-4 text-md rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    CGPA: 8.7/10
                  </span>
                </div>
                
                <div className="mt-6">
                  <h5 className="text-md uppercase tracking-wider text-gray-300 mb-3 font-medium">Key Highlights</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">Completed coursework in Web Development, Machine Learning, Data Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">Technical Co-Head of Data Science Association (DASCA)</span>
                    </li>
                    
                  </ul>
                </div>
              </div>
                 </div>
          </div>
           </div>
        </div>
       
      <style jsx>{`
        .appear {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}
