import React from 'react';
import { Check, X as XIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { problems, solutions } from '../data/siteData';

export const ProblemSection: React.FC = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-gray-950 overflow-hidden">
      {/* Diagonal top transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-950 to-transparent -mt-24 z-10" />

      {/* Large background number - editorial element */}
      <div className="absolute top-12 right-0 md:right-12 text-[20vw] font-black text-white/[0.02] leading-none pointer-events-none select-none" aria-hidden="true">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left - Image with asymmetric composition */}
          <div className={`lg:col-span-5 relative ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main image - offset */}
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
                  alt="Structured training session showing focused athlete"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-gray-900 border border-white/10 rounded-sm p-5 max-w-[200px] glow-lime">
                <p className="text-white font-semibold text-sm leading-snug">"Stop training randomly. Start training with purpose."</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-px bg-lime-400" />
                  <span className="text-lime-400 text-xs font-medium">Alex Carter</span>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-lime-400/10 rounded-sm -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`lg:col-span-7 ${isInView ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">01 — The Problem</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            {/* Massive heading */}
            <h2 className="display-lg text-white mb-8">
              Fitness should<br />
              <span className="text-gradient">fit your life.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
              Most people fail not because they lack motivation, but because they lack a system that actually works with their schedule, goals, and lifestyle.
            </p>

            {/* Two-column comparison */}
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Problems */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400/50" />
                  What doesn't work
                </h3>
                <ul className="space-y-3">
                  {problems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3 group">
                      <div className="mt-1 w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                        <XIcon size={10} className="text-red-400" />
                      </div>
                      <span className="text-gray-400 text-sm leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-lime-400/80 font-semibold mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-400/50" />
                  Our approach
                </h3>
                <ul className="space-y-3">
                  {solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3 group">
                      <div className="mt-1 w-4 h-4 rounded-full bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition-colors">
                        <Check size={10} className="text-lime-400" />
                      </div>
                      <span className="text-white text-sm font-medium leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12 md:h-16">
          <path d="M0 60L1440 0V60H0Z" fill="#0a0a0a" />
        </svg>
      </div>
    </section>
  );
};
