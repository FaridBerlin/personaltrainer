import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { Button } from './Button';
import { services } from '../data/siteData';
import { scrollToSection } from '../utils/scroll';

export const Services: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="coaching" ref={ref} className="relative py-24 md:py-36 bg-gray-900 overflow-hidden">
      {/* Background number */}
      <div className="absolute top-20 left-0 md:left-12 text-[15vw] font-black text-white/[0.015] leading-none pointer-events-none select-none" aria-hidden="true">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Editorial */}
        <div className={`mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">02 — Coaching</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="display-lg text-white">
                Choose the level of<br />
                <span className="text-gradient">support you need.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-gray-400 leading-relaxed">
                From self-guided programs to premium 1-to-1 coaching, there's a path for every stage of your fitness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards - Editorial asymmetric layout */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group p-8 md:p-10 border border-white/5 transition-all duration-500 card-hover ${
                service.featured
                  ? 'bg-gradient-to-b from-lime-400/[0.04] to-transparent md:-my-4 md:py-14 z-10 glow-lime border-lime-400/20'
                  : 'bg-gray-900/50 hover:bg-gray-800/30'
              } ${isInView ? `animate-fade-in-up delay-${(index + 1) * 200}` : 'opacity-0'}`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-lime-400 text-gray-900 text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-[0.2em]">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Oversized number */}
              <div className={`text-7xl md:text-8xl font-black mb-6 leading-none ${
                service.featured ? 'text-lime-400/20' : 'text-white/[0.05]'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.description}</p>

              {/* Divider */}
              <div className={`h-px mb-8 ${service.featured ? 'bg-lime-400/20' : 'bg-white/5'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0 ${
                      service.featured ? 'bg-lime-400/20' : 'bg-white/5'
                    }`}>
                      <Check size={10} className={service.featured ? 'text-lime-400' : 'text-gray-500'} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {service.featured ? (
                <Button className="w-full" onClick={() => scrollToSection('#apply')}>
                  {service.cta}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              ) : (
                <button
                  onClick={() => scrollToSection('#apply')}
                  className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-lime-400 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-400/50 rounded-sm"
                  aria-label={`${service.cta} — ${service.title}`}
                >
                  {service.cta}
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12 md:h-16">
          <path d="M0 0L1440 60V0H0Z" fill="#050505" />
        </svg>
      </div>
    </section>
  );
};
