import React, { useState, useEffect } from 'react';
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
  Figma
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

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
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      {/* Paper Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden relative">
        {/* Paper Clip */}
        <div className="absolute -top-4 left-8 z-20">
          <div className="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full rounded-b-sm transform rotate-12 shadow-lg">
            <div className="w-12 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full rounded-b-sm mx-auto mt-1"></div>
            <div className="w-8 h-12 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-full rounded-b-sm mx-auto -mt-14"></div>
          </div>
        </div>

        {/* Header Section */}
        <div className="relative bg-white p-8 border-b-2 border-gray-100">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-64 bg-yellow-400 rounded-lg overflow-hidden shadow-lg relative">
                <div className="absolute inset-4 bg-gray-800 rounded-lg flex items-center justify-center">
                  <User size={80} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-2">Aravindh A</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I do creative motion graphics from scratch designing to animation assets 
                motion script and storyboarding
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-700">DOB:</span>
                    <span className="text-gray-600">23.01.2001</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-gray-600" />
                    <span className="text-gray-600">+91 7904692069</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-gray-600" />
                    <span className="text-gray-600">aavi403@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink size={16} className="text-gray-600" />
                    <span className="text-gray-600">https://www.behance.net/Aravindh_A</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-600" />
                    <span className="text-gray-600">LOC: Thanjavur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-700">Lang:</span>
                    <span className="text-gray-600">Tamil (Native), English (Basic)</span>
                  </div>
                </div>
              </div>

              {/* QR Code and Contact */}
              <div className="flex items-center justify-between">
                <div className="w-20 h-20 bg-gray-200 rounded border-2 border-gray-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black rounded grid grid-cols-4 gap-px p-1">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}></div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-red-500 italic mb-2">
                    Please don't hesitate to<br />
                    reach me if this resume<br />
                    doesn't provide enough<br />
                    clarification
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-red-500" />
                    <span className="text-gray-700">+91 7904692069</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Linkedin size={16} className="text-blue-600" />
                    <span className="text-gray-700">www.linkedin.com</span>
                  </div>
                  <div className="text-gray-700 mt-1">aravindh.a.2019@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 p-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Work Experience */}
            <section>
              <div className="relative mb-6">
                <h2 className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded">
                  Work Experiences
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="text-sm text-gray-600 mb-1">Sep 2022 - Present : 1 yr</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Motion Graphic & UI Designer</h3>
                  <div className="text-gray-700 mb-1">
                    Insnap Technologies Pvt Ltd • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full-time</span>
                  </div>
                  <div className="text-sm text-gray-600">Bengaluru, Karnataka, India</div>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="text-sm text-gray-600 mb-1">Jun 2022 - Aug 2022 : 3 mos</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Motion Graphic & UI Designer</h3>
                  <div className="text-gray-700 mb-1">
                    RDS Digital • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full-time</span>
                  </div>
                  <div className="text-sm text-gray-600">Bengaluru, Karnataka, India</div>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="text-sm text-gray-600 mb-1">Jan 2022 - May 2022 : 5 mos</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Motion Graphic & UI Designer</h3>
                  <div className="text-gray-700 mb-1">
                    Everything Design • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Internship</span>
                  </div>
                  <div className="text-sm text-gray-600">Bengaluru, Karnataka, India</div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="relative mb-6">
                <h2 className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded">
                  Education
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="text-sm text-gray-600 mb-1">2019 - 2022</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Vellore Institute of Technology</h3>
                  <div className="text-gray-700 mb-1">
                    Bsc Multimedia & animation • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">CGPA 8.57</span>
                  </div>
                  <div className="text-sm text-gray-600">Vellore, Tamilnadu, India</div>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="text-sm text-gray-600 mb-1">2017 - 2018</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Sri Shanmuka Hr. Sec. School</h3>
                  <div className="text-gray-700 mb-1">
                    Sr.Secondary School of Education • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">Pct 75 %</span>
                  </div>
                  <div className="text-sm text-gray-600">Mannargudi, Tamilnadu, India</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Area of Expertise */}
            <section>
              <div className="relative mb-6">
                <h2 className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded">
                  Area of Expertise
                </h2>
              </div>
              
              <div className="relative">
                {/* Expertise Diagram */}
                <div className="flex items-center justify-center h-64 relative">
                  {/* Promotional Design */}
                  <div className="absolute top-0 right-8 bg-orange-400 text-white px-4 py-2 rounded-lg transform rotate-12 shadow-lg">
                    <div className="text-sm font-bold">PROMOTIONAL</div>
                    <div className="text-xs">DESIGN</div>
                  </div>
                  
                  {/* UI Design */}
                  <div className="absolute left-4 top-16 bg-red-500 text-white px-6 py-4 rounded-lg transform -rotate-12 shadow-lg">
                    <div className="text-lg font-bold">UI</div>
                    <div className="text-sm">DESIGN</div>
                  </div>
                  
                  {/* Editorial Design */}
                  <div className="absolute left-16 bottom-8 bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg transform rotate-6 shadow-lg">
                    <div className="text-sm font-bold">EDITORIAL</div>
                    <div className="text-xs">DESIGN</div>
                  </div>
                  
                  {/* Motion Graphics */}
                  <div className="absolute right-0 bottom-4 bg-blue-500 text-white px-6 py-4 rounded-full shadow-lg">
                    <div className="text-sm font-bold">MOTION</div>
                    <div className="text-xs text-center">GRAPHICS</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Software Skills */}
            <section>
              <div className="relative mb-6">
                <h2 className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded">
                  Software Skills
                </h2>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {/* Row 1 */}
                <div className="bg-blue-900 text-white p-4 rounded-lg text-center shadow-lg">
                  <div className="text-2xl font-bold mb-1">Ae</div>
                  <div className="text-xs">After effects</div>
                </div>
                <div className="bg-purple-900 text-white p-4 rounded-lg text-center shadow-lg">
                  <div className="text-2xl font-bold mb-1">Pr</div>
                  <div className="text-xs">Premiere pro</div>
                </div>
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center shadow-lg">
                  <div className="text-2xl font-bold mb-1">Ps</div>
                  <div className="text-xs">Photoshop</div>
                </div>
                
                {/* Row 2 */}
                <div className="bg-orange-600 text-white p-4 rounded-lg text-center shadow-lg">
                  <div className="text-2xl font-bold mb-1">Ai</div>
                  <div className="text-xs">Illustrator</div>
                </div>
                <div className="bg-pink-600 text-white p-4 rounded-lg text-center shadow-lg">
                  <div className="text-2xl font-bold mb-1">Xd</div>
                  <div className="text-xs">Adobe xd</div>
                </div>
                <div className="bg-gray-800 text-white p-4 rounded-lg text-center shadow-lg">
                  <Figma size={24} className="mx-auto mb-1" />
                  <div className="text-xs">Figma</div>
                </div>
                
                {/* Row 3 */}
                <div className="bg-green-600 text-white p-4 rounded-lg text-center shadow-lg">
                  <div className="text-2xl font-bold mb-1">Dn</div>
                  <div className="text-xs">Dimension</div>
                </div>
                <div className="bg-teal-600 text-white p-4 rounded-lg text-center shadow-lg">
                  <div className="text-2xl font-bold mb-1">M</div>
                  <div className="text-xs">Maya</div>
                </div>
                <div className="bg-gray-400"></div>
              </div>
            </section>
          </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="bg-gray-50 p-8">
          <div className="relative mb-8">
            <h2 className="text-4xl font-bold text-gray-900 bg-yellow-400 inline-block px-6 py-3 rounded">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Brand Identity Design",
                description: "Complete brand identity package including logo, business cards, and marketing materials.",
                category: "Branding",
                color: "bg-purple-500"
              },
              {
                title: "Motion Graphics Reel",
                description: "Animated promotional video showcasing product features with smooth transitions.",
                category: "Animation",
                color: "bg-blue-500"
              },
              {
                title: "UI/UX Mobile App",
                description: "Modern mobile application design with intuitive user experience and clean interface.",
                category: "UI Design",
                color: "bg-green-500"
              },
              {
                title: "Editorial Layout",
                description: "Magazine layout design with creative typography and visual hierarchy.",
                category: "Print Design",
                color: "bg-red-500"
              },
              {
                title: "Social Media Campaign",
                description: "Comprehensive social media visual campaign with consistent branding.",
                category: "Digital Marketing",
                color: "bg-orange-500"
              },
              {
                title: "3D Product Visualization",
                description: "Photorealistic 3D renders for product showcase and marketing materials.",
                category: "3D Design",
                color: "bg-cyan-500"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-32 ${project.color} flex items-center justify-center`}>
                  <Monitor size={48} className="text-white" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-yellow-400 p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Let's Work Together</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-yellow-600" size={20} />
                      <span className="text-gray-700">+91 7904692069</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-yellow-600" size={20} />
                      <span className="text-gray-700">aavi403@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-yellow-600" size={20} />
                      <span className="text-gray-700">Thanjavur, Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="text-yellow-600" size={20} />
                      <span className="text-gray-700">behance.net/Aravindh_A</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Available For</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Freelance Projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Full-time Opportunities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Collaborations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;