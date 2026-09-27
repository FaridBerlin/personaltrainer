import React from 'react';
import { Play, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from './Button';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { scrollToSection } from '../utils/scroll';

const StatCounter: React.FC<{ value: number; suffix: string; label: string }> = ({ value, suffix, label }) => {
  const { count, ref } = useCountUp(value, 2200);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="display-md text-white tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-1 font-medium">{label}</div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView(0.1);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-end overflow-hidden pb-12 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Athletic training environment with dramatic lighting"
          className="w-full h-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
      </div>

      {/* Asymmetric floating decorative element */}
      <div className="absolute top-24 right-8 md:right-16 w-32 h-40 md:w-48 md:h-60 hidden lg:block" aria-hidden="true">
        <div className="w-full h-full border border-lime-400/20 rounded-sm transform rotate-3 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Eyebrow with line */}
            <div className={`flex items-center gap-4 mb-8 ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="w-16 h-px bg-lime-400 animate-line-grow" />
              <span className="text-lime-400 font-mono text-xs uppercase tracking-[0.3em]">
                Train Smart. Live Strong.
              </span>
            </div>

            {/* Headline */}
            <h1 className={`display-xl text-white mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Build a<br />
              <span className="text-gradient">Stronger</span><br />
              Body.
            </h1>

            {/* Supporting text */}
            <div className={`max-w-xl mb-10 ${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                I help busy people build strength, lose fat, and stay consistent through realistic training and nutrition systems. No fads. No guesswork.
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-16 ${isInView ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <Button size="lg" onClick={() => scrollToSection('#coaching')}>
                Apply for Coaching
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => scrollToSection('#videos')}>
                <Play size={16} className="mr-2" fill="currentColor" aria-hidden="true" />
                Free Training
              </Button>
            </div>
          </div>

          {/* Right side - Stats + Status */}
          <div className={`lg:col-span-4 ${isInView ? 'animate-fade-in-right delay-400' : 'opacity-0'}`}>
            {/* Application status badge */}
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse-dot" aria-hidden="true" />
              <span className="text-xs font-medium text-lime-400 uppercase tracking-wider">Applications Open</span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
              <StatCounter value={1200} suffix="K+" label="YouTube Subscribers" />
              <StatCounter value={12} suffix="K+" label="Clients Coached" />
              <StatCounter value={49} suffix="/50" label="Client Rating" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#social-proof')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-lime-400 transition-colors cursor-pointer group"
        aria-label="Scroll down to content"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" aria-hidden="true" />
      </button>
    </section>
  );
};
