import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  thumbnail: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, title, thumbnail }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${title}`}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl bg-gray-950 rounded-sm overflow-hidden border border-white/10 animate-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-1 focus:ring-lime-400"
          aria-label="Close video"
        >
          <X size={18} />
        </button>
        <div className="relative aspect-video bg-gray-900">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center shadow-lg shadow-lime-400/30 glow-lime-strong">
              <Play size={32} className="text-gray-900 ml-1" fill="currentColor" />
            </div>
            <p className="mt-6 text-white font-bold text-lg text-center px-4 max-w-md">{title}</p>
            <p className="mt-2 text-gray-500 text-xs uppercase tracking-wider">Video preview — full content on YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
