"use client";
import React, { useRef, useEffect } from 'react';

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

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

    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (formContainerRef.current) {
        observer.unobserve(formContainerRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className='py-24 relative overflow-hidden'>
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-blue-500/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center opacity-0 transform translate-y-4" ref={sectionRef}>
          <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-4'>Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="w-full max-w-3xl opacity-0 transform translate-y-4" ref={formContainerRef}>
          <div className="p-8 bg-[#0c1024]/90 backdrop-blur-md border border-purple-500/20 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <div className="flex items-center justify-center mb-8 gap-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:your.email@example.com" className="text-purple-300 hover:text-purple-400 transition-colors">chourekunal134@gmail.com</a>
              </div>
              <div className="h-6 w-px bg-gray-700"></div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                </svg>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors">LinkedIn</a>
              </div>
            </div>
            
            <form action="" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="input-group">
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    className="w-full bg-[#131631]/50 border border-purple-500/30 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all" 
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your email" 
                    className="w-full bg-[#131631]/50 border border-purple-500/30 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all" 
                  />
                </div>
              </div>
              
           
              
              <div className="input-group">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  placeholder="Your message" 
                  className="w-full bg-[#131631]/50 border border-purple-500/30 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none" 
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  Send Message
                </button>
              </div>
            </form>
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
    </section>
  );
}