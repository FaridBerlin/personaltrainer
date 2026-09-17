import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { testimonials } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const { ref, isInView } = useInView(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
  const next = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-gray-900 overflow-hidden">
      {/* Background quote mark */}
      <div className="absolute top-12 left-8 md:left-16 text-[20vw] font-serif text-white/[0.02] leading-none pointer-events-none select-none" aria-hidden="true">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex items-end justify-between mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">07 — Testimonials</span>
              <div className="w-16 h-px bg-white/5" />
            </div>
            <h2 className="display-md text-white">
              What clients<br /><span className="text-gradient">say.</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2 pb-4">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-lime-400/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-lime-400"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-lime-400/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-lime-400"
              aria-label="Next testimonials"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="overflow-hidden" role="region" aria-label="Client testimonials" aria-roledescription="carousel">
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Showing testimonials {currentIndex + 1} to {Math.min(currentIndex + itemsPerPage, testimonials.length)} of {testimonials.length}
          </div>
          <div
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="bg-gray-950/50 rounded-sm p-8 border border-white/5 hover:border-lime-400/10 transition-all duration-500 h-full flex flex-col group">
                  {/* Quote icon */}
                  <Quote size={28} className="text-lime-400/20 mb-6 group-hover:text-lime-400/40 transition-colors" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < testimonial.rating ? 'text-lime-400 fill-lime-400' : 'text-gray-700'}
                      />
                    ))}
                  </div>

                  {/* Quote text - editorial style */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-8 font-light">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} profile`}
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">{testimonial.location} • {testimonial.goal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8 gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-lime-400' : 'w-4 bg-white/10 hover:bg-white/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Fictional note */}
        <p className="text-center text-[10px] text-gray-700 mt-6 uppercase tracking-wider">
          * Fictional demo content for illustration purposes
        </p>
      </div>
    </section>
  );
};
