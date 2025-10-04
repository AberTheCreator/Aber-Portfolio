import React from 'react';

const CTASection = ({ setMenuOpen }) => {
  return (
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
  );
};

export default CTASection;
