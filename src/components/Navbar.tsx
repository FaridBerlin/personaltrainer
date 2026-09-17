import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { navItems } from '../data/siteData';
import { scrollToSection } from '../utils/scroll';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-950/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick('#home')}
          >
            <div className="w-8 h-8 bg-lime-400 rounded-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-lime-400/20 transition-shadow">
              <span className="text-gray-900 font-black text-xs tracking-tight">CP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-sm tracking-tight">
                CARTER
              </span>
              <span className="text-lime-400 font-bold text-sm tracking-tight ml-1">
                PERFORMANCE
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white uppercase tracking-wider rounded-sm hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-lime-400/50 editorial-underline"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button size="sm" onClick={() => handleNavClick('#coaching')}>
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-lime-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-8 space-y-1">
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-lime-400/50"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-lime-400/40 font-mono text-xs mr-3">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </button>
            ))}
            <div className="pt-6 border-t border-white/5 mt-6">
              <Button className="w-full" onClick={() => handleNavClick('#coaching')}>
                Apply for Coaching
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
