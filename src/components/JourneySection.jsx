import React from 'react';
import { ChevronDown } from 'lucide-react';

const JourneySection = () => {
  return (
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
  );
};

export default JourneySection;
