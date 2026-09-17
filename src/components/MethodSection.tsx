import React from 'react';
import { useInView } from '../hooks/useInView';
import { methodSteps } from '../data/siteData';

export const MethodSection: React.FC = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="programs" ref={ref} className="relative py-24 md:py-36 bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime-400/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-12 left-0 md:left-12 text-[15vw] font-black text-white/[0.015] leading-none pointer-events-none select-none" aria-hidden="true">
        03
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">03 — Method</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2 className="display-lg text-white">
                The Carter<br />
                <span className="text-gradient">Performance</span><br />
                Method.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className="text-gray-400 leading-relaxed text-lg">
                A proven four-step framework that transforms random effort into measurable, sustainable progress.
              </p>
            </div>
          </div>
        </div>

        {/* Method Steps - Horizontal timeline on desktop */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-lime-400/30 via-lime-400/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {methodSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative ${isInView ? `animate-fade-in-up delay-${(index + 1) * 150}` : 'opacity-0'}`}
              >
                {/* Node on timeline */}
                <div className="hidden lg:flex absolute top-14 left-0 right-0 justify-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    index === 0 ? 'bg-lime-400 border-lime-400' : 'bg-gray-950 border-lime-400/40'
                  }`} />
                </div>

                {/* Card */}
                <div className="bg-gray-900/50 rounded-sm p-8 border border-white/5 hover:border-lime-400/20 transition-all duration-500 h-full group card-hover">
                  {/* Step number - oversized */}
                  <div className="text-6xl md:text-7xl font-black text-white/[0.04] group-hover:text-lime-400/10 transition-colors leading-none mb-4">
                    {String(step.number).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                  {/* Bottom accent */}
                  <div className="mt-6 h-px bg-gradient-to-r from-lime-400/20 to-transparent w-0 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
