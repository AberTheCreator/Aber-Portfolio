import React from 'react';
import { ChevronDown } from 'lucide-react';

const ApproachSection = () => {
  return (
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
  );
};

export default ApproachSection;
