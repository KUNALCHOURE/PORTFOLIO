import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/sections/Hero'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for smoother initial animations
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative bg-black min-h-screen">
      {isLoading ? (
        <motion.div 
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <motion.div 
            className="text-4xl font-bold text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Portfolio
          </motion.div>
        </motion.div>
      ) : (
        <>
          <Navbar activeSection={activeSection} />
          <main>
            <Hero setActiveSection={setActiveSection} />
            <About setActiveSection={setActiveSection} />
            <Projects setActiveSection={setActiveSection} />
            <Experience setActiveSection={setActiveSection} />
            <Contact setActiveSection={setActiveSection} />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
