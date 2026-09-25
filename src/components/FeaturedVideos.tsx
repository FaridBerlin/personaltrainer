import React, { useState } from 'react';
import { Play, Eye, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { VideoModal } from './VideoModal';
import { videos } from '../data/videos';

const handleVideoKey = (e: React.KeyboardEvent, callback: () => void) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};

export const FeaturedVideos: React.FC = () => {
  const { ref, isInView } = useInView(0.1);
  const [modalVideo, setModalVideo] = useState<{ title: string; thumbnail: string } | null>(null);

  const featuredVideo = videos.find(v => v.featured);
  const otherVideos = videos.filter(v => !v.featured);

  return (
    <section id="videos" ref={ref} className="relative py-24 md:py-36 bg-gray-950 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-lime-400/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`mb-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-lime-400 font-mono text-xs tracking-[0.3em] uppercase">06 — Training</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="display-lg text-white">
                Train with me<br />
                <span className="text-gradient">for free.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-gray-400 leading-relaxed">
                Access hundreds of free training videos on YouTube. Start learning proper technique today.
              </p>
            </div>
          </div>
        </div>

        {/* Asymmetric video grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Featured Video - Large */}
          {featuredVideo && (
            <div
              className={`col-span-12 md:col-span-8 relative group cursor-pointer ${isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}
              onClick={() => setModalVideo({ title: featuredVideo.title, thumbnail: featuredVideo.thumbnail })}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${featuredVideo.title}`}
              onKeyDown={(e) => handleVideoKey(e, () => setModalVideo({ title: featuredVideo.title, thumbnail: featuredVideo.thumbnail }))}
            >
              <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 group-hover:border-lime-400/20 transition-all duration-500">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-lime-400 rounded-full flex items-center justify-center shadow-lg shadow-lime-400/30 group-hover:scale-110 transition-transform duration-300">
                    <Play size={28} className="text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-sm">
                  <Clock size={12} className="text-gray-300" />
                  <span className="text-xs text-gray-300 font-mono">{featuredVideo.duration}</span>
                </div>
                {/* View count badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-sm">
                  <Eye size={12} className="text-lime-400" />
                  <span className="text-xs text-white font-medium">{featuredVideo.views}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-lime-400 transition-colors">{featuredVideo.title}</h3>
              </div>
            </div>
          )}

          {/* Side stacked videos */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-6">
            {otherVideos.slice(0, 2).map((video, i) => (
              <div
                key={video.id}
                className={`group relative cursor-pointer flex-1 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={isInView ? { animationDelay: `${(i + 2) * 200}ms` } : undefined}
                onClick={() => setModalVideo({ title: video.title, thumbnail: video.thumbnail })}
                role="button"
                tabIndex={0}
                aria-label={`Play video: ${video.title}`}
                onKeyDown={(e) => handleVideoKey(e, () => setModalVideo({ title: video.title, thumbnail: video.thumbnail }))}
              >
                <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 group-hover:border-lime-400/20 transition-all duration-500 h-full">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                      <Play size={18} className="text-gray-900 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-sm">
                    <span className="text-[10px] text-gray-300 font-mono">{video.duration}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-white group-hover:text-lime-400 transition-colors line-clamp-2">{video.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <Eye size={10} />
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - remaining videos */}
          {otherVideos.slice(2).map((video, i) => (
            <div
              key={video.id}
              className={`col-span-12 sm:col-span-6 md:col-span-4 group relative cursor-pointer ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={isInView ? { animationDelay: `${(i + 4) * 150}ms` } : undefined}
              onClick={() => setModalVideo({ title: video.title, thumbnail: video.thumbnail })}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${video.title}`}
              onKeyDown={(e) => handleVideoKey(e, () => setModalVideo({ title: video.title, thumbnail: video.thumbnail }))}
            >
              <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 group-hover:border-lime-400/20 transition-all duration-500">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                    <Play size={18} className="text-gray-900 ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded-sm">
                  <span className="text-[10px] text-gray-300 font-mono">{video.duration}</span>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-white group-hover:text-lime-400 transition-colors line-clamp-2">{video.title}</h4>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <Eye size={10} />
                  <span>{video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {modalVideo && (
        <VideoModal
          isOpen={true}
          onClose={() => setModalVideo(null)}
          title={modalVideo.title}
          thumbnail={modalVideo.thumbnail}
        />
      )}
    </section>
  );
};
