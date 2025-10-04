import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
