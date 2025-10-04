import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HamburgerMenu from './components/HamburgerMenu';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import ApproachSection from './components/ApproachSection';
import VisionSection from './components/VisionSection';
import CTASection from './components/CTASection';
import SkillsSection from './components/SkillsSection';
import UpskillingSection from './components/UpskillingSection';
import ProjectsSection from './components/ProjectsSection';
import DevFunSection from './components/DevFunSection';
import ClosingSection from './components/ClosingSection';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HamburgerMenu 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        setActiveSection={setActiveSection}
      />

      {activeSection === 'hero' && (
        <div className="min-h-screen">
          <HeroSection />
          <JourneySection />
          <ApproachSection />
          <VisionSection />
          <CTASection setMenuOpen={setMenuOpen} />
        </div>
      )}

      {activeSection === 'skills' && <SkillsSection setActiveSection={setActiveSection} />}
      {activeSection === 'upskilling' && <UpskillingSection setActiveSection={setActiveSection} />}
      {activeSection === 'projects' && <ProjectsSection setActiveSection={setActiveSection} />}
      {activeSection === 'devfun' && <DevFunSection setActiveSection={setActiveSection} />}
      {activeSection === 'closing' && <ClosingSection setActiveSection={setActiveSection} />}
    </div>
  );
};

export default App;
