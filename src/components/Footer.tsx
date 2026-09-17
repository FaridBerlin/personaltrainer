import React from 'react';
import { Youtube, Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { navItems } from '../data/siteData';
import { scrollToSection } from '../utils/scroll';

const TikTokIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.3 0 .59.04.86.12V9.37a6.33 6.33 0 00-.86-.06A6.34 6.34 0 003.15 15.65 6.34 6.34 0 009.49 22a6.34 6.34 0 006.34-6.34V9.05a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.48z" />
  </svg>
);

interface SocialLink {
  label: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { label: 'YouTube', icon: <Youtube size={16} /> },
  { label: 'Instagram', icon: <Instagram size={16} /> },
  { label: 'TikTok', icon: <TikTokIcon /> },
  { label: 'Facebook', icon: <Facebook size={16} /> },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="mb-16 pb-16 border-b border-white/5">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Brand statement */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-lime-400 rounded-sm flex items-center justify-center">
                  <span className="text-gray-900 font-black text-xs">CP</span>
                </div>
                <span className="text-white font-bold text-sm tracking-tight">
                  CARTER <span className="text-lime-400">PERFORMANCE</span>
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-light text-gray-300 leading-snug max-w-lg">
                Building stronger bodies and more resilient lives through evidence-based coaching.
              </p>
            </div>

            {/* Links */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold mb-4">Navigate</h4>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:text-lime-400"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold mb-4">Programs</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('#coaching')} className="text-gray-400 hover:text-white text-sm transition-colors">Online Coaching</button></li>
                  <li><button onClick={() => scrollToSection('#programs')} className="text-gray-400 hover:text-white text-sm transition-colors">Self-Guided</button></li>
                  <li><button onClick={() => scrollToSection('#coaching')} className="text-gray-400 hover:text-white text-sm transition-colors">1-to-1 Premium</button></li>
                  <li><button onClick={() => scrollToSection('#videos')} className="text-gray-400 hover:text-white text-sm transition-colors">Free Videos</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <Mail size={12} className="text-lime-400 flex-shrink-0" />
                    <a href="mailto:hello@carterperformance.com" className="hover:text-white transition-colors text-xs">
                      hello@carterperformance.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={12} className="text-lime-400 flex-shrink-0" />
                    <span className="text-xs">Online — Worldwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={`Follow us on ${social.label}`}
                className="w-8 h-8 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-lime-400 hover:border-lime-400/30 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-lime-400"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider">
            <span>© {new Date().getFullYear()} Carter Performance</span>
            <span className="hidden sm:inline text-gray-800" aria-hidden="true">|</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="mt-10 pt-8 border-t border-white/[0.03]">
          <p className="text-[10px] text-gray-700 leading-relaxed text-center max-w-3xl mx-auto uppercase tracking-wider">
            Health Disclaimer: The information on this website is for educational purposes only and is not medical advice. Consult a healthcare professional before starting any exercise or nutrition program. Individual results vary. All names, testimonials, and statistics are fictional demo content.
          </p>
        </div>
      </div>
    </footer>
  );
};
