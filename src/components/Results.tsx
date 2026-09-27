import React from 'react';
import { TrendingUp, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { transformations } from '../data/transformations';

export const Results: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="results" ref={ref} className="relative py-24 md:py-36 bg-gray-950 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Editorial */}
        <div className={`mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">04 — Results</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="display-lg text-white">
                Real people.<br />
                <span className="text-gradient">Real progress.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-gray-400 leading-relaxed">
                These are real clients who committed to the process. Individual results vary based on consistency and personal circumstances.
              </p>
            </div>
          </div>
        </div>

        {/* Magazine-style asymmetric grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Featured large card */}
          <div className={`col-span-12 md:col-span-7 ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <div className="group relative bg-gray-900/50 rounded-sm overflow-hidden border border-white/5 hover:border-lime-400/20 transition-all duration-500 card-hover h-full">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={transformations[0].beforeImage}
                    alt={`${transformations[0].name} - before`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 text-[10px] text-gray-400 px-2 py-1 rounded-sm uppercase tracking-wider">Before</span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={transformations[0].afterImage}
                    alt={`${transformations[0].name} - after`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-lime-400/90 text-[10px] text-gray-900 font-bold px-2 py-1 rounded-sm uppercase tracking-wider">After</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{transformations[0].name}</h3>
                  <span className="text-xs text-gray-500 font-mono">{transformations[0].period}</span>
                </div>
                <p className="text-sm text-lime-400 font-semibold mb-4 uppercase tracking-wider">{transformations[0].goal}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 italic">"{transformations[0].testimonial}"</p>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp size={14} className="text-lime-400" />
                  <span className="text-white font-medium">{transformations[0].metric}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Two smaller cards stacked */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
            {transformations.slice(1, 3).map((t, i) => (
              <div
                key={t.id}
                className={`group relative bg-gray-900/50 rounded-sm overflow-hidden border border-white/5 hover:border-lime-400/20 transition-all duration-500 card-hover flex-1 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={isInView ? { animationDelay: `${(i + 2) * 200}ms` } : undefined}
              >
                <div className="grid grid-cols-2 gap-0 h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={t.beforeImage}
                      alt={`${t.name} - before`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-black/70 text-[9px] text-gray-400 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Before</span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={t.afterImage}
                      alt={`${t.name} - after`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-lime-400/90 text-[9px] text-gray-900 font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">After</span>
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-sm">{t.name}</h3>
                    <span className="text-[10px] text-gray-500 font-mono">{t.period}</span>
                  </div>
                  <p className="text-xs text-lime-400 font-semibold mb-2 uppercase tracking-wider">{t.goal}</p>
                  <div className="flex items-center gap-1.5 text-xs">
                    <TrendingUp size={12} className="text-lime-400" />
                    <span className="text-gray-300 font-medium">{t.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom full-width card */}
          <div className={`col-span-12 ${isInView ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
            <div className="group relative bg-gray-900/50 rounded-sm overflow-hidden border border-white/5 hover:border-lime-400/20 transition-all duration-500 card-hover">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={transformations[3].beforeImage}
                    alt={`${transformations[3].name} - before`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 text-[10px] text-gray-400 px-2 py-1 rounded-sm uppercase tracking-wider">Before</span>
                </div>
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={transformations[3].afterImage}
                    alt={`${transformations[3].name} - after`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-lime-400/90 text-[10px] text-gray-900 font-bold px-2 py-1 rounded-sm uppercase tracking-wider">After</span>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{transformations[3].name}</h3>
                    <span className="text-xs text-gray-500 font-mono">{transformations[3].period}</span>
                  </div>
                  <p className="text-sm text-lime-400 font-semibold mb-3 uppercase tracking-wider">{transformations[3].goal}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 italic">"{transformations[3].testimonial}"</p>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp size={14} className="text-lime-400" />
                    <span className="text-white font-medium">{transformations[3].metric}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={`mt-12 flex items-start gap-3 bg-gray-900/30 rounded-sm p-5 border border-white/5 max-w-3xl mx-auto ${isInView ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
          <AlertCircle size={16} className="text-gray-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong className="text-gray-500">Disclaimer:</strong> Individual results vary. Results depend on training consistency, nutrition, personal circumstances, and effort. These testimonials represent individual experiences and are not guaranteed outcomes. This is fictional demo content.
          </p>
        </div>
      </div>
    </section>
  );
};
