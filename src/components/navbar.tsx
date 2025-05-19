"use client";
import React, { useState, useEffect, useCallback } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Skills",
      id: "skills", 
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Experience",
      id: "experience",
    },
    {
      name: "Certifications",
      id: "certifications",
    },
    {
      name: "Education",
      id: "education",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Account for navbar height
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  // Memoize the handleScroll function with useCallback
  const handleScroll = useCallback(() => {
    // Change navbar background when scrolled
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    // Update active section based on scroll position
    const sections = navItems.map(item => document.getElementById(item.id));
    const currentPosition = window.scrollY + 100;
    
    // Default to home if at the top
    if (window.scrollY < 100) {
      setActiveSection("home");
      return;
    }
    
    // Find the current active section
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= currentPosition) {
        setActiveSection(navItems[i].id);
        break;
      }
    }
  }, [navItems]); // Include navItems in the dependency array

  useEffect(() => {
    // Run once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Only depends on the memoized handleScroll function

  return (
    <>
      <nav className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0c1024]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('home')} 
                className="font-cursive text-2xl text-white"
              >
                <span className="inline-block text-purple-400">&lt; </span>
                <span className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">Kunal Choure</span>
                <span className="inline-block text-purple-400"> /&gt;</span>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md transition duration-300 ${
                      activeSection === item.id 
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                        : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-full text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-all"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <IconX size={24} />
                ) : (
                  <IconMenu2 size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div 
        className={`fixed top-[60px] left-0 right-0 bg-[#0c1024]/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg transform transition-transform duration-300 z-40 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={`mobile-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-md transition duration-200 ${
                activeSection === item.id 
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                  : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-300'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}