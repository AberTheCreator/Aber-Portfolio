import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import './index.css';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="block w-full text-left py-4 px-8 text-2xl md:text-3xl font-bold text-white hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      <nav className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-orange-400 transition-colors duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      
      <div
        className={`fixed inset-0 bg-gradient-to-br from-blue-900 via-orange-900 to-gray-900 z-40 transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8">
          <NavItem onClick={() => { setActiveSection('skills'); setMenuOpen(false); }}>
            Core Skills
          </NavItem>
          <NavItem onClick={() => { setActiveSection('upskilling'); setMenuOpen(false); }}>
            Currently Upskilling
          </NavItem>
          <NavItem onClick={() => { setActiveSection('projects'); setMenuOpen(false); }}>
            Sample Projects
          </NavItem>
          <NavItem onClick={() => { setActiveSection('devfun'); setMenuOpen(false); }}>
            Why Dev.fun & I Align
          </NavItem>
          <NavItem onClick={() => { setActiveSection('closing'); setMenuOpen(false); }}>
            Closing Statement
          </NavItem>
        </div>
      </div>

      
      {activeSection === 'hero' && (
        <div className="min-h-screen">
          
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 animate-fadeIn">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">Aber</span>.
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-6">
                I am a self-taught Frontend Developer with 3 years of experience building sleek, user-friendly, and scalable applications. Along the way, I've also worked as a technical writer, creating documentation and resources that make complex systems easy to understand and simple to use.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                I don't just write code, I craft experiences, and I communicate them clearly so teams move faster and users feel at home.
              </p>
            </div>
            <div className="flex justify-center mt-4 animate-bounce">
              <ChevronDown size={40} className="text-orange-400" />
            </div>
          </section>

          
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400" style={{ fontFamily: 'Georgia, serif' }}>
                My Journey
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                My path into tech started in Web3 as a community builder. I learned quickly that people don't connect to technology just because it works, they connect because it feels intuitive, welcoming, and human.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                That mindset followed me into development. I taught myself to code, built projects from scratch, and refined my ability to translate ideas into products that are both functional and delightful.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mt-6">
                At the same time, technical writing became part of how I work. I believe great developers don't just solve problems — they make their solutions easy for others to use, understand, and build on.
              </p>
            </div>
            <div className="flex justify-center mt-4 animate-bounce">
              <ChevronDown size={40} className="text-blue-400" />
            </div>
          </section>

          
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500" style={{ fontFamily: 'Georgia, serif' }}>
                My Approach
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
                I focus on clarity, speed, and polish.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300">
                  <p className="text-lg md:text-xl text-gray-300">
                    <span className="font-bold text-orange-400">Clarity</span> in writing code that's clean and maintainable.
                  </p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <p className="text-lg md:text-xl text-gray-300">
                    <span className="font-bold text-blue-400">Speed</span> in shipping features without losing quality.
                  </p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300">
                  <p className="text-lg md:text-xl text-gray-300">
                    <span className="font-bold text-orange-400">Polish</span> in the details — micro-interactions, typography, and motion that make a product feel alive.
                  </p>
                </div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mt-8">
                I bring empathy into everything I build. I listen to teammates, respect the designer's intent, and care deeply about how users experience the final product.
              </p>
            </div>
            <div className="flex justify-center mt-4 animate-bounce">
              <ChevronDown size={40} className="text-blue-400" />
            </div>
          </section>

          
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400" style={{ fontFamily: 'Georgia, serif' }}>
                My Vision
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                Right now, I am excited about the future of AI + Web3 — and how frontend experiences can make powerful technology feel effortless.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                I want to work with teams who share that vision: moving fast, iterating with care, and building products people can trust and enjoy.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                At Dev.fun, I see the perfect opportunity to do just that. I am ready to help accelerate your frontend velocity while keeping your design standards high.
              </p>
            </div>
            <div className="flex justify-center mt-4 animate-bounce">
              <ChevronDown size={40} className="text-orange-400" />
            </div>
          </section>

          
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32">
            <div className="max-w-4xl text-center mx-auto">
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 mb-8">
                I am{' '}
                <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500" style={{ fontFamily: 'Georgia, serif' }}>
                  Aber
                </span>
                , a developer and technical writer who codes with empathy, communicates with clarity, and builds with passion.
              </p>
              <button
                onClick={() => setMenuOpen(true)}
                className="mt-8 px-12 py-4 bg-gradient-to-r from-orange-400 to-blue-500 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Explore My Work
              </button>
            </div>
          </section>
        </div>
      )}

      
      {activeSection === 'skills' && (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 py-20 animate-fadeIn">
          <button
            onClick={() => setActiveSection('hero')}
            className="text-orange-400 hover:text-blue-400 mb-8 transition-colors duration-300"
          >
            ← Back to Home
          </button>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500" style={{ fontFamily: 'Georgia, serif' }}>
            Core Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Frontend</h3>
              <p className="text-gray-300">React, Next.js, TypeScript, Tailwind, Styled Components, CSS-in-JS</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Backend</h3>
              <p className="text-gray-300">Node.js, Express, MongoDB, PostgreSQL</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Testing</h3>
              <p className="text-gray-300">Jest, React Testing Library, Cypress</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Web3 Knowledge</h3>
              <p className="text-gray-300">Smart contract integration, Wallet connection flows, DeFi & NFT product experience</p>
            </div>
          </div>
          <p className="text-lg text-gray-400 italic text-center">
            My skillset isn't just about tech stacks. It is about using the right tools to transform product visions into user experiences that feel alive.
          </p>
        </section>
      )}

      
      {activeSection === 'upskilling' && (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 py-20 animate-fadeIn">
          <button
            onClick={() => setActiveSection('hero')}
            className="text-orange-400 hover:text-blue-400 mb-8 transition-colors duration-300"
          >
            ← Back to Home
          </button>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400" style={{ fontFamily: 'Georgia, serif' }}>
            Currently Upskilling
          </h2>
          <div className="space-y-6 mb-12">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300">
              <p className="text-xl text-gray-300">Advanced frontend performance optimization</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <p className="text-xl text-gray-300">Building scalable design systems</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300">
              <p className="text-xl text-gray-300">Testing with Playwright</p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <p className="text-xl text-gray-300">AI + Web3 integrations</p>
            </div>
          </div>
          <p className="text-lg text-gray-400 italic text-center">
            I believe learning never stops. These areas matter because they help me write faster, cleaner, and more maintainable code, while preparing me for where frontend + Web3 are heading next.
          </p>
        </section>
      )}

      
      {activeSection === 'projects' && (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 py-20 animate-fadeIn">
          <button
            onClick={() => setActiveSection('hero')}
            className="text-orange-400 hover:text-blue-400 mb-8 transition-colors duration-300"
          >
            ← Back to Home
          </button>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500" style={{ fontFamily: 'Georgia, serif' }}>
            Sample Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
              href="https://eno-verse.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-orange-400">EnoVerse</h3>
                <ExternalLink className="text-gray-400 group-hover:text-orange-400 transition-colors" />
              </div>
              <p className="text-gray-300">A live demo of AI-POWERED WEB3 RPG GAME</p>
            </a>
            
              href="https://zaik.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-400">Zaik</h3>
                <ExternalLink className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-gray-300">A DEMO OF WEB3 WALLET AI ASSISTANT THAT ALLOWS USERS TO TRANSFER ASSETS, DO EVERYTHING IN THE WALLET WITH JUST WORD COMMANDS</p>
            </a>
            
              href="https://brane-kohl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-orange-400">Brane</h3>
                <ExternalLink className="text-gray-400 group-hover:text-orange-400 transition-colors" />
              </div>
              <p className="text-gray-300">A DEMO OF A Data INTELLIGENCE AI ASSISTANT</p>
            </a>
          </div>
          <p className="text-lg text-gray-400 italic text-center">
            Each project reflects my love for design-driven engineering. I care about details like typography, motion, and how a user feels when they click.
          </p>
        </section>
      )}

      
      {activeSection === 'devfun' && (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 py-20 animate-fadeIn">
          <button
            onClick={() => setActiveSection('hero')}
            className="text-orange-400 hover:text-blue-400 mb-8 transition-colors duration-300"
          >
            ← Back to Home
          </button>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400" style={{ fontFamily: 'Georgia, serif' }}>
            Why Dev.fun & I Align
          </h2>
          <div className="max-w-4xl p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              Dev.fun is building products at the intersection of AI + Web3, with an emphasis on exceptional design and speed.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              That's exactly where my strengths lie: I translate Figma into pixel-perfect, animated, living interfaces, while collaborating cross-functionally to ship fast. My Web3 background means I understand both the technical and cultural layers of building in this space.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              I want to help Dev.fun accelerate velocity without sacrificing design quality and deliver products that users love coming back to.
            </p>
          </div>
        </section>
      )}

      
      {activeSection === 'closing' && (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 py-20 animate-fadeIn">
          <button
            onClick={() => setActiveSection('hero')}
            className="text-orange-400 hover:text-blue-400 mb-8 transition-colors duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500" style={{ fontFamily: 'Georgia, serif' }}>
              Let's Create Something Unforgettable
            </h2>
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 mb-12">
              I am{' '}
              <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500" style={{ fontFamily: 'Georgia, serif' }}>
                Aber
              </span>
              , a developer and technical writer who codes with empathy, communicates with clarity, and builds with passion.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 mb-12">
              Let's create something unforgettable together.
            </p>
            <button
              onClick={() => setActiveSection('hero')}
              className="px-12 py-4 bg-gradient-to-r from-orange-400 to-blue-500 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
