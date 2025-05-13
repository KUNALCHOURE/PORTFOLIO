import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'SQL', level: 80 },
  { name: 'CSS/SCSS', level: 85 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Mobile Dev', level: 65 }
];

const SkillBar = ({ skill }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-white">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const CircularProgressBar = ({ percentage, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const circumference = 2 * Math.PI * 45; // 45 is the radius
  const strokeDashoffset = circumference - (circumference * percentage) / 100;
  
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-800 stroke-current"
            strokeWidth="8"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
          />
          <motion.circle
            className="text-primary stroke-current"
            strokeWidth="8"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: inView ? strokeDashoffset : circumference }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <span className="mt-2 text-lg text-gray-300">{label}</span>
    </motion.div>
  );
};

const About = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);
  
  const specialties = [
    { label: 'Frontend', percentage: 90 },
    { label: 'Backend', percentage: 85 },
    { label: 'Databases', percentage: 80 },
    { label: 'DevOps', percentage: 70 }
  ];
  
  return (
    <section 
      id="about" 
      ref={(el) => {
        ref(el);
        sectionRef.current = el;
      }}
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/5 to-black animate-gradient-x opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity, y }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - About Me */}
          <div>
            <h2 className="section-title">About Me</h2>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I'm John Doe, a professional developer with expertise in building robust, 
              scalable web applications. With a solid background in both frontend and backend technologies,
              I deliver comprehensive solutions for complex business requirements.
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My approach combines technical excellence with a deep understanding of business needs.
              I specialize in developing enterprise-grade applications with clean code architecture,
              optimized performance, and comprehensive testing to ensure reliability
              and maintainability.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4">
              {specialties.map((specialty, index) => (
                <CircularProgressBar
                  key={specialty.label}
                  percentage={specialty.percentage}
                  label={specialty.label}
                />
              ))}
            </div>
          </div>
          
          {/* Right Column - Skills and Photo */}
          <div>
            <motion.div 
              className="mb-12 overflow-hidden rounded-lg bg-gray-800 bg-opacity-50 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Placeholder for profile image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-6xl font-bold"
                    animate={{ 
                      boxShadow: ["0px 0px 20px rgba(59, 130, 246, 0.3)", "0px 0px 40px rgba(139, 92, 246, 0.5)", "0px 0px 20px rgba(59, 130, 246, 0.3)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    JD
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
            <div>
              {skills.map(skill => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 