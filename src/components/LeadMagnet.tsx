import React, { useState } from 'react';
import { Send, CheckCircle, Download, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const LeadMagnet: React.FC = () => {
  const { ref, isInView } = useInView(0.15);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) { setError('Please enter your email address.'); return; }
    if (!validateEmail(email)) { setError('Please enter a valid email address.'); return; }
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-gray-950 overflow-hidden">
      {/* Diagonal top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12 md:h-16">
          <path d="M0 0L1440 60V0H0Z" fill="#0a0a0a" />
        </svg>
      </div>

      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950" />

      {/* Lime accent glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Content */}
          <div className={`lg:col-span-7 ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">Free Resource</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <h2 className="display-md text-white mb-6">
              Get the free<br />
              <span className="text-gradient">7-day strength</span><br />
              starter plan.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              A complete week of structured workouts designed for beginners and intermediates. Includes exercise descriptions, sets, reps, and progression notes.
            </p>

            {/* Feature bullets */}
            <div className="flex flex-wrap gap-4 mb-10">
              {['4 workouts', 'Exercise demos', 'Nutrition tips', 'Progress tracker'].map((item) => (
                <span key={item} className="text-xs uppercase tracking-wider text-gray-500 bg-white/5 px-3 py-1.5 rounded-sm border border-white/5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Form Card */}
          <div className={`lg:col-span-5 ${isInView ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-10">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-sm bg-lime-400/10 flex items-center justify-center">
                      <Download size={18} className="text-lime-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Instant Download</p>
                      <p className="text-gray-500 text-xs">Delivered to your inbox</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email-input" className="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          id="email-input"
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setError(''); }}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3.5 bg-gray-800/50 border border-white/10 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:border-lime-400/50 transition-all text-sm"
                          aria-describedby={error ? 'email-error' : undefined}
                        />
                      </div>
                      {error && (
                        <p id="email-error" className="text-xs text-red-400" role="alert">{error}</p>
                      )}
                      <button
                        type="submit"
                        className="w-full px-6 py-3.5 bg-lime-400 text-gray-900 font-bold rounded-sm hover:bg-lime-300 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                      >
                        <Send size={14} />
                        Send Me the Guide
                      </button>
                    </div>
                  </form>

                  <p className="mt-4 text-[10px] text-gray-600 uppercase tracking-wider">
                    No spam. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-lime-400/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-lime-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">You're in!</h3>
                  <p className="text-gray-400 text-sm">Check your inbox for the guide.</p>
                  <button
                    onClick={() => { setSubmitted(false); setEmail(''); }}
                    className="mt-4 inline-flex items-center gap-1 text-xs text-lime-400 hover:text-lime-300 transition-colors"
                  >
                    Submit another email <ArrowRight size={12} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
