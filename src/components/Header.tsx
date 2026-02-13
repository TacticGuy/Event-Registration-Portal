import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B1D]/95 backdrop-blur-lg shadow-lg shadow-[#ff6b35]/10 border-b border-[#ff6b35]/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <img
                src="https://www.mfcvit.in/assets/logo_main-DYyPMjX9.png"
                alt="MFC VIT Logo"
                className="h-12 w-12 hover:drop-shadow-lg hover:drop-shadow-[#ff6b35] transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35] to-[#6366f1] rounded-full blur-lg opacity-30 hover:opacity-50 transition-opacity"></div>
            </div>
            <div>
              <span className="text-[#FFFFFF] text-2xl font-bold block bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]/80 bg-clip-text text-transparent">Mozilla FireFox</span>
              <span className="text-transparent bg-gradient-to-r from-[#ff6b35] to-[#6366f1] bg-clip-text text-xs font-semibold">VIT University</span>
            </div>
          </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['event-details', 'registration', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-[#FFFFFF]/80 hover:text-[#ff6b35] transition-colors cursor-pointer font-semibold relative group text-sm uppercase tracking-wider"
                whileHover={{ y: -2 }}
              >
                {section === 'event-details' ? 'Event Details' : section}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#ff6b35] to-[#6366f1] group-hover:w-full transition-all duration-300 rounded-full"></span>
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('registration')}
              className="px-6 py-2 bg-gradient-to-r from-[#ff6b35] via-[#ff8555] to-[#ff6b35] text-white rounded-full font-bold cursor-pointer shadow-lg shadow-[#ff6b35]/50 border border-[#ff6b35]/60 hover:border-[#ff6b35]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 107, 53, 0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FFFFFF] cursor-pointer p-2 hover:bg-gradient-to-r hover:from-[#ff6b35]/20 hover:to-[#6366f1]/20 rounded-lg transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-3 pb-4 bg-gradient-to-b from-[#1a1a2e]/60 to-transparent rounded-xl p-4 backdrop-blur-sm"
          >
            {['event-details', 'registration', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-[#FFFFFF]/80 hover:text-[#ff6b35] transition-colors text-left cursor-pointer font-semibold py-2 px-4 rounded-lg hover:bg-[#ff6b35]/20"
                whileTap={{ scale: 0.95 }}
              >
                {section === 'event-details' ? 'Event Details' : section}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('registration')}
              className="px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ff8555] text-white rounded-lg font-bold cursor-pointer text-center shadow-lg shadow-[#ff6b35]/40"
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}