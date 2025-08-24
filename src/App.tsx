import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  User,
  Code,
  Palette,
  Monitor,
  Layers,
  Edit3,
  Play,
  Camera,
  Figma,
  Github,
  Menu,
  X,
  Star,
  Zap,
  Sparkles,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Gamepad2,
  Brain,
  Rocket,
  Target
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400/10 to-blue-500/10 backdrop-blur-sm"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-yellow-400/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-blue-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-8 h-8 bg-yellow-400/30 transform rotate-45"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-yellow-400"
            >
              Aravindh A
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                      activeSection === item.id
                        ? 'text-yellow-400 bg-yellow-400/10'
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="relative z-10 pt-16">
        {/* Paper Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden relative m-4 md:m-8"
        >
          {/* Paper Clip */}
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 12, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute -top-4 left-8 z-20"
          >
            <div className="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full rounded-b-sm shadow-lg">
              <div className="w-12 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full rounded-b-sm mx-auto mt-1"></div>
              <div className="w-8 h-12 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-full rounded-b-sm mx-auto -mt-14"></div>
            </div>
          </motion.div>

          {/* Header Section */}
          <motion.div
            id="home"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative bg-white p-8 border-b-2 border-gray-100"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Photo */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex-shrink-0"
              >
                <div className="w-48 h-64 bg-yellow-400 rounded-lg overflow-hidden shadow-lg relative">
                  <div className="absolute inset-4 bg-gray-800 rounded-lg flex items-center justify-center">
                    <User size={80} className="text-gray-400" />
                  </div>
                </div>
              </motion.div>

              {/* Personal Info */}
              <div className="flex-1">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl font-bold text-gray-900 mb-2"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Aravindh A
                  </motion.span>
                </motion.h1>
                
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-6 leading-relaxed"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    I do creative motion graphics from scratch designing to animation assets 
                    motion script and storyboarding
                  </motion.span>
                </motion.p>

                {/* Info Grid */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                >
                  <motion.div variants={itemVariants} className="space-y-2">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <span className="font-semibold text-gray-700">DOB:</span>
                      <span className="text-gray-600">23.01.2001</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <Phone size={16} className="text-gray-600" />
                      <span className="text-gray-600">+91 7904692069</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <Mail size={16} className="text-gray-600" />
                      <span className="text-gray-600">aavi403@gmail.com</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink size={16} className="text-gray-600" />
                      <span className="text-gray-600">https://www.behance.net/Aravindh_A</span>
                    </motion.div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <MapPin size={16} className="text-gray-600" />
                      <span className="text-gray-600">LOC: Thanjavur</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <span className="font-semibold text-gray-700">Lang:</span>
                      <span className="text-gray-600">Tamil (Native), English (Basic)</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* QR Code and Contact */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-between"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gray-200 rounded border-2 border-gray-300 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-black rounded grid grid-cols-4 gap-px p-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="text-right"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="text-red-500 italic mb-2"
                    >
                      Please don't hesitate to<br />
                      reach me if this resume<br />
                      doesn't provide enough<br />
                      clarification
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2"
                    >
                      <Phone size={16} className="text-red-500" />
                      <span className="text-gray-700">+91 7904692069</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 mt-1"
                    >
                      <Linkedin size={16} className="text-blue-600" />
                      <span className="text-gray-700">www.linkedin.com</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-gray-700 mt-1"
                    >
                      aravindh.a.2019@gmail.com
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Work Experience */}
              <motion.section
                id="experience"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative mb-6"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
                  >
                    Work Experiences
                  </motion.h2>
                </motion.div>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {[
                    {
                      period: "Sep 2022 - Present : 1 yr",
                      title: "Motion Graphic & UI Designer",
                      company: "Insnap Technologies Pvt Ltd",
                      type: "Full-time",
                      location: "Bengaluru, Karnataka, India"
                    },
                    {
                      period: "Jun 2022 - Aug 2022 : 3 mos",
                      title: "Motion Graphic & UI Designer",
                      company: "RDS Digital",
                      type: "Full-time",
                      location: "Bengaluru, Karnataka, India"
                    },
                    {
                      period: "Jan 2022 - May 2022 : 5 mos",
                      title: "Motion Graphic & UI Designer",
                      company: "Everything Design",
                      type: "Internship",
                      location: "Bengaluru, Karnataka, India"
                    }
                  ].map((job, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="border-l-4 border-yellow-400 pl-6 relative bg-gray-50 p-4 rounded-r-lg"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="absolute -left-2 top-4 w-4 h-4 bg-yellow-400 rounded-full"
                      />
                      <div className="text-sm text-gray-600 mb-1">{job.period}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <div className="text-gray-700 mb-1">
                        {job.company} • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{job.type}</span>
                      </div>
                      <div className="text-sm text-gray-600">{job.location}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Education */}
              <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative mb-6"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
                  >
                    Education
                  </motion.h2>
                </motion.div>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {[
                    {
                      period: "2019 - 2022",
                      institution: "Vellore Institute of Technology",
                      degree: "Bsc Multimedia & animation",
                      grade: "CGPA 8.57",
                      location: "Vellore, Tamilnadu, India"
                    },
                    {
                      period: "2017 - 2018",
                      institution: "Sri Shanmuka Hr. Sec. School",
                      degree: "Sr.Secondary School of Education",
                      grade: "Pct 75 %",
                      location: "Mannargudi, Tamilnadu, India"
                    }
                  ].map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="border-l-4 border-yellow-400 pl-6 relative bg-gray-50 p-4 rounded-r-lg"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="absolute -left-2 top-4 w-4 h-4 bg-yellow-400 rounded-full"
                      />
                      <div className="text-sm text-gray-600 mb-1">{edu.period}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.institution}</h3>
                      <div className="text-gray-700 mb-1">
                        {edu.degree} • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">{edu.grade}</span>
                      </div>
                      <div className="text-sm text-gray-600">{edu.location}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Area of Expertise - Moved below Education */}
              <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative mb-6"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
                  >
                    Area of Expertise
                  </motion.h2>
                </motion.div>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {[
                    { name: "React Development", icon: Code, color: "bg-blue-500" },
                    { name: "Node.js", icon: Database, color: "bg-green-500" },
                    { name: "TypeScript", icon: Cpu, color: "bg-blue-600" },
                    { name: "Next.js", icon: Globe, color: "bg-black" },
                    { name: "Mobile Development", icon: Smartphone, color: "bg-purple-500" },
                    { name: "Game Development", icon: Gamepad2, color: "bg-red-500" },
                    { name: "AI/ML", icon: Brain, color: "bg-pink-500" },
                    { name: "DevOps", icon: Rocket, color: "bg-orange-500" },
                    { name: "UI/UX Design", icon: Palette, color: "bg-cyan-500" },
                    { name: "Motion Graphics", icon: Play, color: "bg-yellow-500" },
                    { name: "3D Modeling", icon: Layers, color: "bg-indigo-500" },
                    { name: "Digital Marketing", icon: Target, color: "bg-teal-500" }
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${skill.color} text-white p-4 rounded-lg text-center shadow-lg cursor-pointer`}
                    >
                      <skill.icon size={24} className="mx-auto mb-2" />
                      <div className="text-xs font-semibold">{skill.name}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Software Skills */}
              <motion.section
                id="skills"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative mb-6"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
                  >
                    Software Skills
                  </motion.h2>
                </motion.div>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { name: "After Effects", short: "Ae", color: "bg-blue-900", level: 95 },
                    { name: "Premiere Pro", short: "Pr", color: "bg-purple-900", level: 90 },
                    { name: "Photoshop", short: "Ps", color: "bg-blue-600", level: 88 },
                    { name: "Illustrator", short: "Ai", color: "bg-orange-600", level: 85 },
                    { name: "Adobe XD", short: "Xd", color: "bg-pink-600", level: 80 },
                    { name: "Figma", short: "Fg", color: "bg-gray-800", level: 92 },
                    { name: "Dimension", short: "Dn", color: "bg-green-600", level: 75 },
                    { name: "Maya", short: "M", color: "bg-teal-600", level: 70 },
                    { name: "Framer Motion", short: "Fm", color: "bg-indigo-600", level: 85 }
                  ].map((software, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -5, 5, 0],
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`${software.color} text-white p-4 rounded-lg text-center shadow-lg cursor-pointer relative overflow-hidden group`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className="relative z-10"
                      >
                        <div className="text-2xl font-bold mb-1">{software.short}</div>
                        <div className="text-xs mb-2">{software.name}</div>
                        <motion.div
                          className="w-full bg-white/20 rounded-full h-1"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                        >
                          <motion.div
                            className="bg-white h-1 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${software.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.7, duration: 1 }}
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="absolute top-1 right-1"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles size={12} className="text-white/50" />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </div>
          </div>

          {/* Projects Section */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative mb-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 bg-yellow-400 inline-block px-6 py-3 rounded"
              >
                Featured Projects
              </motion.h2>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Brand Identity Design",
                  description: "Complete brand identity package including logo, business cards, and marketing materials with modern design principles.",
                  category: "Branding",
                  color: "bg-purple-500",
                  icon: Palette,
                  github: "https://github.com/aravindh/brand-identity",
                  demo: "https://brand-demo.com",
                  tech: ["Illustrator", "Photoshop", "InDesign"]
                },
                {
                  title: "Motion Graphics Reel",
                  description: "Animated promotional video showcasing product features with smooth transitions and engaging visual effects.",
                  category: "Animation",
                  color: "bg-blue-500",
                  icon: Play,
                  github: "https://github.com/aravindh/motion-reel",
                  demo: "https://motion-demo.com",
                  tech: ["After Effects", "Premiere Pro", "Cinema 4D"]
                },
                {
                  title: "UI/UX Mobile App",
                  description: "Modern mobile application design with intuitive user experience, clean interface, and accessibility features.",
                  category: "UI Design",
                  color: "bg-green-500",
                  icon: Smartphone,
                  github: "https://github.com/aravindh/mobile-ui",
                  demo: "https://mobile-demo.com",
                  tech: ["Figma", "Adobe XD", "Principle"]
                },
                {
                  title: "Editorial Layout",
                  description: "Magazine layout design with creative typography, visual hierarchy, and engaging content presentation.",
                  category: "Print Design",
                  color: "bg-red-500",
                  icon: Edit3,
                  github: "https://github.com/aravindh/editorial-design",
                  demo: "https://editorial-demo.com",
                  tech: ["InDesign", "Photoshop", "Illustrator"]
                },
                {
                  title: "Social Media Campaign",
                  description: "Comprehensive social media visual campaign with consistent branding and engaging content strategy.",
                  category: "Digital Marketing",
                  color: "bg-orange-500",
                  icon: Target,
                  github: "https://github.com/aravindh/social-campaign",
                  demo: "https://social-demo.com",
                  tech: ["Photoshop", "After Effects", "Canva"]
                },
                {
                  title: "3D Product Visualization",
                  description: "Photorealistic 3D renders for product showcase, marketing materials, and interactive presentations.",
                  category: "3D Design",
                  color: "bg-cyan-500",
                  icon: Layers,
                  github: "https://github.com/aravindh/3d-visualization",
                  demo: "https://3d-demo.com",
                  tech: ["Maya", "Blender", "Dimension"]
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                >
                  <motion.div
                    className={`h-32 ${project.color} flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-2 right-2"
                    >
                      <Star size={16} className="text-white/30" />
                    </motion.div>
                    <project.icon size={48} className="text-white" />
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{project.category}</span>
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-blue-600"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-600 text-sm leading-relaxed mb-4"
                    >
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-yellow-400 p-8 relative overflow-hidden"
          >
            {/* Background Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-20 h-20 border-4 border-gray-900/10 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 left-10 w-16 h-16 bg-gray-900/10 rounded-lg transform rotate-45"
            />

            <div className="max-w-4xl mx-auto relative z-10">
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-4xl font-bold text-gray-900 text-center mb-8"
              >
                Let's Work Together
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-gray-900 mb-6"
                  >
                    Send Message
                  </motion.h3>
                  <form className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: "#facc15" }}
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: "#facc15" }}
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.textarea
                        whileFocus={{ scale: 1.02, borderColor: "#facc15" }}
                        placeholder="Your Message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
                      />
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Send Message</span>
                    </motion.button>
                  </form>
                </motion.div>
                
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg p-6 shadow-lg"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-gray-900 mb-4"
                    >
                      Contact Information
                    </motion.h3>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {[
                        { icon: Phone, text: "+91 7904692069", color: "text-yellow-600" },
                        { icon: Mail, text: "aavi403@gmail.com", color: "text-yellow-600" },
                        { icon: MapPin, text: "Thanjavur, Tamil Nadu, India", color: "text-yellow-600" },
                        { icon: ExternalLink, text: "behance.net/Aravindh_A", color: "text-yellow-600" }
                      ].map((contact, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ x: 10, scale: 1.05 }}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <contact.icon className={contact.color} size={20} />
                          <span className="text-gray-700">{contact.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg p-6 shadow-lg"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-gray-900 mb-4"
                    >
                      Available For
                    </motion.h3>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      {[
                        "Freelance Projects",
                        "Full-time Opportunities",
                        "Collaborations"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-2"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            className="w-2 h-2 bg-green-500 rounded-full"
                          />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default App;