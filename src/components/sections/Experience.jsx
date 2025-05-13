import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiBriefcase, FiCalendar } from 'react-icons/fi';

const experienceData = [
  {
    id: 1,
    role: "Senior Software Developer",
    company: "Enterprise Solutions Inc.",
    period: "2020 - Present",
    description: "Lead developer for mission-critical enterprise applications serving Fortune 500 clients. Architect and implement scalable backend solutions and optimize system performance across multiple platforms.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    logo: "E"
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Tech Innovations LLC",
    period: "2017 - 2020",
    description: "Developed and maintained full-stack applications with focus on security and scalability. Collaborated with cross-functional teams to deliver high-performance software solutions on time and within scope.",
    technologies: ["JavaScript", "Python", "SQL", "Docker"],
    logo: "T"
  }
];

const ExperienceItem = ({ experience, index, isLast }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const isEven = index % 2 === 0;
  
  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700 top-12 z-0" />
      )}
      
      {/* Timeline node */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 border-4 border-primary flex items-center justify-center z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <span className="text-white font-bold">{experience.logo}</span>
      </motion.div>
      
      {/* Content */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${isEven ? '' : 'md:grid-flow-dense'}`}>
        <div className={`md:text-right ${isEven ? '' : 'md:col-start-2'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
            <div className="flex items-center gap-2 text-primary mb-2 md:justify-end">
              <FiBriefcase size={16} />
              <span>{experience.company}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm md:justify-end">
              <FiCalendar size={14} />
              <span>{experience.period}</span>
            </div>
          </motion.div>
        </div>
        
        <div className={isEven ? 'md:col-start-2' : ''}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            <p className="text-gray-300 mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (inView) {
      setActiveSection('experience');
    }
  }, [inView, setActiveSection]);
  
  return (
    <section 
      id="experience" 
      ref={(el) => {
        ref(el);
        sectionRef.current = el;
      }}
      className="py-24 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title inline-block">Experience</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              My professional journey as a developer, building software solutions that drive business value and solve complex problems.
            </p>
          </motion.div>
        </div>
        
        <div className="relative">
          {experienceData.map((exp, index) => (
            <ExperienceItem 
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            download
          >
            <FiDownload />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 