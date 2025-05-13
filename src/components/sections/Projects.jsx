import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Enterprise Dashboard",
    description: "Comprehensive admin dashboard for enterprise resource management with real-time analytics, role-based access control, and secure data handling.",
    image: "/placeholder.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    liveUrl: "https://enterprise-dashboard.example.com",
    githubUrl: "https://github.com/example/enterprise-dashboard",
    category: "web"
  },
  {
    id: 2,
    title: "FinTech API",
    description: "Secure and scalable financial technology API with comprehensive documentation, robust error handling, and high-performance transaction processing.",
    image: "/placeholder.jpg",
    technologies: ["Express.js", "PostgreSQL", "TypeScript", "Docker"],
    liveUrl: "https://fintech-api.example.com",
    githubUrl: "https://github.com/example/fintech-api",
    category: "app"
  },
  {
    id: 3,
    title: "Health Management System",
    description: "HIPAA-compliant healthcare management platform with patient records, appointment scheduling, and secure data encryption for medical professionals.",
    image: "/placeholder.jpg",
    technologies: ["React", "GraphQL", "MySQL", "AWS"],
    liveUrl: "https://health-ms.example.com",
    githubUrl: "https://github.com/example/health-ms",
    category: "web"
  },
  {
    id: 4,
    title: "Supply Chain Platform",
    description: "End-to-end supply chain management solution with inventory tracking, vendor management, and advanced analytics for operational optimization.",
    image: "/placeholder.jpg",
    technologies: ["Vue.js", "Firebase", "Node.js", "Docker"],
    liveUrl: "https://supply-chain.example.com",
    githubUrl: "https://github.com/example/supply-chain",
    category: "app"
  },
  {
    id: 5,
    title: "Data Analytics Tool",
    description: "Business intelligence tool with customizable dashboards, report generation, and data visualization for informed decision-making.",
    image: "/placeholder.jpg",
    technologies: ["React", "Python", "TensorFlow", "SQL"],
    liveUrl: "https://data-analytics.example.com",
    githubUrl: "https://github.com/example/data-analytics",
    category: "app"
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description: "High-performance e-commerce platform with inventory management, payment processing, and customer relationship management integration.",
    image: "/placeholder.jpg",
    technologies: ["Next.js", "Stripe API", "MongoDB", "Redux"],
    liveUrl: "https://ecommerce.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    category: "web"
  }
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 bg-opacity-30 rounded-lg overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
          animate={{
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-5xl text-white opacity-20">{project.title.charAt(0)}</div>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 flex items-end"
          animate={{
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 w-full">
            <div className="flex gap-2 mb-2">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-xs bg-primary bg-opacity-20 text-primary px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-blue-600 text-white p-2 rounded transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink />
            </motion.a>
          </div>
          <span className="text-xs uppercase tracking-wider bg-gray-700 text-gray-300 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ setActiveSection }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (inView) {
      setActiveSection('projects');
    }
  }, [inView, setActiveSection]);
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);
  
  const categories = ['all', 'web', 'app'];
  
  return (
    <section 
      id="projects" 
      ref={(el) => {
        ref(el);
        sectionRef.current = el;
      }}
      className="py-24 bg-black relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title inline-block">Projects</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Explore my recent work and professional projects. Each project demonstrates my expertise in developing scalable, high-performance applications for business needs.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 