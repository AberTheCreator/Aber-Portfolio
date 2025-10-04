import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white hover:text-orange-400 transition-colors duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm"
        aria-label="Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
};

export default Navigation;
