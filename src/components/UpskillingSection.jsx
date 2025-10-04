import React from 'react';

const UpskillingSection = ({ setActiveSection }) => {
  return (
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
  );
};

export default UpskillingSection;
