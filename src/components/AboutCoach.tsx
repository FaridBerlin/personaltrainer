import React from 'react';
import { ArrowRight, Award, BookOpen, Dumbbell, Video, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { Button } from './Button';
import { timeline, credentials } from '../data/siteData';
import { scrollToSection } from '../utils/scroll';

export const AboutCoach: React.FC = () => {
  const { ref, isInView } = useInView(0.1);
  const { count: yearsCount, ref: yearsRef } = useCountUp(10, 1500);

  const credentialIcons = [Dumbbell, Award, BookOpen, Heart, Video];

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-36 bg-gray-900 overflow-hidden">
      {/* Background number */}
      <div className="absolute top-20 right-0 md:right-12 text-[15vw] font-black text-white/[0.015] leading-none pointer-events-none select-none" aria-hidden="true">
        05
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">05 — Coach</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <h2 className="display-lg text-white">
            Meet <span className="text-gradient">Alex Carter.</span>
          </h2>
        </div>

        {/* Asymmetric editorial layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left - Portrait with editorial composition */}
          <div className={`lg:col-span-5 relative ${isInView ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main portrait - asymmetric crop */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80"
                  alt="Alex Carter - Personal Trainer and Fitness Coach"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <div ref={yearsRef} className="absolute -bottom-6 -right-2 md:-right-6 bg-gray-950 border border-lime-400/20 rounded-sm p-5 glow-lime">
                <div className="text-4xl font-black text-lime-400 tabular-nums">{yearsCount}+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">Years Coaching</div>
              </div>

              {/* Decorative frame offset */}
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-lime-400/10 rounded-sm -z-10" />

              {/* Name plate */}
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-lg">Alex Carter</p>
                <p className="text-lime-400 text-xs uppercase tracking-[0.2em]">Head Coach & Founder</p>
              </div>
            </div>
          </div>

          {/* Right - Bio Content */}
          <div className={`lg:col-span-7 ${isInView ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            {/* Bio */}
            <div className="mb-10">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
                I started coaching in 2014 with a simple belief: fitness should be <span className="text-lime-400 font-medium">simple, sustainable, and backed by science.</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                After years of watching people struggle with confusing advice and unsustainable programs, I built Carter Performance to offer something different. My approach combines strength training fundamentals with practical nutrition guidance and real accountability.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {credentials.map((cred, i) => {
                const Icon = credentialIcons[i];
                return (
                  <div key={cred} className="flex items-center gap-3 bg-gray-800/30 rounded-sm p-4 border border-white/5 hover:border-lime-400/10 transition-colors group">
                    <div className="w-8 h-8 rounded-sm bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition-colors">
                      <Icon size={14} className="text-lime-400" />
                    </div>
                    <span className="text-sm text-gray-300">{cred}</span>
                  </div>
                );
              })}
            </div>

            {/* Timeline - editorial style */}
            <div className="mb-10">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-semibold mb-6">Journey</h3>
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-6 relative group">
                    <div className="flex flex-col items-center">
                      <div className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        i === timeline.length - 1 ? 'bg-lime-400 shadow-sm shadow-lime-400/50' : 'bg-gray-600 group-hover:bg-gray-400'
                      }`} />
                      {i < timeline.length - 1 && <div className="w-px h-12 bg-gray-800" />}
                    </div>
                    <div className="pb-8">
                      <span className="text-lime-400 font-mono font-bold text-sm">{item.year}</span>
                      <p className="text-gray-300 text-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline" onClick={() => scrollToSection('#coaching')}>
              Learn More About the Coach
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12 md:h-16">
          <path d="M0 60L1440 0V60H0Z" fill="#050505" />
        </svg>
      </div>
    </section>
  );
};
