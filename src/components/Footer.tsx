"use client";
import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-purple-500/30 bg-gradient-to-b from-[#0c1024]/95 to-[#0a0c1d]/98 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Left Side - Name and copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm sm:text-base">
              Crafted with ❤️ by Kunal Choure
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/KUNALCHOURE"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all p-2 rounded-full hover:bg-purple-700/20 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.38.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.31.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.53 11.53 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/kunal-choure-904713270/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all p-2 rounded-full hover:bg-purple-700/20 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3v-11h3v1.76c1.4-2.59 7-2.78 7 2.47V19z"/>
              </svg>
            </a>

            <a
              href="mailto:chourekunal134@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-all p-2 rounded-full hover:bg-purple-700/20 hover:scale-110"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24V3H0zm21.52 2-9.52 7.71L2.48 5h19.04zM2 19v-11.82l10 8.1 10-8.1V19H2z"/>
              </svg>
            </a>
            
            <a
              href="#" // Add your Twitter/X or any other social URL
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all p-2 rounded-full hover:bg-purple-700/20 hover:scale-110"
              aria-label="Twitter Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-6">
          <Link
            href="#top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-800/20 hover:bg-purple-800/30 text-sm sm:text-base text-purple-300 transition-all hover:translate-y-[-2px]"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              className="sm:w-4 sm:h-4"
              fill="currentColor" 
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
}