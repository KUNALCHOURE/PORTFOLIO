import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronDown } from 'react-icons/fi';

const AnimatedLetters = ({ text, className }) => {
  return (
    <div className={className}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5 + index * 0.1,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};

const TypewriterEffect = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, currentWordIndex]);

  const tick = () => {
    const currentWord = words[currentWordIndex];
    const newText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    setText(newText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && newText === currentWord) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && newText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
      setDelta(500);
    }
  };
  
  return <span className={className}>{text}</span>;
};

const Hero = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (inView) {
      setActiveSection('hero');
    }
  }, [inView, setActiveSection]);
  
  return (
    <section 
      id="hero" 
      ref={(el) => {
        ref(el);
        sectionRef.current = el;
      }} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <AnimatedLetters 
              text="Hi, I'm John Doe" 
              className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3"
            />
            <AnimatedLetters 
              text="DEVELOPER" 
              className="text-5xl md:text-6xl lg:text-7xl text-gradient font-bold mb-4"
            />
            <div className="h-16 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="text-xl md:text-2xl text-gray-300"
              >
                I build <TypewriterEffect 
                  words={['professional websites', 'web applications', 'robust backends', 'user interfaces']} 
                  className="font-bold text-primary"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-12"
          >
            <button 
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center mx-auto"
            >
              View My Work
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <span className="text-sm mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 