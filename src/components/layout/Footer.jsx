import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com', label: 'Github' },
    { icon: <FiTwitter size={20} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' }
  ];
  
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-900">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.p 
              className="text-xl font-bold text-gradient mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Portfolio
            </motion.p>
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} All Rights Reserved
            </motion.p>
          </div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-800 text-gray-400 hover:text-primary hover:border-primary transition-colors duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(59, 130, 246, 0.1)' 
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.button
          className="w-12 h-12 rounded-full bg-gray-900 fixed bottom-8 right-8 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300 z-20"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: '#3b82f6' 
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer; 