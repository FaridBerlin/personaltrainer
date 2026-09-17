import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { faqItems } from '../data/faq';

export const FAQ: React.FC = () => {
  const { ref, isInView } = useInView(0.1);
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-gray-950 overflow-hidden">
      {/* Background number */}
      <div className="absolute top-20 right-0 md:right-12 text-[15vw] font-black text-white/[0.015] leading-none pointer-events-none select-none" aria-hidden="true">
        08
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - Header */}
          <div className={`lg:col-span-4 ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">08 — FAQ</span>
              </div>
              <h2 className="display-md text-white mb-6">
                Questions<br /><span className="text-gradient">& answers.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Everything you need to know about our coaching programs, pricing, and process.
              </p>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className={`lg:col-span-8 ${isInView ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`border-b border-white/5 transition-colors ${
                    openId === item.id ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none focus:ring-2 focus:ring-lime-400/50 rounded-sm group"
                    aria-expanded={openId === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className="text-lime-400/40 font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-white font-medium text-sm md:text-base group-hover:text-lime-400 transition-colors">{item.question}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                      openId === item.id ? 'bg-lime-400/10 text-lime-400' : 'bg-white/5 text-gray-500 group-hover:text-white'
                    }`}>
                      {openId === item.id ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    className={`overflow-hidden transition-all duration-500 ${
                      openId === item.id ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
                    role="region"
                  >
                    <p className="pl-10 text-gray-400 text-sm leading-relaxed pr-12">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
