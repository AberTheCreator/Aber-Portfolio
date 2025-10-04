import React from 'react';

const DevFunSection = ({ setActiveSection }) => {
  return (
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
  );
};

export default DevFunSection;
