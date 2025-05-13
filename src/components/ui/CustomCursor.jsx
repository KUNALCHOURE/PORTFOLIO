import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', mouseMove);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      mixBlendMode: "difference",
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#10b981",
      mixBlendMode: "difference"
    }
  };
  
  // Trail dots
  const trailDots = Array.from({ length: 5 }).map((_, index) => (
    <motion.div
      key={index}
      className="trail-dot"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 8 - index,
        height: 8 - index,
        borderRadius: '50%',
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        zIndex: 9999,
        pointerEvents: 'none'
      }}
      animate={{
        x: mousePosition.x - 4 + index * 2,
        y: mousePosition.y - 4 + index * 2
      }}
      transition={{
        type: 'spring',
        mass: 0.2,
        delay: 0.03 * index
      }}
    />
  ));
  
  useEffect(() => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
    const buttonElements = document.querySelectorAll('button, .button');
    
    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');
    const buttonEnter = () => setCursorVariant('button');
    const buttonLeave = () => setCursorVariant('default');
    
    textElements.forEach(element => {
      element.addEventListener('mouseenter', textEnter);
      element.addEventListener('mouseleave', textLeave);
    });
    
    buttonElements.forEach(element => {
      element.addEventListener('mouseenter', buttonEnter);
      element.addEventListener('mouseleave', buttonLeave);
    });
    
    return () => {
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', textEnter);
        element.removeEventListener('mouseleave', textLeave);
      });
      
      buttonElements.forEach(element => {
        element.removeEventListener('mouseenter', buttonEnter);
        element.removeEventListener('mouseleave', buttonLeave);
      });
    };
  }, []);
  
  return (
    <>
      {trailDots}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '2px solid #3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
      />
    </>
  );
};

export default CustomCursor; 