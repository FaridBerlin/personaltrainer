import React from 'react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const AnimatedStat: React.FC<{ value: number; suffix: string; label: string; prefix?: string }> = ({ value, suffix, label, prefix = '' }) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center px-4 py-4 border-r border-white/5 last:border-r-0">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tabular-nums tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-500 mt-2 font-medium">{label}</div>
    </div>
  );
};

export const SocialProof: React.FC = () => {
  const { ref, isInView } = useInView(0.2);

  const publications = ['ATHLETE DAILY', 'PERFORMANCE WEEKLY', 'MODERN HEALTH', 'TRAINING LAB', 'FITNESS FORWARD', 'IRON JOURNAL'];

  return (
    <section id="social-proof" ref={ref} className="relative bg-gray-950 border-y border-white/5">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" aria-hidden="true" />

      {/* Stats Row */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          <AnimatedStat value={1200} suffix="K+" label="YouTube Subscribers" />
          <AnimatedStat value={850} suffix="K+" label="Instagram Followers" />
          <AnimatedStat value={12000} suffix="+" label="Transformations" />
          <AnimatedStat value={10} suffix="+" label="Years Experience" />
          <div className="hidden lg:block text-center px-4 py-4 border-r border-white/5 last:border-r-0">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-lime-400 tabular-nums tracking-tight">4.9</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-500 mt-2 font-medium">Client Rating</div>
          </div>
        </div>
      </div>

      {/* Marquee Publications */}
      <div className="border-t border-white/5 overflow-hidden py-6" aria-label="Featured publications">
        <div className="flex items-center">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...publications, ...publications].map((pub, i) => (
              <span key={i} className="mx-8 md:mx-12 text-xs md:text-sm font-bold tracking-[0.2em] text-gray-700" aria-hidden="true">
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true" />
    </section>
  );
};
