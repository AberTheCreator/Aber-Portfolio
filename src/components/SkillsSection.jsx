import React from 'react';

const SkillsSection = ({ setActiveSection }) => {
  return (
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
  );
};

export default SkillsSection;
