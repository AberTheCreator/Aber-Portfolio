import React from 'react';

const ClosingSection = ({ setActiveSection }) => {
  return (
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
  );
};

export default ClosingSection;
