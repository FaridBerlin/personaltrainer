import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { Button } from './Button';
import { scrollToSection } from '../utils/scroll';

export const FinalCTA: React.FC = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="apply" ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gray-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/60" />
      </div>

      {/* Lime accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <div className={`flex items-center justify-center gap-4 mb-10 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="w-12 h-px bg-lime-400/50" />
            <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">Start Today</span>
            <div className="w-12 h-px bg-lime-400/50" />
          </div>

          {/* Massive headline */}
          <h2 className={`display-xl text-white mb-8 ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Your next level<br />
            starts with a <span className="text-gradient">plan.</span>
          </h2>

          {/* Supporting text */}
          <p className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light ${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Stop guessing. Stop starting over. Get a clear, structured plan designed around your goals, your schedule, and your life.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-10 ${isInView ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <Button size="lg" onClick={() => scrollToSection('#coaching')}>
              Apply for Coaching
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollToSection('#programs')}>
              Explore Programs
            </Button>
          </div>

          {/* Trust signals */}
          <div className={`flex flex-wrap justify-center gap-6 md:gap-10 ${isInView ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            {['Free consultation', 'No commitment', '48hr response'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
