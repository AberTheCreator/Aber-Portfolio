import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = ({ setActiveSection }) => {
  return (
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
  );
};

export default ProjectsSection;
