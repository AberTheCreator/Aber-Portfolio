import React from 'react';

const NavItem = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="block w-full text-left py-4 px-8 text-2xl md:text-3xl font-bold text-white hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform"
    style={{ fontFamily: 'Georgia, serif' }}
  >
    {children}
  </button>
);

const HamburgerMenu = ({ menuOpen, setMenuOpen, setActiveSection }) => {
  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-blue-900 via-orange-900 to-gray-900 z-40 transition-transform duration-500 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col justify-center h-full px-8">
        <NavItem onClick={() => { setActiveSection('skills'); setMenuOpen(false); }}>
          Core Skills
        </NavItem>
        <NavItem onClick={() => { setActiveSection('upskilling'); setMenuOpen(false); }}>
          Currently Upskilling
        </NavItem>
        <NavItem onClick={() => { setActiveSection('projects'); setMenuOpen(false); }}>
          Sample Projects
        </NavItem>
        <NavItem onClick={() => { setActiveSection('devfun'); setMenuOpen(false); }}>
          Why Dev.fun & I Align
        </NavItem>
        <NavItem onClick={() => { setActiveSection('closing'); setMenuOpen(false); }}>
          Closing Statement
        </NavItem>
      </div>
    </div>
  );
};

export default HamburgerMenu;
