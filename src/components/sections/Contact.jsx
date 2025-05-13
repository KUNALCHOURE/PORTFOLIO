import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiGithub, FiTwitter, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

const WavePattern = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
      <svg 
        viewBox="0 0 1440 320" 
        className="absolute w-full min-w-[1440px] h-full left-0"
      >
        <motion.path 
          fill="#3b82f6" 
          fillOpacity="0.6"
          d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,229.3C672,203,768,149,864,138.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,229.3C672,203,768,149,864,138.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,160C672,171,768,149,864,149.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,96L48,122.7C96,149,192,203,288,213.3C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,229.3C672,203,768,149,864,138.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        
        <motion.path 
          fill="#8b5cf6" 
          fillOpacity="0.6"
          d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,154.7C672,139,768,149,864,176C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,154.7C672,139,768,149,864,176C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,208C672,213,768,171,864,144C960,117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,256L48,266.7C96,277,192,299,288,282.7C384,267,480,213,576,202.7C672,192,768,224,864,218.7C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,154.7C672,139,768,149,864,176C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

const InputField = ({ type, name, label, value, onChange, isTextarea = false }) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  
  useEffect(() => {
    setFilled(value.trim() !== '');
  }, [value]);
  
  return (
    <div className="mb-6 relative">
      <motion.div 
        className={`absolute h-full w-full rounded-lg -z-10 bg-gradient-to-r from-primary to-accent opacity-0`}
        animate={{ opacity: focused ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {isTextarea ? (
        <textarea
          name={name}
          className="w-full bg-gray-900 bg-opacity-30 rounded-lg border border-gray-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors duration-300 resize-none"
          rows={5}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-full bg-gray-900 bg-opacity-30 rounded-lg border border-gray-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors duration-300"
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
        />
      )}
      
      <motion.label
        className="absolute text-white pointer-events-none transition-all duration-300"
        initial={{
          top: "50%",
          left: "1rem",
          transform: "translateY(-50%)"
        }}
        animate={{
          top: focused || filled ? "-0.75rem" : "50%",
          left: focused || filled ? "0.75rem" : "1rem",
          transform: focused || filled ? "translateY(0)" : "translateY(-50%)",
          fontSize: focused || filled ? "0.875rem" : "1rem",
          padding: focused || filled ? "0 0.25rem" : "0",
          backgroundColor: focused || filled ? "#000000" : "transparent",
          color: focused ? "#3b82f6" : "#FFFFFF"
        }}
        style={{
          originX: 0,
          originY: 0,
        }}
      >
        {label}
      </motion.label>
    </div>
  );
};

const SocialIcon = ({ icon, url, label }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-gray-400 hover:text-primary hover:bg-gray-700 transition-all duration-300"
    whileHover={{ scale: 1.1, backgroundColor: "#1e293b" }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

const Contact = ({ setActiveSection }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (inView) {
      setActiveSection('contact');
    }
  }, [inView, setActiveSection]);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      
      // Reset form after some time
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      text: "contact@example.com",
      label: "Email"
    },
    {
      icon: <FiMapPin size={24} />,
      text: "New York, USA",
      label: "Location"
    }
  ];
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com", label: "GitHub" },
    { icon: <FiTwitter size={20} />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FiLinkedin size={20} />, url: "https://linkedin.com", label: "LinkedIn" }
  ];
  
  return (
    <section 
      id="contact" 
      ref={(el) => {
        ref(el);
        sectionRef.current = el;
      }}
      className="py-24 bg-black relative overflow-hidden"
    >
      <WavePattern />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title inline-block">Contact</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 bg-opacity-30 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {formStatus === 'success' ? (
                <motion.div
                  className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <InputField
                    type="text"
                    name="name"
                    label="Name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  
                  <InputField
                    type="email"
                    name="email"
                    label="Email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  
                  <InputField
                    name="message"
                    label="Message"
                    value={formState.message}
                    onChange={handleChange}
                    isTextarea={true}
                  />
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-blue-600 text-white py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <motion.div 
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-900 bg-opacity-30 p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="bg-gray-800 p-3 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">{info.label}</h4>
                      <p className="text-white">{info.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Connect on Social Media</h4>
                <motion.div 
                  className="flex space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {socialLinks.map((social, index) => (
                    <SocialIcon
                      key={index}
                      icon={social.icon}
                      url={social.url}
                      label={social.label}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 