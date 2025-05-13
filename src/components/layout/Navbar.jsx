import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <>
      {/* Desktop Navigation Dots */}
      {!isMobile && (
        <motion.div 
          className="fixed right-10 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {navLinks.map(({ id, label }) => (
            <div key={id} className="relative group">
              <motion.button
                className={`nav-dot ${activeSection === id ? 'active' : ''}`}
                onClick={() => handleScrollTo(id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white bg-gray-900 px-2 py-1 rounded text-sm whitespace-nowrap transition-opacity duration-300">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      )}
      
      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <motion.div 
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            className="w-12 h-12 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-full text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </motion.div>
      )}
      
      {/* Mobile Menu Overlay */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : "-100%"
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {navLinks.map(({ id, label }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navLinks.findIndex(link => link.id === id) + 0.3 }}
            >
              <button
                className={`text-2xl font-bold ${activeSection === id ? 'text-primary' : 'text-white'} hover:text-primary transition-colors duration-300`}
                onClick={() => handleScrollTo(id)}
              >
                {label}
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar; 