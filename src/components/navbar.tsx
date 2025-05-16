"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconMoon, IconSun, IconMenu2, IconX } from "@tabler/icons-react";
import { div } from "motion/react-client";

export function NavbarDemo() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real implementation, you would toggle the theme here
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Work Experiences",
      link: "/work-experiences",
    },
   
    {
      name: "Achievements",
      link: "/achievements",
    },
 
  
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact Me",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav className="w-full py-4 border-b border-gray-800 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-cursive text-2xl text-white">
                <span className="inline-block">&lt; </span>
                <span className="inline-block italic font-bold">Kunal Choure</span>
                <span className="inline-block"> /&gt;</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-6">
                {navItems.map((item,idx) => (
                  <div  key={idx} className="hover:bg-gray-200 rounded-md p-2 transition duration-150"> 
                  <Link
                    key={`nav-link-${idx}`}
                    href={item.link}
                    className="text-white  hover:text-black transition duration-150"
                  >
                    {item.name}
                  </Link>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              {/* <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-blue-500 text-white"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <IconSun size={20} />
                ) : (
                  <IconMoon size={20} />
                )}
              </button> */}
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-full bg-gray-800 text-white"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <IconX size={20} />
                ) : (
                  <IconMenu2 size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-3 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-nav-link-${idx}`}
                href={item.link}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
