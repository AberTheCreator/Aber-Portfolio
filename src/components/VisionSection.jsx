import React from 'react';
import { ChevronDown } from 'lucide-react';

const VisionSection = () => {
  return (
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
  );
};

export default VisionSection;
